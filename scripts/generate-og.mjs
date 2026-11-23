import sharp from "sharp";
import fs from "fs";

async function generateOG() {
  const width = 1200;
  const height = 630;

  // Read avatar and resize to 320x320 circle
  const avatarBuffer = fs.readFileSync("public/avatar1.png");
  const avatarResized = await sharp(avatarBuffer)
    .resize(320, 320, { fit: "cover" })
    .toBuffer();

  const circleMask = Buffer.from(
    `<svg width="320" height="320"><circle cx="160" cy="160" r="156" fill="#fff" stroke="#27272A" stroke-width="8"/></svg>`
  );

  const roundedAvatar = await sharp(avatarResized)
    .composite([{ input: circleMask, blend: "dest-in" }])
    .png()
    .toBuffer();

  const svgOverlay = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#09090B"/>
          <stop offset="100%" stop-color="#121215"/>
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#bg)"/>
      <rect x="24" y="24" width="${width - 48}" height="${height - 48}" rx="24" fill="none" stroke="#27272A" stroke-width="2"/>
      
      <!-- Monospace eyebrow -->
      <text x="100" y="220" font-family="monospace" font-size="20" fill="#A1A1AA" letter-spacing="4">PORTFOLIO</text>
      
      <!-- Name -->
      <text x="100" y="320" font-family="sans-serif" font-weight="bold" font-size="76" fill="#FAFAFA">Ayyappan M</text>
      
      <!-- Neutral identity line -->
      <text x="100" y="390" font-family="sans-serif" font-size="24" fill="#A1A1AA">B.Tech Information Technology, 2026 &#183; Kerala, India</text>
      
      <!-- Subtle accent dot -->
      <circle cx="106" cy="450" r="6" fill="#10B981" />
      <text x="126" y="456" font-family="monospace" font-size="18" fill="#D4D4D8">Open to opportunities</text>
    </svg>
  `;

  await sharp(Buffer.from(svgOverlay))
    .composite([
      {
        input: roundedAvatar,
        top: 155,
        left: 760,
      },
    ])
    .png()
    .toFile("public/og-image.png");

  console.log("Successfully generated 1200x630 public/og-image.png");
}

generateOG().catch(console.error);
