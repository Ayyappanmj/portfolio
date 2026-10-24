import {
  FaArrowUpRightFromSquare,
  FaGithub,
  FaEnvelope,
  FaLocationDot,
  FaPhone,
  FaLinkedin,
  FaReact,
  FaNode,
  FaDatabase,
  FaCloud,
  FaToolbox,
  FaCertificate,
  FaStar,
  FaPython,
  FaRobot,
  FaBrain,
  FaChartLine,
  FaServer,
  FaDocker,
  FaCode,
  FaShieldHalved,
  FaVial,
  FaTerminal
} from "react-icons/fa6";

export const profile = {
  name: "AYYAPPAN M",
  title: "Software Engineer | AI & Data Systems Developer",
  location: "India",
  intro:
    "Software Engineer specializing in building production-grade API gateways, autonomous AI agent workflows, high-throughput RAG systems, and enterprise data analytics pipelines. Experienced in test-driven development (TDD), performance profiling, and GitHub Actions CI/CD automation.",
  avatar: "/avatar1.png",
  resume: "/resume.pdf",
  email: "ayyappanmadhuj@gmail.com",
  phone: "+91 9400802451",
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/ayyappanmj", icon: FaLinkedin },
    { label: "GitHub", href: "https://github.com/Ayyappanmj", icon: FaGithub },
  ],
};

export const typingRoles = [
  "Software Engineer",
  "AI & Agentic Systems Developer",
  "Data Engineer & Analytics",
  "Full Stack Developer",
  "Python & MLOps Engineer",
];

export const techIcons = [FaPython, FaBrain, FaServer, FaDatabase, FaDocker];

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const aboutTimeline = [
  {
    year: "2022 - 2026",
    title: "Bachelor of Technology in IT",
    description: "University College of Engineering, Kariyavattom.",
  },
  {
    year: "2021 - 2022",
    title: "Senior Secondary (Class XII)",
    description: "TMGHSS Perignad, Adoor. Percentage: 91.7%",
  },
  {
    year: "2019 - 2020",
    title: "Secondary (Class X)",
    description: "CBMHSS Noornad. Percentage: 95%",
  },
];

export const achievements = [
  { value: 12, label: "Production Projects", icon: FaStar, suffix: "+" },
  { value: 25, label: "Core Skills Mastered", icon: FaBrain, suffix: "+" },
  { value: 3, label: "Internships Completed", icon: FaToolbox, suffix: "" },
  { value: 17, label: "Certifications", icon: FaCertificate, suffix: "+" },
];

export const certifications = [
  {
    name: "Developing in Agentic AI Systems Part 1 of 2",
    issuer: "Microsoft",
    date: "October 2026",
    tasks: "Architectural foundations of agentic AI systems, autonomous task planning, and LLM reasoning loops.",
    image: "/certificates/ms-agentic-ai-part1.jpg",
    verify: "Signed by Satya Nadella • Microsoft",
  },
  {
    name: "Developing in Agentic AI Systems Part 2 of 2",
    issuer: "Microsoft",
    date: "October 2026",
    tasks: "Advanced multi-agent orchestration, tool integration, error recovery, and autonomous execution pipelines.",
    image: "/certificates/ms-agentic-ai-part2.jpg",
    verify: "Signed by Satya Nadella • Microsoft",
  },
  {
    name: "Introduction to End-to-End Analytics using Microsoft Fabric",
    issuer: "Microsoft",
    date: "September 2026",
    tasks: "Unified enterprise lakehouse architecture, data ingestion, pipeline modeling, and end-to-end Fabric analytics.",
    image: "/certificates/ms-fabric-analytics.jpg",
    verify: "Signed by Satya Nadella • Microsoft",
  },
  {
    name: "Get Started Building with Power BI",
    issuer: "Microsoft",
    date: "September 2026",
    tasks: "Interactive data visualization, DAX measures, relational data modeling, and business intelligence reporting.",
    image: "/certificates/ms-power-bi.jpg",
    verify: "Signed by Satya Nadella • Microsoft",
  },
  {
    name: "Introduction to Cloud Infrastructure: Describe Cloud Concepts",
    issuer: "Microsoft",
    date: "September 2026",
    tasks: "Cloud computing architectures, high availability, fault tolerance, scalability, and IaaS/PaaS/SaaS models.",
    image: "/certificates/ms-cloud-infrastructure.jpg",
    verify: "Signed by Satya Nadella • Microsoft",
  },
  {
    name: "AI Fluency: Framework and foundations",
    issuer: "Claude Academy (Anthropic)",
    date: "October 2026",
    tasks: "Foundational AI framework, prompt architecture, and LLM reasoning principles.",
    image: "/certificates/claude-academy.svg",
    verify: "https://academy.claude.com/verify/4166cf6e9e7f771545ffa94fccebd240",
  },
  {
    name: "Scientific Computing with Python",
    issuer: "freeCodeCamp",
    date: "August 2026",
    tasks: "Completed ~300 hours of coursework in algorithms, data structures, and Python computation.",
    image: "/certificates/freecodecamp-python.jpg",
    verify: "https://freecodecamp.org/certification/fcc3de4c1d3-3c18-492e-85a4-032da9f242d0/scientific-computing-with-python-v7",
  },
  {
    name: "Legacy JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    date: "August 2026",
    tasks: "Completed ~300 hours of coursework in JavaScript algorithms, OOP, FP, and complex data structures.",
    image: "/certificates/freecodecamp-js.jpg",
    verify: "https://freecodecamp.org/certification/fcc3de4c1d3-3c18-492e-85a4-032da9f242d0/javascript-algorithms-and-data-structures",
  },
  {
    name: "Python Essentials 1",
    issuer: "Cisco Networking Academy & Python Institute",
    date: "October 2026",
    tasks: "Fundamental Python programming concepts, data collections, conditionals, loops, functions, and modules.",
    image: "/certificates/cisco-python-essentials.jpg",
    verify: "Cert ID: 832864df-a15a-4f58-a597-faf699a09b51",
  },
  {
    name: "Prompt Like an Engineer",
    issuer: "Cisco Networking Academy",
    date: "September 2026",
    tasks: "Engineering-grade prompt design, chain-of-thought methodologies, system prompts, and AI task orchestration.",
    image: "/certificates/cisco-prompt-engineer.jpg",
    verify: "Cert ID: 7ca0e31f-2c03-4742-bf6e-8bb35eb5f5c0",
  },
  {
    name: "Data Science Essentials with Python",
    issuer: "Cisco Networking Academy",
    date: "October 2026",
    tasks: "Statistical data analysis, NumPy arrays, Pandas DataFrames, and data science methodology.",
    image: "/certificates/cisco-data-science-python.jpg",
    verify: "Cert ID: 61bf6313-2db2-43fe-b68d-788f3164d990",
  },
  {
    name: "Data Analytics Essentials",
    issuer: "Cisco Networking Academy",
    date: "September 2026",
    tasks: "Data analytics lifecycle, data transformation, visualization techniques, and business intelligence.",
    image: "/certificates/cisco-data-analytics.jpg",
    verify: "Cert ID: e9ff66eb-b53d-40da-b57b-be3b5da917ef",
  },
  {
    name: "GenAI Job Simulation",
    issuer: "BCG X & Forage",
    date: "September 2026",
    tasks: "Data extraction & analysis; Built an AI-powered financial chatbot.",
    image: "/certificates/bcg-genai.jpg",
    verify: "User Verification: 6aab8dd2c92b2fc145d2f52b",
  },
  {
    name: "Front-End Software Engineering Job Simulation",
    issuer: "Skyscanner & Forage",
    date: "September 2026",
    tasks: "Developed a Backpack React Web Application with responsive flight search UI.",
    image: "/certificates/skyscanner-frontend.jpg",
    verify: "User Verification: 6aab8dd2c92b2fc145d2f52b",
  },
  {
    name: "Software Engineering Job Simulation",
    issuer: "Commonwealth Bank & Forage",
    date: "September 2026",
    tasks: "Modified .NET backend, React/Redux frontend, unit testing, and GitHub PR workflows.",
    image: "/certificates/commonwealth-swe.jpg",
    verify: "User Verification: 6aab8dd2c92b2fc145d2f52b",
  },
  {
    name: "Young Innovators Programme 6.0 – Certificate of Appreciation",
    issuer: "K-DISC & GTech",
    date: "March 2024",
    tasks: "Completed structured technical innovation programme addressing real-world problem statements.",
    image: "",
    verify: "Certificate ID: µ2024032145",
  },
  {
    name: "IoT with AWS – Certificate of Training",
    issuer: "NIT Calicut (IEEE Ragam Workshop)",
    date: "March 2023",
    tasks: "Hands-on workshop in IoT sensor telemetry and AWS cloud architecture.",
    image: "",
    verify: "Training Completion",
  },
];

export const experiences = [
  {
    role: "Junior Python Developer Intern",
    company: "Yuva Intern",
    duration: "Sep 2026 – Oct 2026",
    summary:
      "Completed an intensive 6-week Python Developer internship focusing on clean software architecture, automated testing, and production engineering practices. Core work spanned designing modular CLI tools, systematic debugging and profiling (cProfile), implementing automated testing pipelines (pytest), conducting vulnerability audits, and building end-to-end CI/CD workflows with GitHub Actions.",
    responsibilities: [
      "Designed and built a modular Python CLI application implementing object-oriented programming (OOP), robust input validation, and custom error handling.",
      "Conducted structured debugging and root-cause analysis using pdb, refactoring legacy code to improve execution reliability and maintainability.",
      "Developed automated unit and integration test suites using pytest/unittest, adopting Test-Driven Development (TDD) methodologies to validate edge cases.",
      "Optimized computational performance through profiling tools (cProfile, timeit), eliminating operational bottlenecks and cutting runtime latency.",
      "Conducted security audits and hardened codebases against vulnerabilities (input sanitization, data leakage, and secure error handling).",
      "Configured automated CI/CD pipelines using GitHub Actions to enforce automated linting, test execution, and quality checks on every commit.",
    ],
    skills: [
      "Python 3",
      "OOP & Data Structures",
      "Pytest & Unittest",
      "TDD",
      "cProfile & timeit",
      "Vulnerability Hardening",
      "GitHub Actions CI/CD",
      "Flake8 / Black",
    ],
  },
  {
    role: "Data Analyst Intern",
    company: "Yuva Intern",
    duration: "Sep 2026",
    summary:
      "Completed an 8-week Data Analyst internship centered on exploratory data analysis, data cleaning, and business intelligence reporting. Handled real-world datasets using Python, Pandas, and NumPy to clean raw records, identify statistical trends, and build high-impact visualizations with Seaborn and Power BI. Delivered structured analytical reports featuring executive summaries and data-backed recommendations to support strategic decision-making.",
    responsibilities: [
      "Conducted end-to-end Exploratory Data Analysis (EDA) on complex datasets using Python, Pandas, and NumPy to extract statistical distributions, correlation metrics, and key operational trends.",
      "Executed data cleaning and preprocessing pipelines, systematically handling missing values, duplicates, schema mismatches, and outliers to ensure data integrity.",
      "Designed dynamic data visualizations and dashboards utilizing Matplotlib, Seaborn, and Power BI to translate complex data structures into intuitive visual narratives.",
      "Synthesized technical findings into structured analytics reports and executive summaries, delivering actionable, data-driven recommendations for stakeholders.",
      "Managed workflow reproducibility and analysis documentation using Jupyter Notebooks, adhering to core data science methodologies and industry best practices.",
    ],
    skills: [
      "Python",
      "Pandas",
      "NumPy",
      "Power BI",
      "Matplotlib",
      "Seaborn",
      "EDA & Preprocessing",
      "Jupyter Notebooks",
      "Data Integrity",
    ],
  },
  {
    role: "Young Innovators Programme 6.0 – Intern",
    company: "K-DISC & GTech, Government of Kerala",
    duration: "January 2024 — March 2024",
    summary:
      "Structured two-month innovation fellowship addressing real-world technical problems through collaborative software prototypes and applied engineering.",
    responsibilities: [
      "Completed a structured two-month internship under the GTech initiative focused on innovation and emerging technology development.",
      "Collaborated on hands-on projects addressing real-world challenges, demonstrating initiative and technical problem-solving.",
      "Awarded an official Certificate of Appreciation (ID: µ2024032145) in recognition of dedication and contribution to the programme.",
    ],
    skills: ["Emerging Technologies", "System Prototyping", "Problem Solving", "IoT & Cloud"],
  },
];

export const projects = [
  {
    title: "API Gateway & Rate Limiting Platform",
    category: "Backend / Cloud",
    description:
      "Built a production-shaped API gateway with JWT authentication (RBAC, refresh-token rotation), request routing/validation, and centralized error handling. Implemented an atomic Redis Lua token bucket rate limiter, a 7-table normalized PostgreSQL schema with Alembic, an admin analytics dashboard, and 85 pytest automated tests containerized with Docker Compose.",
    image: "/projects/api-gateway.svg",
    technologies: [
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "Lua Scripting",
      "Docker Compose",
      "React",
      "TypeScript",
      "Pytest",
      "Alembic",
    ],
    github: "https://github.com/Ayyappanmj/fastapi-api-gateway.git",
    demo: "https://fastapi-gateway-frontend.onrender.com",
  },
  {
    title: "IPL Auction Strategy & Predictive Optimization System",
    category: "Data Science / ML",
    description:
      "End-to-end IPL sports analytics platform using historical Cricsheet data to engineer player features, cluster roles with K-Means, and predict future performance with ML. Features Supabase PostgreSQL storage with 500 MB budget safeguards, transparent player valuation, and an interactive Streamlit squad optimization simulator.",
    image: "/projects/ipl-auction.svg",
    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "PostgreSQL (Supabase)",
      "SQLAlchemy",
      "Streamlit",
      "Plotly",
      "SciPy",
    ],
    github: "https://github.com/Ayyappanmj/ipl-auction-strategy-optimizer.git",
    demo: "https://ipl-auction-strategy-optimizer.onrender.com",
  },
  {
    title: "Enterprise Supply Chain & Margin Optimization",
    category: "Data Engineering",
    description:
      "Data engineering and analytics pipeline processing 500K+ transactional records from web, inventory, and shipping datasets. Designed a MySQL data warehouse using CTEs and window functions to analyze shipping delays and customer lifetime value (CLV), accompanied by an executive Power BI dashboard with DAX measures.",
    image: "/projects/supply-chain.svg",
    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "MySQL DWH",
      "Advanced SQL",
      "Power BI",
      "DAX",
      "AWS / GCP",
    ],
    github: "https://github.com/Ayyappanmj/Enterprise-Ecommerce-SupplyChain-Optimization.git",
    demo: "https://github.com/Ayyappanmj/Enterprise-Ecommerce-SupplyChain-Optimization.git",
  },
  {
    title: "Production-Grade RAG Document Assistant",
    category: "AI Agents",
    description:
      "Enterprise document Q&A assistant using FastAPI, LangChain, Sentence Transformers, and Ollama. Implements hybrid retrieval combining FAISS semantic vector search and BM25 keyword search with metadata-aware chunking, page-level citation tracking, context-only hallucination guardrails, and an interactive Next.js dashboard.",
    image: "/projects/rag-document-assistant.svg",
    technologies: [
      "Python",
      "FastAPI",
      "Next.js",
      "FAISS",
      "BM25",
      "LangChain",
      "Sentence Transformers",
      "Ollama",
      "Docker",
    ],
    github: "https://github.com/Ayyappanmj/rag-document-assistant.git",
    demo: "https://rag-document-assistant-frontend-7ksx.onrender.com",
  },
  {
    title: "Autonomous Market Intelligence Agent",
    category: "AI Agents",
    description:
      "Multi-agent AI workflow that autonomously collects market news and orchestrates specialized LLM agents for news extraction, summarization, trend analysis, and structured daily market briefings. Built with modular LangChain/CrewAI agents and configurable automation workflows.",
    image: "/projects/autonomous-agent.svg",
    technologies: [
      "Python",
      "LangChain",
      "CrewAI",
      "LLMs",
      "NLP",
      "Automation",
      "APIs",
    ],
    github: "https://github.com/Ayyappanmj/autonomous-market-intelligence-agent.git",
    demo: "https://market-intelligence-agent-lf5u.onrender.com",
  },
  {
    title: "Bug Report & Log Analyzer Agent",
    category: "AI Agents",
    description:
      "AI incident analysis agent parsing large application logs to extract recurring errors and conduct evidence-based root-cause analysis using local Ollama inference. Features source-code retrieval mapping stack traces to verified files and generates Jira-compatible bug reports via structured Pydantic schemas.",
    image: "/projects/bug-report-analyzer.svg",
    technologies: [
      "Python",
      "Streamlit",
      "Ollama",
      "Pydantic",
      "SQLite",
      "Pytest",
      "Docker",
    ],
    github: "https://github.com/Ayyappanmj/bug-report-log-analyzer.git",
    demo: "https://bug-report-log-analyzer.onrender.com",
  },
  {
    title: "Self-Healing Web Automation Agent",
    category: "AI Agents",
    description:
      "Autonomous browser automation system that detects broken UI locators, inspects live DOM trees, scores candidate replacement selectors using element attributes, accessibility tags, and Ollama reasoning, and automatically heals failed Playwright test actions on the fly.",
    image: "/projects/self-healing-agent.svg",
    technologies: [
      "Python",
      "Playwright",
      "Streamlit",
      "Ollama",
      "Pytest",
      "SQLite",
    ],
    github: "https://github.com/Ayyappanmj/self-healing-automation-agent.git",
    demo: "https://self-healing-automation-agent.onrender.com",
  },
  {
    title: "Real-Time Fraud Detection API",
    category: "Data Science / ML",
    description:
      "Anomaly detection machine learning model identifying fraudulent financial transactions in real time. Deployed with a high-performance FastAPI REST API for sub-10ms transaction scoring with structured Pydantic validation, containerized with Docker, and monitored via an interactive Streamlit dashboard.",
    image: "/projects/fraud-detection.svg",
    technologies: [
      "Python",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "FastAPI",
      "Docker",
      "Streamlit",
    ],
    github: "https://github.com/Ayyappanmj/fraud-detection-api.git",
    demo: "https://fraud-detection-api-dashboard.onrender.com",
  },
  {
    title: "Predictive Maintenance MLOps System",
    category: "Data Science / ML",
    description:
      "Machine learning pipeline analyzing industrial sensor time-series data to predict potential equipment failures before downtime occurs. Implements feature engineering, data-drift monitoring, and automated model retraining using GitHub Actions CI/CD to maintain continuous reliability.",
    image: "/projects/predictive-maintenance.svg",
    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Time-Series Analysis",
      "GitHub Actions",
      "MLOps",
    ],
    github: "https://github.com/Ayyappanmj/predictive-maintenance-mlops.git",
    demo: "https://predictive-maintenance-dashboard-tsjb.onrender.com",
  },
  {
    title: "Full-Stack Real-Time Chat Application",
    category: "Full Stack",
    description:
      "Full-stack real-time messaging application with instant bi-directional Socket.IO communication, JWT authentication, and live online user presence. Built with the MERN stack, Zustand global state management, responsive Tailwind CSS & DaisyUI, and free cloud deployment.",
    image: "/projects/realtimechat.png",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.IO",
      "Zustand",
      "Tailwind CSS",
      "JWT",
    ],
    github: "https://github.com/Ayyappanmj/fullstack-realchat-app",
    demo: "https://fullstack-realchat-app.onrender.com",
  },
  {
    title: "AI Resume Analyzer & ATS Scorer",
    category: "AI Agents",
    description:
      "AI-powered resume analyzer that parses PDF/DOCX resumes and extracts skills, education, and work experience using NLP. Implements ATS-style scoring and job description matching using TF-IDF cosine similarity and LLM evaluation to pinpoint missing keywords and skill gaps.",
    image: "/projects/ai-resume-analyzer.svg",
    technologies: [
      "Python",
      "FastAPI",
      "Streamlit",
      "spaCy",
      "Scikit-learn",
      "Ollama",
      "TF-IDF",
    ],
    github: "https://github.com/Ayyappanmj/ai-resume-analyzer.git",
    demo: "https://ai-resume-analyzer-gxbr.onrender.com",
  },
  {
    title: "E-Commerce Customer Churn & Retention Analytics",
    category: "Data Engineering",
    description:
      "End-to-end customer churn analytics pipeline across 5,000 subscription customers. Authored 41 advanced SQL queries (CTEs, window functions, cohort retention, CLV), designed a 3-page interactive Power BI dashboard with DAX measures, and validated logic with 33 automated pytest test suites.",
    image: "/projects/ecommerce-churn.svg",
    technologies: [
      "Python",
      "SQL (SQLite)",
      "Pandas",
      "Power BI",
      "DAX",
      "Pytest",
      "Cohort Analysis",
    ],
    github: "https://github.com/Ayyappanmj/ecommerce-churn-retention-analytics.git",
    demo: "https://github.com/Ayyappanmj/ecommerce-churn-retention-analytics.git",
  },
  {
    title: "Sleep Detection Alarm System",
    category: "Computer Vision",
    description:
      "A real-time AI-powered drowsiness detection system that monitors eye movements using a webcam. Built with OpenCV and MediaPipe to calculate Eye Aspect Ratio (EAR) and trigger an alarm when prolonged eye closure is detected, helping prevent fatigue-related accidents.",
    image: "/projects/sleepdetect.png",
    technologies: ["Python", "OpenCV", "MediaPipe", "NumPy", "Pygame"],
    github: "https://github.com/Ayyappanmj",
    demo: "#",
  },
  {
    title: "DoomScrolling Stop",
    category: "Computer Vision",
    description:
      "An AI-powered desktop application that monitors prolonged screen usage using MediaPipe and OpenCV. The system detects user presence through a webcam and provides timely break reminders to reduce excessive doomscrolling.",
    image: "/projects/doomscrolling.png",
    technologies: ["Python", "OpenCV", "MediaPipe", "NumPy"],
    github: "https://github.com/Ayyappanmj",
    demo: "#",
  },
  {
    title: "Smart Attendance System",
    category: "Computer Vision",
    description:
      "An AI-powered facial recognition attendance system that automatically detects and recognizes registered users through a webcam using OpenCV and the LBPH Face Recognizer, logging attendance records with timestamps.",
    image: "/projects/smartattendece.png",
    technologies: ["Python", "OpenCV", "OpenCV Contrib", "Tkinter", "NumPy", "Pillow"],
    github: "https://github.com/Ayyappanmj",
    demo: "#",
  },
];

export const services = [
  {
    title: "Backend & API Architecture",
    description:
      "High-throughput FastAPI, Node.js, and Next.js services featuring JWT/RBAC, Redis Lua rate limiters, and normalized PostgreSQL/MySQL schemas.",
  },
  {
    title: "AI Agents & RAG Systems",
    description:
      "Autonomous multi-agent workflows, LangChain systems, hybrid FAISS/BM25 retrieval, and private local inference with Ollama.",
  },
  {
    title: "Data Engineering & Analytics",
    description:
      "End-to-end ETL pipelines, MySQL/PostgreSQL data warehousing, advanced SQL (CTEs, window functions), and executive Power BI dashboards with DAX.",
  },
  {
    title: "MLOps & Automated Testing",
    description:
      "Comprehensive test suites (pytest/unittest, TDD), performance profiling (cProfile, timeit), Docker containerization, and GitHub Actions CI/CD.",
  },
];

export const skillGroups = [
  {
    category: "Languages & Core",
    icon: FaCode,
    skills: [
      { name: "Python (OOP, Profiling)", level: 95 },
      { name: "Advanced SQL (CTEs, Window Functions)", level: 90 },
      { name: "TypeScript / JavaScript", level: 86 },
      { name: "HTML5 / CSS3 / Tailwind", level: 90 },
    ],
  },
  {
    category: "AI, Agents & RAG",
    icon: FaBrain,
    skills: [
      { name: "LangChain & CrewAI", level: 90 },
      { name: "FAISS & BM25 Hybrid Retrieval", level: 88 },
      { name: "Local LLMs (Ollama) & Prompt Eng.", level: 92 },
      { name: "spaCy / NLP & Scikit-learn", level: 85 },
    ],
  },
  {
    category: "Data Engineering & BI",
    icon: FaChartLine,
    skills: [
      { name: "Pandas & NumPy", level: 92 },
      { name: "Power BI (DAX, Modeling)", level: 88 },
      { name: "MySQL & PostgreSQL DWH", level: 90 },
      { name: "Supabase & SQLite ETL", level: 88 },
    ],
  },
  {
    category: "Backend & Systems",
    icon: FaServer,
    skills: [
      { name: "FastAPI & REST APIs", level: 92 },
      { name: "Redis & Lua Rate Limiting", level: 88 },
      { name: "Next.js & React.js", level: 88 },
      { name: "Socket.IO & Node.js", level: 84 },
    ],
  },
  {
    category: "Testing, DevOps & MLOps",
    icon: FaVial,
    skills: [
      { name: "Pytest & TDD Architecture", level: 92 },
      { name: "GitHub Actions CI/CD", level: 88 },
      { name: "Docker & Docker Compose", level: 85 },
      { name: "Playwright & Profiling (cProfile)", level: 86 },
    ],
  },
];

export const heroHighlights = [
  "Production API Gateways & Token-Bucket Rate Limiting",
  "Autonomous AI Agents & Hybrid RAG Retrieval",
  "Enterprise Data Pipelines, Advanced SQL & Power BI",
];

export const testimonials = [
  {
    name: "Technical Mentor",
    role: "Yuva Intern Mentorship",
    image: "/avatar1.png",
    rating: 5,
    text: "Ayyappan demonstrated exceptional software engineering discipline, mastering modular architecture, systematic cProfile optimization, and rigorous pytest test suites.",
  },
  {
    name: "Programme Coordinator",
    role: "K-DISC & GTech Initiative",
    image: "/avatar1.png",
    rating: 5,
    text: "Demonstrated exemplary problem-solving and rapid prototyping abilities during the Young Innovators Programme, showing strong technical dedication.",
  },
];
