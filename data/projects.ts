export type ProjectCategory =
  | "All"
  | "AI & ML"
  | "Backend & Distributed"
  | "Data Engineering"
  | "Full-Stack & Mobile"
  | "DevOps & Infra";

export interface Project {
  id: string;
  title: string;
  category: "AI & ML" | "Backend & Distributed" | "Data Engineering" | "Full-Stack & Mobile" | "DevOps & Infra";
  tagline: string;
  description?: string;
  bullets: string[];
  technologies: string[];
  githubUrl?: string; // Omits trailing .git; only set if verified HTTP 200
  demoUrl?: string; // Strictly for verified DEMO LIST projects
  image: string;
  featured?: boolean;
  additionalWork?: boolean;
  hackathonBadge?: string;
}

export const projectCategories: ProjectCategory[] = [
  "All",
  "AI & ML",
  "Backend & Distributed",
  "Data Engineering",
  "Full-Stack & Mobile",
  "DevOps & Infra",
];

export const projects: Project[] = [
  // ==========================================
  // 8 FEATURED PROJECTS
  // ==========================================
  {
    id: "nutrivoice-ai",
    title: "NutriVoice AI",
    category: "AI & ML",
    tagline: "Ambient zero-click voice nutrition tracking system using Model Context Protocol and LLM reasoning.",
    description:
      "Engineered an ambient voice nutrition tracker using Amazon Bedrock Converse API (Claude 3 Haiku for ~380ms routing + Claude 3.5 Sonnet for clinical reasoning) and Model Context Protocol (MCP). Decoupled LLM reasoning from database mutations via typed Pydantic contracts, multi-turn slot filling, and health guardrails.",
    bullets: [
      "Sub-400ms routing with Claude 3 Haiku and deep reasoning with Claude 3.5 Sonnet via Amazon Bedrock.",
      "Decoupled LLM reasoning from database mutations through typed Pydantic contracts and JSON-RPC 2.0 MCP tools.",
      "Real-time telemetry dashboard visualizing live audio waveforms and streaming JSON-RPC payloads.",
    ],
    technologies: ["Python", "FastAPI", "Amazon Bedrock", "MCP", "React", "TypeScript"],
    githubUrl: "https://github.com/Ayyappanmj/nutrivoice-ai",
    // Not on DEMO LIST: GitHub button only
    image: "/projects/nutrivoice-ai.svg",
    featured: true,
    hackathonBadge: "Amazon Developer Hackathon - Alexa+ Track & AWS Builder Challenge",
  },
  {
    id: "sagaflow",
    title: "SagaFlow",
    category: "Backend & Distributed",
    tagline: "Distributed transaction orchestration coordinating multi-step e-commerce workflows.",
    description:
      "Designed a distributed transaction orchestration platform coordinating multi-step workflows across inventory, payment, and shipping services. Implements forward execution and reverse-order compensating transactions for fault recovery, combined with transactional outbox messaging over RabbitMQ.",
    bullets: [
      "Coordinates multi-step checkout workflows across 3 distinct services with automated rollback compensation.",
      "Transactional outbox pattern with Redis-backed compare-and-set idempotency checks.",
      "Comprehensive fault simulation test suite verifying consistency during transient service partitions.",
    ],
    technologies: ["Python", "FastAPI", "RabbitMQ", "Redis", "PostgreSQL", "Docker"],
    githubUrl: "https://github.com/Ayyappanmj/SagaFlow",
    // Not on DEMO LIST: GitHub button only
    image: "/projects/sagaflow.svg",
    featured: true,
  },
  {
    id: "codeforge",
    title: "CodeForge",
    category: "Backend & Distributed",
    tagline: "Multi-language code execution engine in hardened, isolated Docker containers.",
    description:
      "Engineered a secure multi-language code execution engine using Docker SDK. Runs untrusted user code in ephemeral sandboxes with dropped Linux capabilities, network isolation (--network=none), strict memory/CPU limits, and Redis-backed execution job queues.",
    bullets: [
      "Hardened execution sandboxes with dropped Linux capabilities, read-only root filesystems, and zero network access.",
      "Strict resource isolation enforcing 256MB RAM boundaries and 2-second CPU timeout gates.",
      "Asynchronous Celery execution queue with compare-and-set job lifecycle management in Redis.",
    ],
    technologies: ["Python", "FastAPI", "Docker SDK", "Redis", "Celery", "Linux CLI"],
    githubUrl: "https://github.com/Ayyappanmj/codeforge",
    // Not on DEMO LIST: GitHub button only
    image: "/projects/codeforge.svg",
    featured: true,
  },
  {
    id: "api-gateway",
    title: "API Gateway & Rate Limiting Platform",
    category: "Backend & Distributed",
    tagline: "High-throughput API gateway with distributed token-bucket rate limiting.",
    description:
      "Engineered an asynchronous API gateway featuring atomic Redis Lua token-bucket rate limiting, HMAC-SHA256 request authentication, and dynamic route forwarding with sub-millisecond execution times.",
    bullets: [
      "Sub-millisecond Redis Lua rate limiting handling 2,000+ requests per second atomically.",
      "HMAC-SHA256 request signing and verification with dynamic upstream reverse proxy routing.",
      "85 automated unit and integration tests written in pytest validating concurrency and quota resets.",
    ],
    technologies: ["FastAPI", "Python", "Redis", "Lua", "Docker", "pytest"],
    githubUrl: "https://github.com/Ayyappanmj/fastapi-api-gateway",
    demoUrl: "https://fastapi-gateway-frontend.onrender.com", // DEMO LIST Item 1 (HTTP 200)
    image: "/projects/api-gateway.svg",
    featured: true,
  },
  {
    id: "rag-document-assistant",
    title: "Production-Grade RAG Document Assistant",
    category: "AI & ML",
    tagline: "Hybrid retrieval-augmented generation assistant for unstructured enterprise documents.",
    description:
      "Built a retrieval-augmented generation pipeline indexing unstructured PDF and DOCX files. Integrates dense FAISS vector embeddings with BM25 lexical search using Reciprocal Rank Fusion, combined with context compression.",
    bullets: [
      "Hybrid FAISS vector search and BM25 keyword retrieval fused via Reciprocal Rank Fusion (RRF).",
      "Context window compression reducing prompt token volume by 40% while preserving answer accuracy.",
      "46 automated integration tests covering multi-turn document conversations and source citation integrity.",
    ],
    technologies: ["Python", "FastAPI", "FAISS", "BM25", "Ollama", "pytest"],
    githubUrl: "https://github.com/Ayyappanmj/rag-document-assistant",
    demoUrl: "https://rag-document-assistant-frontend-7ksx.onrender.com", // DEMO LIST Item 7 (HTTP 200)
    image: "/projects/rag.png",
    featured: true,
  },
  {
    id: "fieldops",
    title: "FieldOps",
    category: "Full-Stack & Mobile",
    tagline: "Offline-first mobile field operations and dispatch system with geospatial tracking.",
    description:
      "Built a field operations mobile application using Flutter and Drift SQLite database. Features bidirectional offline synchronization with UUID conflict resolution, paired with a FastAPI backend and PostgreSQL / PostGIS spatial dispatch.",
    bullets: [
      "Drift SQLite database on mobile with UUID conflict resolution and reliable sync queue.",
      "PostgreSQL / PostGIS geospatial backend calculating proximity dispatches and team coverage radii.",
      "Live operational telemetry dashboard mapping dispatch assignments and offline sync recovery.",
    ],
    technologies: ["Flutter", "Dart", "PostgreSQL", "PostGIS", "FastAPI", "Riverpod"],
    githubUrl: "https://github.com/Ayyappanmj/FieldOps",
    // Not on DEMO LIST: GitHub button only
    image: "/projects/fieldops.svg",
    featured: true,
  },
  {
    id: "vaultly",
    title: "Vaultly",
    category: "AI & ML",
    tagline: "Computer vision receipt scanner and fair shared-expense settlement platform.",
    description:
      "Created a receipt processing and shared expense optimization tool. Combines OpenCV image thresholding and Tesseract OCR for automated receipt parsing with Largest Remainder mathematics for penny-accurate expense splits.",
    bullets: [
      "OpenCV preprocessing and Tesseract OCR extracting items, subtotals, and taxes from receipts.",
      "Largest Remainder algorithm for penny-accurate split mathematics and settlement optimization.",
      "Responsive client interface with interactive itemized bill breakdowns and instant CSV export.",
    ],
    technologies: ["Python", "OpenCV", "Tesseract OCR", "Next.js", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/Ayyappanmj/Vaultly",
    // Not on DEMO LIST: GitHub button only
    image: "/projects/vaultly.svg",
    featured: true,
  },
  {
    id: "datatrust",
    title: "DataTrust",
    category: "Data Engineering",
    tagline: "Medallion lakehouse architecture processing 500K+ TLC taxi records with automated dbt testing.",
    description:
      "Constructed a Bronze-Silver-Gold medallion lakehouse using PySpark, DuckDB, and dbt Core. Implemented Pandera schema validation gates at ingest, dimensional star schemas, and automated Airflow orchestration.",
    bullets: [
      "PySpark ingestion pipeline processing 500K+ TLC trip records with Pandera schema enforcement gates.",
      "DuckDB and dbt Core analytical models with 33 automated schema and business integrity tests.",
      "Apache Airflow DAG scheduling daily batch runs and partitioned Parquet table maintenance.",
    ],
    technologies: ["PySpark", "DuckDB", "dbt Core", "Apache Airflow", "Pandera", "Parquet"],
    githubUrl: "https://github.com/Ayyappanmj/DataTrust",
    // Not on DEMO LIST: GitHub button only
    image: "/projects/datatrust.svg",
    featured: true,
  },

  // ==========================================
  // COMPACT & DEMO PROJECTS
  // ==========================================
  {
    id: "ipl-auction",
    title: "IPL Auction Strategy & Predictive Optimization",
    category: "Data Engineering",
    tagline: "Machine learning valuation engine and integer programming budget optimizer for IPL squads.",
    bullets: [
      "Valuation models predicting player prices across 1,000+ historical IPL auction records.",
      "Multi-objective linear programming budget optimizer maximizing squad points under purse constraints.",
      "96 automated pytest test cases validating data transformations and optimization boundaries.",
    ],
    technologies: ["Python", "Scikit-learn", "PuLP", "FastAPI", "Streamlit", "pytest"],
    githubUrl: "https://github.com/Ayyappanmj/ipl-auction-strategy-optimizer",
    demoUrl: "https://ipl-auction-strategy-optimizer.onrender.com", // DEMO LIST Item 2 (HTTP 200)
    image: "/projects/ipl-auction.svg",
  },
  {
    id: "fraud-detection",
    title: "Real-Time Fraud Detection API",
    category: "AI & ML",
    tagline: "Sub-50ms inference API scoring credit card transactions against trained machine learning models.",
    bullets: [
      "Isolation Forest and XGBoost ensemble classifying fraudulent transactions in under 50ms.",
      "FastAPI inference microservice integrated with a low-latency Redis feature caching layer.",
      "Interactive Streamlit monitoring dashboard streaming live transaction fraud probabilities.",
    ],
    technologies: ["Python", "FastAPI", "Scikit-learn", "XGBoost", "Redis", "Docker"],
    githubUrl: "https://github.com/Ayyappanmj/fraud-detection-api",
    demoUrl: "https://fraud-detection-api-dashboard.onrender.com", // DEMO LIST Item 3 (HTTP 200)
    image: "/projects/fraud-detection.svg",
  },
  {
    id: "predictive-maintenance",
    title: "Predictive Maintenance System - End-to-End ML & MLOps",
    category: "AI & ML",
    tagline: "Time-series sensor degradation forecasting estimating remaining useful life for industrial engines.",
    bullets: [
      "Remaining Useful Life (RUL) regression models trained on NASA Turbofan Engine dataset (FD001).",
      "Feature engineering pipeline computing rolling statistics, cumulative degradation, and sensor variance.",
      "Automated alerting dashboard visualizing health indices and warning technicians before critical failures.",
    ],
    technologies: ["Python", "Scikit-learn", "Pandas", "FastAPI", "Streamlit", "Docker"],
    githubUrl: "https://github.com/Ayyappanmj/predictive-maintenance-mlops",
    demoUrl: "https://predictive-maintenance-dashboard-tsjb.onrender.com", // DEMO LIST Item 4 (HTTP 200)
    image: "/projects/predictive-maintenance.svg",
  },
  {
    id: "market-intelligence",
    title: "Autonomous Market Intelligence Agent",
    category: "AI & ML",
    tagline: "Autonomous research agent scraping competitors, extracting signals, and compiling briefs.",
    bullets: [
      "Automated web extraction pipeline scraping industry news and competitor press releases.",
      "Strict Pydantic schema validation for structured entity extraction and local Ollama inference.",
      "Generates synthesized markdown market intelligence reports with executive summaries and sentiment metrics.",
    ],
    technologies: ["Python", "FastAPI", "BeautifulSoup", "Ollama", "Pydantic", "Docker"],
    githubUrl: "https://github.com/Ayyappanmj/autonomous-market-intelligence-agent",
    demoUrl: "https://market-intelligence-agent-lf5u.onrender.com", // DEMO LIST Item 5 (HTTP 200)
    image: "/projects/autonomous-agent.svg",
  },
  {
    id: "bug-report-analyzer",
    title: "Bug Report & Log Analyzer Agent",
    category: "AI & ML",
    tagline: "Automated agent analyzing logs, stack traces, and issue descriptions to diagnose bugs.",
    bullets: [
      "Parses multi-line stack traces and error logs to extract root causes and reproduction steps.",
      "Type-safe LLM outputs enforced with Pydantic contracts and local Ollama reasoning.",
      "SQLite incident repository tracking recurring error signatures and resolution recommendations.",
    ],
    technologies: ["Python", "Streamlit", "Ollama", "Pydantic", "SQLite", "Docker"],
    githubUrl: "https://github.com/Ayyappanmj/bug-report-log-analyzer",
    demoUrl: "https://bug-report-log-analyzer.onrender.com", // DEMO LIST Item 6 (HTTP 200)
    image: "/projects/bug-report-analyzer.svg",
  },
  {
    id: "self-healing-automation",
    title: "Self-Healing Web Automation Agent",
    category: "AI & ML",
    tagline: "Resilient web automation framework utilizing Playwright with dynamic selector recovery.",
    bullets: [
      "Playwright automation pipeline with fallback DOM heuristic algorithms for modified UI elements.",
      "Local LLM visual and semantic analysis to repair broken locators during regression runs.",
      "Headless test suites with automated failure logging, retry policies, and trace captures.",
    ],
    technologies: ["Python", "Playwright", "FastAPI", "Ollama", "Pydantic", "pytest"],
    githubUrl: "https://github.com/Ayyappanmj/self-healing-automation-agent",
    demoUrl: "https://self-healing-automation-agent.onrender.com", // DEMO LIST Item 8 (HTTP 200)
    image: "/projects/self-healing-agent.svg",
  },
  {
    id: "ai-resume-analyzer",
    title: "AI Resume Analyzer",
    category: "AI & ML",
    tagline: "Resume parser evaluating document match against job descriptions using TF-IDF and LLMs.",
    bullets: [
      "Extracts resume text and structure from PDF and DOCX files using pdfplumber.",
      "Calculates ATS match percentage using TF-IDF cosine similarity and Groq Llama 3.1 evaluation.",
      "ReportLab PDF export engine generating structured candidate feedback and missing keyword checklists.",
    ],
    technologies: ["Python", "pdfplumber", "Groq Llama 3.1", "PostgreSQL", "ReportLab", "Streamlit"],
    githubUrl: "https://github.com/Ayyappanmj/ai-resume-analyzer",
    demoUrl: "https://ai-resume-analyzer-gxbr.onrender.com", // DEMO LIST Item 10 (HTTP 200)
    image: "/projects/ai-resume-analyzer.svg",
  },
  {
    id: "realtime-chat",
    title: "Full-Stack Real-Time Chat Application",
    category: "Full-Stack & Mobile",
    tagline: "Real-time collaboration platform featuring bidirectional messaging and WebRTC encrypted calls.",
    bullets: [
      "Bidirectional messaging rooms built with Socket.io alongside peer-to-peer WebRTC encrypted calls.",
      "JWT user authentication with secure HTTP-only cookies and bcrypt password hashing.",
      "19 automated unit and component tests validating state sync and message broadcasting.",
    ],
    technologies: ["Node.js", "React", "Socket.io", "WebRTC", "Tailwind CSS", "Jest"],
    githubUrl: "https://github.com/Ayyappanmj/fullstack-realchat-app",
    // TODO: DEMO LIST Item 9 live demos (both https://fullstack-realchat-app.onrender.com and https://chat-app-mern-prod.onrender.com) returned HTTP 404. Omitted demo button per link integrity rules.
    image: "/projects/realtimechat.png",
  },
  {
    id: "supply-chain-optimization",
    title: "Enterprise E-Commerce Supply Chain & Margin Optimization",
    category: "Data Engineering",
    tagline: "Analytical data warehouse tracking shipping delays, margin erosion, and return costs.",
    bullets: [
      "ETL pipeline consolidating multi-source order data across SQLite, AWS S3, and GCS object stores.",
      "Identified freight inefficiencies, margin leakage, and high-return SKUs across sales channels.",
      "Interactive Power BI executive dashboards providing granular margin recovery recommendations.",
    ],
    technologies: ["Python", "Pandas", "SQLite", "AWS S3", "GCS", "Power BI"],
    githubUrl: "https://github.com/Ayyappanmj/Enterprise-Ecommerce-SupplyChain-Optimization",
    // Not on DEMO LIST: GitHub button only
    image: "/projects/supply-chain.svg",
  },
  {
    id: "ecommerce-churn",
    title: "E-Commerce Customer Churn & Retention Analytics",
    category: "Data Engineering",
    tagline: "Retention analytics pipeline predicting churn risk across 50,000+ customer records.",
    bullets: [
      "Calculated RFM customer metrics across 50,000+ transaction records to uncover behavioral trends.",
      "Logistic regression and random forest classification models identifying primary churn drivers.",
      "SQLite database with automated cohort tracking and visual customer retention charts.",
    ],
    technologies: ["Python", "Scikit-learn", "Pandas", "SQLite", "Seaborn", "Jupyter"],
    githubUrl: "https://github.com/Ayyappanmj/ecommerce-churn-retention-analytics",
    // Not on DEMO LIST: GitHub button only
    image: "/projects/ecommerce-churn.svg",
  },
  {
    id: "streamcommerce",
    title: "StreamCommerce",
    category: "Data Engineering",
    tagline: "Streaming clickstream pipeline with Redpanda event brokers and Bloom-filter deduplication.",
    bullets: [
      "Redpanda/Kafka event topics processing synthetic clickstream events with sub-second latency.",
      "PySpark streaming engine implementing stateful Bloom-filter event deduplication.",
      "DuckDB star-schema analytical warehouse optimized for real-time conversion queries.",
    ],
    technologies: ["Python", "PySpark", "Redpanda / Kafka", "DuckDB", "Docker", "Parquet"],
    githubUrl: "https://github.com/Ayyappanmj/streamcommerce",
    // Not on DEMO LIST: GitHub button only
    image: "/projects/streamcommerce.svg",
  },
  {
    id: "cloudpilot",
    title: "CloudPilot",
    category: "DevOps & Infra",
    tagline: "Declarative GitOps deployment workflow synchronizing Kubernetes manifests with Argo CD.",
    bullets: [
      "Automated CI workflow in GitHub Actions running Trivy vulnerability scans and publishing to GHCR.",
      "Argo CD automated reconciliation keeping Kubernetes cluster state synchronized with git.",
      "Kind local cluster configurations with ingress routing, liveness/readiness probes, and rollbacks.",
    ],
    technologies: ["Kubernetes (Kind)", "Argo CD", "GitHub Actions", "Docker", "Trivy", "Helm"],
    githubUrl: "https://github.com/Ayyappanmj/cloudpilot",
    // Not on DEMO LIST: GitHub button only
    image: "/projects/cloudpilot.svg",
  },
  {
    id: "autoops",
    title: "AutoOps",
    category: "DevOps & Infra",
    tagline: "Automated Linux infrastructure provisioning and server hardening with Ansible playbooks.",
    bullets: [
      "Ansible automation playbooks configuring Ubuntu servers and establishing security baselines.",
      "UFW firewall configuration, SSH key enforcement, and non-root user privilege boundaries.",
      "Automated auditing validating compliance against CIS Linux benchmark recommendations.",
    ],
    technologies: ["Ansible", "Linux CLI", "Bash", "SSH", "UFW", "YAML"],
    githubUrl: "https://github.com/Ayyappanmj/autoops-linux-infrastructure-automation",
    // Not on DEMO LIST: GitHub button only
    image: "/projects/autoops.svg",
  },

  // ==========================================
  // ADDITIONAL WORK
  // ==========================================
  {
    id: "enterprise-ad",
    title: "Enterprise Active Directory Lab",
    category: "DevOps & Infra",
    tagline: "Active Directory lab with automated Joiner-Mover-Leaver scripts and RBAC governance.",
    bullets: [
      "Modular PowerShell automation handling onboarding, role adjustments, and offboarding lifecycle events.",
      "AGDLP role-based access control architecture and Group Policy Object security configurations.",
      "10 diagnostic runbooks resolving common security audit events (Event IDs 4740 and 4625).",
    ],
    technologies: ["PowerShell", "Active Directory", "Windows Server", "GPO", "RBAC", "DNS"],
    githubUrl: "https://github.com/Ayyappanmj/Enterprise-ActiveDirectory-Lab",
    // Not on DEMO LIST: GitHub button only
    image: "/projects/enterprise-ad.svg",
    additionalWork: true,
  },
  {
    id: "helpdeskpro",
    title: "HelpDeskPro",
    category: "DevOps & Infra",
    tagline: "ITIL service desk queue implementation with priority SLA matrix enforcement.",
    bullets: [
      "Configured osTicket service desk queues with strict Critical-to-Low priority SLA thresholds.",
      "Multi-tier L1/L2 escalation rules and lifecycle status progression state machines.",
      "Python CLI script parsing ticket logs to identify recurring infrastructure bottlenecks.",
    ],
    technologies: ["ITSM / osTicket", "Python", "PowerShell", "Linux CLI", "MySQL", "Mermaid.js"],
    githubUrl: "https://github.com/Ayyappanmj/helpdesk-analytics-osTicket",
    // Not on DEMO LIST: GitHub button only
    image: "/projects/helpdeskpro.svg",
    additionalWork: true,
  },
  {
    id: "sleep-detection",
    title: "Sleep Detection Alarm System",
    category: "AI & ML",
    tagline: "Real-time computer vision drowsiness detection monitoring eye aspect ratio (EAR).",
    bullets: [
      "OpenCV and Dlib facial landmark detection calculating Eye Aspect Ratio (EAR) in real time.",
      "Audible alarm triggers immediately upon sustained eye closure exceeding safety thresholds.",
      "Optimized lightweight processing pipeline capable of executing on low-resource edge hardware.",
    ],
    technologies: ["Python", "OpenCV", "Dlib", "NumPy", "Pygame", "Computer Vision"],
    githubUrl: "https://github.com/Ayyappanmj/Sleep-detection-alarm",
    // Not on DEMO LIST: GitHub button only
    image: "/projects/sleepdetect.png",
    additionalWork: true,
  },
  {
    id: "doomscrolling-stop",
    title: "DoomScrolling Stop",
    category: "Full-Stack & Mobile",
    tagline: "Habit-breaking digital wellbeing tool interrupting infinite feed scrolling.",
    bullets: [
      "Browser extension tracking feed duration and prompting users with intervention overlays.",
      "Configurable time thresholds and break reminders designed to curb continuous scrolling.",
      "Client-side execution with zero external data tracking or background network telemetry.",
    ],
    technologies: ["JavaScript", "HTML5", "CSS3", "Chrome Extension API", "Web APIs"],
    githubUrl: "https://github.com/Ayyappanmj/doomscrolling-",
    // Not on DEMO LIST: GitHub button only
    image: "/projects/doomscrolling.png",
    additionalWork: true,
  },
  {
    id: "smart-attendance",
    title: "Smart Attendance System",
    category: "AI & ML",
    tagline: "Facial recognition attendance logging pipeline using OpenCV and face embeddings.",
    bullets: [
      "OpenCV facial recognition pipeline matching live video captures against enrolled student profiles.",
      "Automated attendance logging with duplicate entry suppression and timestamp verification.",
      "Exportable CSV reports and local database records for administrative review.",
    ],
    technologies: ["Python", "OpenCV", "Face Recognition", "CSV", "Tkinter", "NumPy"],
    githubUrl: "https://github.com/Ayyappanmj/Smart-Attendance-System",
    // Not on DEMO LIST: GitHub button only
    image: "/projects/smartattendece.png",
    additionalWork: true,
  },
];
