export interface Certificate {
  id: string;
  name: string;
  issuer: string;
  date: string;
  tasks: string;
  image?: string;
  verifyUrl?: string;
  verifyText?: string;
  topPriority?: boolean; // Top 6 shown initially
  group?: "Certification" | "Virtual experience programs";
}

export const certificates: Certificate[] = [
  // ==========================================
  // TOP 6 CERTIFICATIONS
  // ==========================================
  {
    id: "freecodecamp-qa",
    name: "Quality Assurance Developer Certification",
    issuer: "freeCodeCamp",
    date: "November 18, 2026",
    tasks: "Issued November 18, 2026 · ~300 hours of coursework and automated testing projects (Chai, Mocha, Advanced Node.js, Helmet.js security headers, headless browser testing).",
    image: "/certificates/freecodecamp-qa.jpg",
    verifyUrl: "https://freecodecamp.org/certification/fcc3de4c1d3-3c18-492e-85a4-032da9f242d0/quality-assurance-v7",
    topPriority: true,
    group: "Certification",
  },
  {
    id: "ms-agentic-ai-part1",
    name: "Developing in Agentic AI Systems Part 1 of 2",
    issuer: "Microsoft",
    date: "October 2026",
    tasks: "Architectural foundations of agentic AI systems, autonomous task planning, and LLM reasoning loops.",
    image: "/certificates/ms-agentic-ai-part1.jpg",
    verifyText: "Microsoft Verified",
    topPriority: true,
    group: "Certification",
  },
  {
    id: "ms-agentic-ai-part2",
    name: "Developing in Agentic AI Systems Part 2 of 2",
    issuer: "Microsoft",
    date: "October 2026",
    tasks: "Multi-agent orchestration, state persistence, tool calling, and human-in-the-loop workflows.",
    image: "/certificates/ms-agentic-ai-part2.jpg",
    verifyText: "Microsoft Verified",
    topPriority: true,
    group: "Certification",
  },
  {
    id: "ms-fabric-analytics",
    name: "Get Started with Microsoft Fabric Analytics",
    issuer: "Microsoft",
    date: "October 2026",
    tasks: "Lakehouse architectures, OneLake integration, Delta tables, and unified enterprise analytics.",
    image: "/certificates/ms-fabric-analytics.jpg",
    verifyText: "Microsoft Verified",
    topPriority: true,
    group: "Certification",
  },
  {
    id: "cisco-prompt-engineer",
    name: "Prompt Engineer",
    issuer: "Cisco Networking Academy",
    date: "October 2026",
    tasks: "Systematic prompt design, few-shot conditioning, chain-of-thought elicitation, and LLM output steering.",
    image: "/certificates/cisco-prompt-engineer.jpg",
    verifyUrl: "https://www.credly.com/badges/5a4141d8-f80e-47cf-a335-5154ee4a047c",
    topPriority: true,
    group: "Certification",
  },
  {
    id: "claude-academy",
    name: "Claude with Anthropic API: Bedrock, Vertex AI",
    issuer: "Claude Academy (Anthropic)",
    date: "October 2026",
    tasks: "Integration of Claude models via AWS Bedrock and GCP Vertex AI, streaming, tool use, and evaluation.",
    image: "/certificates/claude-academy.svg", // Flagged: official image/PDF awaiting user upload
    // Note: Link check returned unresolvable host for academy.anthropic.com; verifyText retained
    verifyText: "Anthropic Claude Academy",
    topPriority: true,
    group: "Certification",
  },

  // ==========================================
  // ADDITIONAL CERTIFICATIONS (IN EXPANDER)
  // ==========================================
  {
    id: "ms-power-bi",
    name: "Get Started with Microsoft Power BI",
    issuer: "Microsoft",
    date: "October 2026",
    tasks: "Data ingestion, star-schema data modeling, interactive dashboard design, and enterprise report publication.",
    image: "/certificates/ms-power-bi.jpg",
    verifyText: "Microsoft Verified",
    group: "Certification",
  },
  {
    id: "ms-cloud-infrastructure",
    name: "Microsoft Cloud Infrastructure",
    issuer: "Microsoft",
    date: "October 2026",
    tasks: "Azure compute, storage architectures, networking security, and cloud scalability principles.",
    image: "/certificates/ms-cloud-infrastructure.jpg",
    verifyText: "Microsoft Verified",
    group: "Certification",
  },
  {
    id: "ms-write-dax",
    name: "Write DAX Formulas for Microsoft Power BI Desktop Semantic Models",
    issuer: "Microsoft",
    date: "October 2026",
    tasks: "Advanced DAX calculations, filter context manipulation, CALCULATE expressions, and semantic model performance tuning.",
    image: "/certificates/ms-write-dax.jpg",
    verifyText: "Microsoft Verified",
    group: "Certification",
  },
  {
    id: "cisco-python-essentials",
    name: "Python Essentials 1",
    issuer: "Cisco Networking Academy",
    date: "October 2026",
    tasks: "Foundations of Python programming, control flows, data structures, and procedural problem-solving.",
    image: "/certificates/cisco-python-essentials.jpg",
    verifyUrl: "https://www.credly.com/badges/28da4117-6468-4663-8a3a-a537f8cf2834",
    group: "Certification",
  },
  {
    id: "cisco-data-analytics",
    name: "Data Analytics Essentials",
    issuer: "Cisco Networking Academy",
    date: "October 2026",
    tasks: "Data collection pipelines, statistical exploration, variance analysis, and reporting methodologies.",
    image: "/certificates/cisco-data-analytics.jpg",
    verifyUrl: "https://www.credly.com/badges/d007f3dc-ea8c-4bc7-b891-bdfcbeba2637",
    group: "Certification",
  },
  {
    id: "cisco-data-science-python",
    name: "Data Science with Python",
    issuer: "Cisco Networking Academy",
    date: "October 2026",
    tasks: "Exploratory data analysis, numerical computing with NumPy, tabular manipulation with Pandas, and data visualization.",
    image: "/certificates/cisco-data-science-python.jpg",
    verifyUrl: "https://www.credly.com/badges/fb64ea87-251f-4cb1-80a5-f377501a24d5",
    group: "Certification",
  },
  {
    id: "freecodecamp-python",
    name: "Scientific Computing with Python",
    issuer: "freeCodeCamp",
    date: "September 2026",
    tasks: "Algorithms, mathematical modeling, numerical computation, and object-oriented design in Python.",
    image: "/certificates/freecodecamp-python.jpg",
    verifyUrl: "https://freecodecamp.org/certification/fcc3de4c1d3-3c18-492e-85a4-032da9f242d0/scientific-computing-with-python-v7",
    group: "Certification",
  },
  {
    id: "freecodecamp-js",
    name: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    date: "October 2026",
    tasks: "ES6+, functional programming, algorithmic problem-solving, and object-oriented principles.",
    image: "/certificates/freecodecamp-js.jpg",
    verifyUrl: "https://freecodecamp.org/certification/fcc3de4c1d3-3c18-492e-85a4-032da9f242d0/javascript-algorithms-and-data-structures-v8",
    group: "Certification",
  },
  {
    id: "yip-6",
    name: "Young Innovators Programme 6.0 – Certificate of Appreciation",
    issuer: "K-DISC & GTech, Government of Kerala",
    date: "January 2024 — March 2024",
    tasks: "Awarded Certificate of Appreciation for collaborative technical innovation and software prototyping addressing complex real-world requirements.",
    image: "/certificates/yip-internship.jpg",
    verifyText: "Certificate ID: µ2024032145",
    group: "Certification",
  },
  {
    id: "aws-iot-training",
    name: "IoT with AWS – Certificate of Training",
    issuer: "IEEE NIT Calicut",
    date: "March 2023",
    tasks: "Hands-on workshop on AWS IoT Core device provisioning, telemetry streaming, MQTT publish-subscribe messaging, and cloud telemetry analytics.",
    image: "/certificates/aws-iot-training.jpg",
    verifyText: "Ragam 2023 Workshop Series",
    group: "Certification",
  },

  // ==========================================
  // VIRTUAL EXPERIENCE PROGRAMS (FORAGE)
  // ==========================================
  {
    id: "skyscanner-frontend",
    name: "Front-End Software Engineering Job Simulation",
    issuer: "Skyscanner (via Forage)",
    date: "October 2026",
    tasks: "Custom web application development using React, Skyscanner open-source Backpack design system components, and automated UI testing.",
    image: "/certificates/skyscanner-frontend.jpg",
    verifyText: "Forage Verified",
    group: "Virtual experience programs",
  },
  {
    id: "commonwealth-swe",
    name: "Software Engineering Job Simulation",
    issuer: "Commonwealth Bank (via Forage)",
    date: "October 2026",
    tasks: "Applied cryptography, hashing algorithms, defensive programming, and banking system security analysis.",
    image: "/certificates/commonwealth-swe.jpg",
    verifyText: "Forage Verified",
    group: "Virtual experience programs",
  },
  {
    id: "bcg-genai",
    name: "GenAI Job Simulation",
    issuer: "BCG (via Forage)",
    date: "October 2026",
    tasks: "Developed an AI chatbot with financial NLP rules, financial metric calculation, and executive reporting.",
    image: "/certificates/bcg-genai.jpg",
    verifyText: "Forage Verified",
    group: "Virtual experience programs",
  },
];
