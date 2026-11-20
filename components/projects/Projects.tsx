"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";
import SectionHeading from "@/components/shared/SectionHeading";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { projects } from "@/data/portfolio";

const CATEGORIES = [
  "All",
  "AI & Agents",
  "Distributed Systems",
  "Data Engineering",
  "Full-Stack & Mobile",
  "DevOps & IT Systems"
];

export default function Projects() {
  const [active, setActive] = useState("All");

  const projectList = Array.isArray(projects)
    ? projects.filter((project) => project?.title)
    : [];

  const filteredProjects =
    active === "All"
      ? projectList
      : projectList.filter((project) => project.category === active);

  const formatUrl = (url?: string) => {
    if (!url || url === "#") return null;
    return url.startsWith("http://") || url.startsWith("https://") ? url : `https://${url}`;
  };

  const hasLiveDemo = (demo?: string, github?: string) => {
    if (!demo || demo === "#") return false;
    // Don't render live demo button if it's just pointing to GitHub repo
    if (demo.includes("github.com") || demo === github) return false;
    return true;
  };

  return (
    <SectionWrapper id="projects">
      <SectionHeading
        eyebrow="03 // PROJECTS"
        title="Custom-engineered production systems."
        description="A curated portfolio of distributed platforms, autonomous AI workflows, data lakehouses, mobile clients, and enterprise infrastructure."
      />

      {/* Category Filter Tabs */}
      <div className="mb-12 flex flex-wrap justify-center gap-2.5">
        {CATEGORIES.map((category) => {
          const isActive = active === category;
          return (
            <button
              key={category}
              type="button"
              onClick={() => setActive(category)}
              className={`focus-ring rounded-lg border px-4 py-2 font-mono text-xs transition duration-150 ${
                isActive
                  ? "border-zinc-300 bg-[#FAFAFA] text-[#09090B] font-semibold"
                  : "border-zinc-800 bg-[#121215] text-zinc-400 hover:border-zinc-700 hover:text-zinc-200"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <motion.div layout className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => {
            const liveUrl = formatUrl(project.demo);
            const githubUrl = formatUrl(project.github);
            const isLive = hasLiveDemo(project.demo, project.github);

            return (
              <motion.article
                layout
                key={project.title}
                className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-[#27272A] bg-[#121215] transition duration-200 hover:border-[#3F3F46]"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25 }}
              >
                <div>
                  <div className="relative h-48 w-full overflow-hidden border-b border-[#27272A] bg-zinc-950">
                    <Image
                      src={project.image || "/projects/project-1.jpg"}
                      alt={`${project.title} project preview`}
                      fill
                      sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                      loading="lazy"
                      onError={(event) => {
                        event.currentTarget.src = "/projects/project-1.jpg";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121215] via-transparent to-transparent opacity-80" />
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono text-xs font-semibold uppercase tracking-wider text-zinc-400">
                        {project.category}
                      </span>
                      {isLive && (
                        <span className="inline-flex items-center gap-1.5 font-mono text-[10px] text-emerald-400">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                          Live
                        </span>
                      )}
                    </div>
                    <h3 className="mt-2.5 text-xl font-bold text-[#FAFAFA] group-hover:text-white transition">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#A1A1AA]">
                      {project.description}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded border border-zinc-800 bg-zinc-900 px-2 py-0.5 font-mono text-[11px] text-zinc-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="border-t border-zinc-800/80 p-6 pt-4 flex gap-3">
                  {githubUrl && (
                    <Link
                      href={githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="focus-ring inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-zinc-800 bg-transparent px-4 py-2.5 font-mono text-xs font-medium text-zinc-200 transition hover:bg-zinc-900 hover:border-zinc-700"
                    >
                      <FaGithub className="text-sm" />
                      <span>GitHub</span>
                    </Link>
                  )}
                  {isLive && liveUrl && (
                    <Link
                      href={liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="focus-ring inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-[#FAFAFA] px-4 py-2.5 font-mono text-xs font-semibold text-[#09090B] transition hover:bg-zinc-200"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
                      <span>Live Demo</span>
                      <FaArrowUpRightFromSquare className="text-[10px]" />
                    </Link>
                  )}
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </SectionWrapper>
  );
}
