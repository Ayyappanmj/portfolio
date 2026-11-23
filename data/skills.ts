export interface SkillGroup {
  group: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    group: "LANGUAGES",
    items: ["Python", "TypeScript", "JavaScript", "SQL", "Dart", "Bash", "PowerShell"],
  },
  {
    group: "AI & LLMS",
    items: [
      "LLM Application Development",
      "RAG (FAISS + BM25 hybrid)",
      "AI Agents",
      "Model Context Protocol (MCP)",
      "Amazon Bedrock",
      "Ollama",
      "LangChain",
      "Prompt Engineering",
    ],
  },
  {
    group: "BACKEND",
    items: [
      "FastAPI",
      "Node.js",
      "Express",
      "REST APIs",
      "SQLAlchemy",
      "Alembic",
      "Pydantic",
      "Celery",
    ],
  },
  {
    group: "DATABASES & MESSAGING",
    items: [
      "PostgreSQL",
      "Redis",
      "MongoDB",
      "SQLite",
      "MySQL",
      "RabbitMQ",
      "Kafka / Redpanda",
    ],
  },
  {
    group: "AUTHENTICATION & SECURITY",
    items: [
      "JWT",
      "RBAC",
      "Refresh-Token Rotation",
      "bcrypt",
      "Password Hashing",
      "Protected Routes",
      "Environment Variables",
    ],
  },
  {
    group: "DATA ENGINEERING",
    items: [
      "PySpark",
      "Apache Airflow",
      "dbt Core",
      "DuckDB",
      "Parquet",
      "Pandera",
      "Pandas",
      "Power BI (DAX)",
    ],
  },
  {
    group: "FRONTEND & MOBILE",
    items: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Flutter",
      "Streamlit",
      "WebSockets",
    ],
  },
  {
    group: "DEVOPS & CLOUD",
    items: [
      "Docker",
      "Kubernetes",
      "Helm",
      "Terraform",
      "Argo CD",
      "GitHub Actions",
      "Prometheus & Grafana",
      "Linux",
    ],
  },
  {
    group: "TESTING & QUALITY",
    items: [
      "Pytest",
      "Playwright",
      "Ruff",
      "Selenium",
    ],
  },
  {
    group: "TOOLS",
    items: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "Figma",
      "Arduino IDE",
    ],
  },
];
