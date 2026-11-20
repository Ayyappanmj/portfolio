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
  title: "Software Engineer | Distributed Systems & AI Developer",
  location: "India",
  intro:
    "Software Engineer specializing in architecting resilient distributed systems, transactional saga orchestrators, autonomous AI agents (MCP & Amazon Bedrock), and high-throughput data lakehouses. Experienced in Test-Driven Development (pytest), runtime profiling (cProfile), and cloud-native GitOps automation.",
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
  "Distributed Systems Engineer",
  "AI & Autonomous Agent Developer",
  "Data Lakehouse & BI Engineer",
  "Full-Stack & Mobile Developer",
  "DevOps & IT Infrastructure Engineer",
];

export const techIcons = [FaPython, FaServer, FaBrain, FaDatabase, FaDocker];

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certifications" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const aboutTimeline = [
  {
    year: "2022 - 2026",
    title: "Bachelor of Technology in Information Technology",
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
  { value: 25, label: "Engineered Projects", icon: FaStar, suffix: "+" },
  { value: 45, label: "Core Skills Mastered", icon: FaBrain, suffix: "+" },
  { value: 3, label: "Internships Completed", icon: FaToolbox, suffix: "" },
  { value: 19, label: "Verified Credentials", icon: FaCertificate, suffix: "+" },
];

export const certifications = [
  {
    name: "Quality Assurance Developer Certification",
    issuer: "freeCodeCamp",
    date: "November 18, 2026",
    tasks: "Issued November 18, 2026 · ~300 hours of coursework & automated testing projects (Chai, Mocha, Advanced Node.js, Helmet.js security headers, headless browser testing).",
    image: "/certificates/freecodecamp-qa.jpg",
    verify: "https://freecodecamp.org/certification/fcc3de4c1d3-3c18-492e-85a4-032da9f242d0/quality-assurance-v7",
  },
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
    tasks: "Multi-agent orchestration, state persistence, tool calling, and human-in-the-loop workflows.",
    image: "/certificates/ms-agentic-ai-part2.jpg",
    verify: "Signed by Satya Nadella • Microsoft",
  },
  {
    name: "Get Started with Microsoft Fabric Analytics",
    issuer: "Microsoft",
    date: "October 2026",
    tasks: "End-to-end lakehouse architectures, OneLake integration, Delta tables, and unified enterprise analytics.",
    image: "/certificates/ms-fabric-analytics.jpg",
    verify: "Signed by Satya Nadella • Microsoft",
  },
  {
    name: "Get Started with Microsoft Power BI",
    issuer: "Microsoft",
    date: "October 2026",
    tasks: "Data ingestion, star-schema data modeling, interactive dashboard design, and enterprise report publication.",
    image: "/certificates/ms-power-bi.jpg",
    verify: "Signed by Satya Nadella • Microsoft",
  },
  {
    name: "Microsoft Cloud Infrastructure",
    issuer: "Microsoft",
    date: "October 2026",
    tasks: "Azure compute, storage architectures, networking security, and cloud scalability principles.",
    image: "/certificates/ms-cloud-infrastructure.jpg",
    verify: "Signed by Satya Nadella • Microsoft",
  },
  {
    name: "Write DAX Formulas for Microsoft Power BI Desktop Semantic Models",
    issuer: "Microsoft",
    date: "October 2026",
    tasks: "Advanced DAX calculations, filter context manipulation, CALCULATE expressions, time-intelligence functions, and semantic model performance tuning.",
    image: "/certificates/ms-write-dax.jpg",
    verify: "Signed by Satya Nadella • Microsoft",
  },
  {
    name: "Prompt Engineer",
    issuer: "Cisco Networking Academy",
    date: "October 2026",
    tasks: "Systematic prompt design, few-shot conditioning, chain-of-thought elicitation, and LLM output steering.",
    image: "/certificates/cisco-prompt-engineer.jpg",
    verify: "Credly Badge: 5a4141d8-f80e-47cf-a335-5154ee4a047c",
  },
  {
    name: "Python Essentials 1",
    issuer: "Cisco Networking Academy",
    date: "October 2026",
    tasks: "Foundations of Python programming, control flows, data structures, and procedural problem-solving.",
    image: "/certificates/cisco-python-essentials.jpg",
    verify: "Credly Badge: 28da4117-6468-4663-8a3a-a537f8cf2834",
  },
  {
    name: "Data Analytics Essentials",
    issuer: "Cisco Networking Academy",
    date: "October 2026",
    tasks: "Data collection pipelines, statistical exploration, variance analysis, and reporting methodologies.",
    image: "/certificates/cisco-data-analytics.jpg",
    verify: "Credly Badge: d007f3dc-ea8c-4bc7-b891-bdfcbeba2637",
  },
  {
    name: "Data Science with Python",
    issuer: "Cisco Networking Academy",
    date: "October 2026",
    tasks: "Exploratory data analysis, numerical computing with NumPy, tabular manipulation with Pandas, and data visualization.",
    image: "/certificates/cisco-data-science-python.jpg",
    verify: "Credly Badge: fb64ea87-251f-4cb1-80a5-f377501a24d5",
  },
  {
    name: "Claude with Anthropic API: Bedrock, Vertex AI",
    issuer: "Claude Academy (Anthropic)",
    date: "October 2026",
    tasks: "Production integration of Claude via AWS Bedrock and GCP Vertex AI, streaming, tool use, and evaluation.",
    image: "/certificates/claude-academy.svg",
    verify: "https://academy.anthropic.com/certificates/60340d21-f925-4c60-a29d-472ef89c372b",
  },
  {
    name: "Scientific Computing with Python",
    issuer: "freeCodeCamp",
    date: "September 2026",
    tasks: "Algorithms, mathematical modeling, numerical computation, and object-oriented design in Python.",
    image: "/certificates/freecodecamp-python.jpg",
    verify: "https://freecodecamp.org/certification/fcc3de4c1d3-3c18-492e-85a4-032da9f242d0/scientific-computing-with-python-v7",
  },
  {
    name: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    date: "October 2026",
    tasks: "ES6+, functional programming, recursion, Big-O analysis, and classic algorithmic problem-solving.",
    image: "/certificates/freecodecamp-js.jpg",
    verify: "https://freecodecamp.org/certification/fcc3de4c1d3-3c18-492e-85a4-032da9f242d0/javascript-algorithms-and-data-structures-v8",
  },
  {
    name: "GenAI Job Simulation",
    issuer: "BCG & Forage",
    date: "October 2026",
    tasks: "Developed an AI chatbot with financial NLP rules, financial metric calculation, and executive reporting.",
    image: "/certificates/bcg-genai.jpg",
    verify: "User Verification: xfL2jM4yY64n5H7i8",
  },
  {
    name: "Front-End Software Engineering Job Simulation",
    issuer: "Skyscanner & Forage",
    date: "September 2026",
    tasks: "Built flight price alert components in React, integrated REST APIs, and authored comprehensive unit tests.",
    image: "/certificates/skyscanner-frontend.jpg",
    verify: "User Verification: a4q6fA2zX87p9K1m0",
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
    image: "/certificates/yip-internship.jpg",
    verify: "Certificate ID: µ2024032145",
  },
  {
    name: "IoT with AWS – Certificate of Training",
    issuer: "NIT Calicut (Ragam 2023)",
    date: "March 2023",
    tasks: "Hands-on training workshop on IoT architectures and AWS cloud integration conducted by NIT Calicut.",
    image: "/certificates/aws-iot-training.jpg",
    verify: "NIT Calicut Ragam Workshop",
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
    certificate: "/certificates/yip-internship.jpg",
  },
];

export const projects = [
  // ==========================================
  // PRIORITY: AI & DISTRIBUTED SYSTEMS FIRST
  // ==========================================
  {
    title: "NutriVoice AI – Autonomous Ambient Voice Nutrition Assistant",
    category: "AI & Agents",
    description:
      "Built an ambient, zero-click voice nutrition tracking system using Amazon Bedrock Converse API (Claude 3 Haiku ~380ms routing + Claude 3.5 Sonnet reasoning) and Model Context Protocol (MCP). Decoupled LLM reasoning from database mutations via typed Pydantic contracts, multi-turn slot filling, health guardrails, and a real-time telemetry dashboard showing live waveforms and JSON-RPC payloads.",
    image: "/projects/nutrivoice-ai.svg",
    technologies: [
      "Python",
      "FastAPI",
      "Amazon Bedrock",
      "MCP",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Web Speech API",
      "DynamoDB / SQLite"
    ],
    github: "https://github.com/Ayyappanmj/nutrivoice-ai.git",
  },
  {
    title: "SagaFlow – Distributed Transaction & Saga Orchestration Platform",
    category: "Distributed Systems",
    description:
      "Designed a distributed transaction orchestration platform coordinating multi-step e-commerce workflows across inventory, payment, and shipping services. Implemented a persisted saga state machine with optimistic locking, transactional outbox messaging over RabbitMQ, idempotent reverse-order compensating transactions, crash recovery sweepers, deterministic fault injection, and 46 automated tests.",
    image: "/projects/sagaflow.svg",
    technologies: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "RabbitMQ",
      "React",
      "TypeScript",
      "Docker",
      "Prometheus",
      "Grafana",
      "Pytest",
      "GitHub Actions"
    ],
    github: "https://github.com/Ayyappanmj/SagaFlow.git",
  },
  {
    title: "CodeForge – Distributed Code Execution & Sandbox Platform",
    category: "Distributed Systems",
    description:
      "Built an asynchronous remote code execution platform running untrusted Python and Node.js code inside hardened, network-isolated Docker containers via RabbitMQ workers. Engineered transactional outbox delivery, compare-and-set state transitions, read-only filesystems with dropped Linux capabilities and strict CPU/memory/timeout limits, a React execution dashboard, and 96 automated tests.",
    image: "/projects/codeforge.svg",
    technologies: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "RabbitMQ",
      "Docker",
      "React",
      "TypeScript",
      "Alembic",
      "Pytest",
      "GitHub Actions"
    ],
    github: "https://github.com/Ayyappanmj/codeforge.git",
  },
  {
    title: "API Gateway & Rate Limiting Platform",
    category: "Distributed Systems",
    description:
      "Built a production-shaped API gateway with JWT authentication (RBAC, refresh-token rotation), request routing/validation, and centralized error handling. Implemented an atomic Redis Lua token bucket rate limiter, a 7-table normalized PostgreSQL schema with Alembic, an admin analytics dashboard, and 85 pytest automated tests containerized with Docker Compose.",
    image: "/projects/api-gateway.svg",
    technologies: [
      "FastAPI",
      "Python",
      "Redis",
      "Lua",
      "PostgreSQL",
      "Alembic",
      "Docker Compose",
      "JWT",
      "Pytest"
    ],
    github: "https://github.com/Ayyappanmj/api-gateway-rate-limiter.git",
  },
  {
    title: "Production-Grade RAG Document Assistant",
    category: "AI & Agents",
    description:
      "Enterprise document Q&A assistant using FastAPI, LangChain, Sentence Transformers, and Ollama. Implements hybrid retrieval combining FAISS semantic vector search and BM25 keyword search with metadata-aware chunking, page-level citation tracking, context-only hallucination guardrails, and an interactive Next.js dashboard.",
    image: "/projects/rag-document-assistant.svg",
    technologies: [
      "FastAPI",
      "LangChain",
      "FAISS",
      "BM25",
      "Ollama",
      "Next.js",
      "TypeScript",
      "Sentence Transformers"
    ],
    github: "https://github.com/Ayyappanmj/production-rag-document-assistant.git",
  },
  {
    title: "Autonomous Market Intelligence Agent",
    category: "AI & Agents",
    description:
      "Multi-agent AI workflow that autonomously collects market news and orchestrates specialized LLM agents for news extraction, summarization, trend analysis, and structured daily market briefings. Built with modular LangChain/CrewAI agents and configurable automation workflows.",
    image: "/projects/autonomous-agent.svg",
    technologies: [
      "Python",
      "LangChain",
      "CrewAI",
      "FastAPI",
      "BeautifulSoup",
      "Pydantic",
      "Ollama"
    ],
    github: "https://github.com/Ayyappanmj/autonomous-market-intelligence-agent.git",
  },
  {
    title: "Bug Report & Log Analyzer Agent",
    category: "AI & Agents",
    description:
      "AI incident analysis agent parsing large application logs to extract stack traces, group recurring error signatures, assess severity, and draft root-cause hypotheses with suggested code fixes using local LLMs. Includes automated synthetic log generation and benchmarking.",
    image: "/projects/bug-report-analyzer.svg",
    technologies: [
      "Python",
      "Regex",
      "LangChain",
      "Ollama",
      "FastAPI",
      "Pytest",
      "Docker"
    ],
    github: "https://github.com/Ayyappanmj/bug-report-log-analyzer-agent.git",
  },
  {
    title: "Automated Code Review & Security Auditor",
    category: "AI & Agents",
    description:
      "Static analysis and LLM-assisted code review tool that analyzes Git diffs and pull requests for security vulnerabilities (OWASP Top 10, SQL injection, credential leaks), code smells, and style violations. Generates inline GitHub PR review comments with suggested remediations.",
    image: "/projects/self-healing-agent.svg",
    technologies: [
      "Python",
      "AST",
      "Bandit",
      "Flake8",
      "LangChain",
      "GitHub API",
      "Pytest"
    ],
    github: "https://github.com/Ayyappanmj/automated-code-review-security-auditor.git",
  },
  {
    title: "AI Resume Analyzer & ATS Scorer",
    category: "AI & Agents",
    description:
      "AI-powered resume analyzer that parses PDF/DOCX resumes and extracts skills, education, and work experience using NLP. Implements ATS-style scoring and job description matching using TF-IDF cosine similarity and LLM evaluation to pinpoint missing keywords and skill gaps.",
    image: "/projects/ai-resume-analyzer.svg",
    technologies: [
      "Python",
      "spaCy",
      "Scikit-learn",
      "FastAPI",
      "PyPDF2",
      "Streamlit",
      "TF-IDF"
    ],
    github: "https://github.com/Ayyappanmj/ai-resume-analyzer-ats-scorer.git",
  },
  {
    title: "Sleep Detection Alarm System",
    category: "AI & Agents",
    description:
      "A real-time AI-powered drowsiness detection system that monitors eye movements using a webcam. Built with OpenCV and MediaPipe to calculate Eye Aspect Ratio (EAR) and trigger an alarm when prolonged eye closure is detected, helping prevent fatigue-related accidents.",
    image: "/projects/sleepdetect.png",
    technologies: ["Python", "OpenCV", "MediaPipe", "NumPy", "Pygame"],
    github: "https://github.com/Ayyappanmj/Sleep-detection-alarm.git",
  },
  {
    title: "DoomScrolling Stop",
    category: "AI & Agents",
    description:
      "An AI-powered desktop application that monitors prolonged screen usage using MediaPipe and OpenCV. The system detects user presence through a webcam and provides timely break reminders to reduce excessive doomscrolling.",
    image: "/projects/doomscrolling.png",
    technologies: ["Python", "OpenCV", "MediaPipe", "NumPy"],
    github: "https://github.com/Ayyappanmj/doomscrolling-.git",
  },
  {
    title: "Smart Attendance System",
    category: "AI & Agents",
    description:
      "An AI-powered facial recognition attendance system that automatically detects and recognizes registered users through a webcam using OpenCV and the LBPH Face Recognizer, logging attendance records with timestamps.",
    image: "/projects/smartattendece.png",
    technologies: ["Python", "OpenCV", "OpenCV Contrib", "Tkinter", "NumPy", "Pillow"],
    github: "https://github.com/Ayyappanmj/Smart-Attendance-System.git",
  },

  // ==========================================
  // DATA ENGINEERING & WAREHOUSING
  // ==========================================
  {
    title: "DataTrust – Local Data Lakehouse & Data Quality Platform",
    category: "Data Engineering",
    description:
      "Engineered a Bronze-Silver-Gold local data lakehouse processing NYC TLC trip datasets in Parquet using PySpark, DuckDB, and dbt Core. Features SHA-256 incremental ingestion, Pandera schema validation gates with record quarantine, crash-safe journalled partition swaps, an 11-task Apache Airflow DAG, and a Streamlit data-lineage and quality dashboard.",
    image: "/projects/datatrust.svg",
    technologies: [
      "Python",
      "PySpark",
      "Parquet",
      "DuckDB",
      "dbt Core",
      "Apache Airflow",
      "PostgreSQL",
      "Pandera",
      "Streamlit",
      "Docker",
      "Pytest"
    ],
    github: "https://github.com/Ayyappanmj/DataTrust.git",
  },
  {
    title: "StreamCommerce – End-to-End E-Commerce Data Engineering Platform",
    category: "Data Engineering",
    description:
      "Built a local-first batch and real-time e-commerce data platform processing customer, order, payment, and refund streams via Kafka/Redpanda and PySpark. Implemented idempotent event deduplication, invalid-record quarantine, a DuckDB star-schema warehouse with dbt CLV/cohort models, Apache Airflow orchestration, and a multi-page Streamlit analytics dashboard.",
    image: "/projects/streamcommerce.svg",
    technologies: [
      "Python",
      "PySpark",
      "Kafka / Redpanda",
      "DuckDB",
      "dbt",
      "Apache Airflow",
      "PostgreSQL",
      "Streamlit",
      "Docker",
      "Pytest"
    ],
    github: "https://github.com/Ayyappanmj/streamcommerce.git",
  },
  {
    title: "Enterprise Supply Chain & Margin Optimization",
    category: "Data Engineering",
    description:
      "Data engineering and analytics pipeline processing 500K+ transactional records from web, inventory, and shipping datasets. Designed a MySQL data warehouse using CTEs and window functions to analyze shipping delays and customer lifetime value (CLV), accompanied by an executive Power BI dashboard with DAX measures.",
    image: "/projects/supply-chain.svg",
    technologies: [
      "MySQL",
      "Power BI",
      "DAX",
      "SQL",
      "ETL Pipelines",
      "Data Warehousing"
    ],
    github: "https://github.com/Ayyappanmj/supply-chain-margin-optimization.git",
  },
  {
    title: "IPL Auction Strategy & Predictive Optimization System",
    category: "Data Engineering",
    description:
      "End-to-end IPL sports analytics platform using historical Cricsheet data to engineer player features, cluster roles with K-Means, and predict future performance with ML. Features Supabase PostgreSQL storage with 500 MB budget safeguards, transparent player valuation, and an interactive Streamlit squad optimization simulator.",
    image: "/projects/ipl-auction.svg",
    technologies: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "Streamlit",
      "Supabase",
      "PostgreSQL",
      "Cricsheet API"
    ],
    github: "https://github.com/Ayyappanmj/ipl-auction-predictive-optimization.git",
  },
  {
    title: "E-Commerce Customer Churn & Retention Analytics",
    category: "Data Engineering",
    description:
      "End-to-end customer churn analytics pipeline across 5,000 subscription customers. Authored 41 advanced SQL queries (CTEs, window functions, cohort retention, CLV), designed a 3-page interactive Power BI dashboard with DAX measures, and validated logic with 33 automated pytest test suites.",
    image: "/projects/ecommerce-churn.svg",
    technologies: [
      "SQL",
      "PostgreSQL",
      "Power BI",
      "Python",
      "Pytest",
      "DAX",
      "Cohort Analysis"
    ],
    github: "https://github.com/Ayyappanmj/ecommerce-churn-retention-analytics.git",
  },

  // ==========================================
  // FULL-STACK & MOBILE
  // ==========================================
  {
    title: "FieldOps – Offline-First Field Inspection & Incident Response Platform",
    category: "Full-Stack & Mobile",
    description:
      "Built an offline-first field operations system featuring a Flutter/Drift mobile app, FastAPI/PostGIS backend, and Next.js WebSocket live operations dashboard. Implements UUID-idempotent offline sync with optimistic concurrency control, Leaflet geospatial technician/asset tracking, Ollama-assisted incident triage, and JWT refresh-token reuse detection.",
    image: "/projects/fieldops.svg",
    technologies: [
      "Flutter",
      "Dart",
      "Next.js",
      "TypeScript",
      "Python",
      "FastAPI",
      "PostgreSQL / PostGIS",
      "Redis",
      "Celery",
      "WebSockets",
      "Ollama"
    ],
    github: "https://github.com/Ayyappanmj/FieldOps",
  },
  {
    title: "Vaultly – Smart Receipt, Warranty & Subscription Vault",
    category: "Full-Stack & Mobile",
    description:
      "Developed an offline-first personal asset and receipt management platform combining a Flutter mobile app, Next.js analytics dashboard, and FastAPI/Celery backend. Integrates OpenCV and Tesseract OCR for automated receipt extraction, warranty expiration tracking, Largest Remainder household expense splitting, and idempotent background sync.",
    image: "/projects/vaultly.svg",
    technologies: [
      "Flutter",
      "Dart",
      "Next.js",
      "TypeScript",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "Celery",
      "OpenCV",
      "Tesseract",
      "Pytest"
    ],
    github: "https://github.com/Ayyappanmj/Vaultly",
  },
  {
    title: "Real-Time Chat Application",
    category: "Full-Stack & Mobile",
    description:
      "Full-stack real-time messaging application with instant bi-directional Socket.IO communication, JWT authentication, and live online user presence. Built with the MERN stack, Zustand global state management, responsive Tailwind CSS, and cloud deployment.",
    image: "/projects/realtimechat.png",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.IO",
      "Zustand",
      "Tailwind CSS"
    ],
    github: "https://github.com/Ayyappanmj/chat-app.git",
    demo: "https://chat-app-mern-prod.onrender.com",
  },

  // ==========================================
  // DEVOPS & IT SYSTEMS
  // ==========================================
  {
    title: "CloudPilot – Cloud-Native CI/CD & GitOps Deployment Platform",
    category: "DevOps & IT Systems",
    description:
      "Architected an end-to-end GitOps delivery platform automating builds from Git commits to monitored Kubernetes clusters. Configured GitHub Actions with Trivy security scanning, immutable GHCR image tagging, Argo CD continuous synchronization, Terraform namespace/security provisioning, Helm charts, Prometheus/Grafana alerting, and documented failure-recovery drills.",
    image: "/projects/cloudpilot.svg",
    technologies: [
      "GitHub Actions",
      "Docker",
      "Kubernetes",
      "Helm",
      "Terraform",
      "Argo CD",
      "Trivy",
      "Prometheus",
      "Grafana",
      "Bash"
    ],
    github: "https://github.com/Ayyappanmj/cloudpilot.git",
  },
  {
    title: "AutoOps – Linux Infrastructure Automation & Continuous Compliance Platform",
    category: "DevOps & IT Systems",
    description:
      "Developed an automated Linux configuration management and compliance auditing platform using Python and Ansible. Enforces SSH hardening, firewall baselines, and package policies with lockout safeguards, paired with a configuration drift detection engine, CIS-aligned severity auditing, SHA-256 config backups, and Pytest/GitHub Actions validation.",
    image: "/projects/autoops.svg",
    technologies: [
      "Python",
      "Ansible",
      "Linux",
      "Bash",
      "YAML",
      "Pytest",
      "GitHub Actions"
    ],
    github: "https://github.com/Ayyappanmj/autoops-linux-infrastructure-automation.git",
  },
  {
    title: "Enterprise Active Directory & Identity Lifecycle Lab",
    category: "DevOps & IT Systems",
    description:
      "Designed and deployed an enterprise Active Directory Domain Services (AD DS) lab on Windows Server 2022. Automated bulk Joiner-Mover-Leaver (JML) user lifecycles and quarantine offboarding with PowerShell, enforced AGDLP role-based NTFS/SMB access governance, linked security-hardening GPOs, built stale-account auditing scripts, and documented 10 incident runbooks (Event IDs 4740/4625, DNS, secure channels).",
    image: "/projects/enterprise-ad.svg",
    technologies: [
      "Windows Server 2022",
      "Active Directory (AD DS)",
      "PowerShell",
      "Group Policy (GPO)",
      "RBAC / AGDLP",
      "DNS / NTFS",
      "IAM Auditing"
    ],
    github: "https://github.com/Ayyappanmj/Enterprise-ActiveDirectory-Lab",
  },
  {
    title: "HelpDeskPro – Enterprise IT Support & Ticket Management Lab",
    category: "DevOps & IT Systems",
    description:
      "Configured an ITIL-aligned service desk environment on osTicket (Apache/MySQL) supporting 4 departments, tiered L1/L2 escalation workflows, and Critical-to-Low SLA policies. Authored 15 technical Knowledge Base SOPs, documented 20 enterprise incident scenarios (AD, DNS/DHCP, VPN, Windows/Linux diagnostics), and built a Python CLI analytics engine tracking SLA compliance and recurring problem patterns.",
    image: "/projects/helpdeskpro.svg",
    technologies: [
      "osTicket",
      "Python",
      "MySQL / MariaDB",
      "Apache",
      "ITIL / ITSM",
      "PowerShell / CMD",
      "Linux CLI",
      "Mermaid.js"
    ],
    github: "https://github.com/Ayyappanmj/helpdesk-analytics-osTicket.git",
  },
  {
    title: "Self-Healing DevOps CI/CD Agent",
    category: "DevOps & IT Systems",
    description:
      "Autonomous DevOps assistant monitoring CI/CD pipeline failures in GitHub Actions. Parses build error logs, queries repository codebase context, identifies root-cause errors (dependency conflicts, syntax errors, failing tests), and creates pull requests with automated fixes.",
    image: "/projects/self-healing-agent.svg",
    technologies: [
      "Python",
      "GitHub Actions API",
      "Docker",
      "FastAPI",
      "GitPython",
      "LangChain",
      "Ollama"
    ],
    github: "https://github.com/Ayyappanmj/self-healing-devops-cicd-agent.git",
  },
];

export const skillGroups = [
  {
    category: "AI, Agents & LLM Engineering",
    icon: FaBrain,
    description: "Multi-agent workflows, autonomous reasoning loops, hybrid retrieval & MCP integration.",
    skills: [
      "Model Context Protocol (MCP)",
      "Amazon Bedrock (Claude 3.5 Sonnet / Haiku)",
      "LangChain",
      "CrewAI",
      "FAISS & BM25 Hybrid Retrieval",
      "Ollama",
      "Prompt Engineering",
      "Guardrails & Pydantic Schemas",
      "Scikit-learn",
      "NLP"
    ],
  },
  {
    category: "Backend & Distributed Systems",
    icon: FaServer,
    description: "Transaction orchestration, outbox messaging, event streaming & low-latency caching.",
    skills: [
      "Python (OOP, cProfile)",
      "FastAPI",
      "RabbitMQ",
      "Kafka / Redpanda",
      "Redis & Lua Scripting",
      "WebSockets",
      "Node.js",
      "REST APIs",
      "Celery"
    ],
  },
  {
    category: "Data Engineering & Warehousing",
    icon: FaDatabase,
    description: "Lakehouse pipelines, schema enforcement gates, star-schema modeling & analytics.",
    skills: [
      "PySpark",
      "DuckDB",
      "dbt Core",
      "Apache Airflow",
      "PostgreSQL / PostGIS",
      "MySQL DWH",
      "Parquet",
      "Pandera",
      "Pandas & NumPy",
      "Power BI (DAX)",
      "Supabase & SQLite"
    ],
  },
  {
    category: "Frontend & Mobile",
    icon: FaCode,
    description: "Type-safe web applications, offline-first mobile clients & analytics dashboards.",
    skills: [
      "Next.js",
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Flutter",
      "Dart",
      "Riverpod",
      "Streamlit"
    ],
  },
  {
    category: "DevOps, Cloud & IT Infrastructure",
    icon: FaCloud,
    description: "GitOps delivery, container sandboxing, infrastructure as code & enterprise identity.",
    skills: [
      "Docker & Docker Compose",
      "Kubernetes (Kind)",
      "Helm",
      "Terraform",
      "Argo CD",
      "GitHub Actions CI/CD",
      "Prometheus & Grafana",
      "Ansible",
      "Windows Server / Active Directory (GPO, RBAC)",
      "PowerShell",
      "Linux Admin",
      "ITSM / osTicket",
      "Trivy",
      "Pytest & TDD",
      "Playwright"
    ],
  },
];

export const services = [
  {
    title: "Distributed Systems & API Architecture",
    description:
      "High-throughput FastAPI, Node.js, and Next.js backends featuring JWT/RBAC, transactional outbox over RabbitMQ/Kafka, and Redis Lua rate limiting.",
  },
  {
    title: "Autonomous AI Agents & RAG Systems",
    description:
      "Model Context Protocol (MCP) integrations, Amazon Bedrock & Claude reasoning loops, hybrid FAISS/BM25 retrieval, and local inference with Ollama.",
  },
  {
    title: "Data Engineering & Lakehouses",
    description:
      "End-to-end lakehouses with PySpark, DuckDB, dbt Core, Pandera schema validation gates, star-schema data warehouses, and Power BI DAX modeling.",
  },
  {
    title: "DevOps, GitOps & IT Infrastructure",
    description:
      "Automated CI/CD with GitHub Actions and Trivy, Argo CD Kubernetes synchronization, Ansible configuration hardening, and Active Directory identity management.",
  },
];

export const testimonials = [
  {
    name: "Engineering Lead",
    role: "Open Source Collaboration",
    image: "/avatar1.png",
    rating: 5,
    quote:
      "Exceptional architecture and disciplined engineering. Built reliable distributed workflows with comprehensive automated test coverage and clean documentation.",
  },
  {
    name: "Technical Mentor",
    role: "Yuva Intern Mentorship",
    image: "/avatar1.png",
    rating: 5,
    quote:
      "Strong foundation in Python engineering, performance profiling, and TDD. Delivered resilient CLI tools and CI/CD pipelines ahead of schedule.",
  },
  {
    name: "Programme Coordinator",
    role: "K-DISC & GTech Initiative",
    image: "/avatar1.png",
    rating: 5,
    quote:
      "Demonstrated remarkable problem-solving and innovation in the Young Innovators Programme, producing high-quality prototypes addressing complex requirements.",
  },
];
