import fs from "fs";
import path from "path";

// 1. Check built HTML for role words outside exceptions
const htmlFiles = [];
function findHtml(dir) {
  if (!fs.existsSync(dir)) return;
  for (const f of fs.readdirSync(dir)) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) {
      findHtml(full);
    } else if (f.endsWith(".html")) {
      htmlFiles.push(full);
    }
  }
}
findHtml(".next");

const prohibitedRoles = [
  /software\s+engineer/i,
  /ai\s+engineer/i,
  /full-?stack\s+engineer/i,
  /full-?stack\s+developer/i,
  /devops\s+engineer/i,
  /distributed\s+systems\s+developer/i,
  /distributed\s+systems\s+engineer/i,
];

console.log("=== CHECK 1: SCANNING BUILT HTML FOR ROLE WORDS ===");
let roleViolations = 0;
for (const file of htmlFiles) {
  const content = fs.readFileSync(file, "utf8");
  for (const pattern of prohibitedRoles) {
    if (pattern.test(content)) {
      console.log(`[VIOLATION] Found ${pattern} in ${file}`);
      roleViolations++;
    }
  }
}
if (roleViolations === 0) {
  console.log("✔ PASS: Built HTML has zero prohibited role words.");
}

// 2. Check for Resume/CV download links across all code and built files
console.log("\n=== CHECK 2: SCANNING FOR RESUME/CV DOWNLOAD LINKS ===");
let resumeViolations = 0;
function scanForResume(dir) {
  if (!fs.existsSync(dir)) return;
  for (const f of fs.readdirSync(dir)) {
    if (f === "node_modules" || f === ".git" || f === "user_prompt.txt" || f === "resume-projects.md") continue;
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) {
      scanForResume(full);
    } else if (/\.(tsx|ts|html|js|json)$/.test(f)) {
      const content = fs.readFileSync(full, "utf8");
      if (/download\s+resume|resume\.pdf|href=["'][^"']*resume[^"']*["']/i.test(content)) {
        console.log(`[VIOLATION] Found resume reference in ${full}`);
        resumeViolations++;
      }
    }
  }
}
scanForResume(".");
if (resumeViolations === 0) {
  console.log("✔ PASS: Zero resume download links, buttons, or routes found.");
}

// 3. Inspect Project Buttons in data/projects.ts
console.log("\n=== CHECK 3: PROJECT BUTTON AUDIT ===");
const { projects } = await import("../data/projects.js").catch(async () => {
  return await import("../data/projects.ts");
});

let liveDemoCount = 0;
let githubOnlyCount = 0;
let noButtonCount = 0;

for (const p of projects) {
  if (p.demoUrl && p.githubUrl) {
    liveDemoCount++;
    console.log(`[LIVE + GITHUB] ${p.title} -> Demo: ${p.demoUrl}`);
  } else if (p.githubUrl && !p.demoUrl) {
    githubOnlyCount++;
  } else if (!p.githubUrl && !p.demoUrl) {
    noButtonCount++;
    console.log(`[NO BUTTON (404)] ${p.title}`);
  }
}

console.log(`Total Projects: ${projects.length}`);
console.log(`Live Demo + GitHub: ${liveDemoCount}`);
console.log(`GitHub Only: ${githubOnlyCount}`);
console.log(`Omitted Buttons (404 repos): ${noButtonCount}`);
