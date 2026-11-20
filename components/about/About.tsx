import SectionHeading from "@/components/shared/SectionHeading";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { aboutTimeline, profile } from "@/data/portfolio";

export default function About() {
  return (
    <SectionWrapper id="about">
      <SectionHeading
        eyebrow="01 // ABOUT"
        title="Engineering digital systems with precision and rigor."
        description="Combining deep backend architecture, distributed systems patterns, autonomous AI agents, and enterprise data analytics pipelines."
      />
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-2xl border border-[#27272A] bg-[#121215] p-8 transition hover:border-[#3F3F46]">
          <h3 className="text-xl font-bold text-[#FAFAFA]">Professional Summary</h3>
          <p className="mt-4 leading-relaxed text-[#A1A1AA]">
            I am a Software Engineer focused on architecting resilient distributed backends, autonomous AI agent workflows, and high-throughput data engineering pipelines. My work spans designing transactional outbox engines, saga orchestrators over RabbitMQ/Kafka, hardened Docker sandbox runtimes, and hybrid RAG systems (FAISS/BM25) with Model Context Protocol (MCP) integrations.
          </p>
          <p className="mt-4 leading-relaxed text-[#A1A1AA]">
            In data engineering, I design Bronze-Silver-Gold lakehouses with PySpark, DuckDB, and dbt Core, enforcing strict Pandera schema validation gates and automated Airflow DAG orchestration. With production internship experience enforcing Test-Driven Development (pytest), profiling (cProfile), and GitHub Actions CI/CD automation, I build software that combines technical rigor, security, and measurable performance.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/50 p-4">
              <p className="font-mono text-xs uppercase tracking-wider text-zinc-500">Location</p>
              <p className="mt-1 font-mono text-sm font-semibold text-zinc-200">{profile.location}</p>
            </div>
            <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/50 p-4">
              <p className="font-mono text-xs uppercase tracking-wider text-zinc-500">Primary Focus</p>
              <p className="mt-1 font-mono text-sm font-semibold text-zinc-200">{profile.title}</p>
            </div>
          </div>
        </div>

        <div className="relative rounded-2xl border border-[#27272A] bg-[#121215] p-8 transition hover:border-[#3F3F46]">
          <h3 className="mb-6 font-mono text-xs uppercase tracking-wider text-zinc-400">Education &amp; Background</h3>
          <div className="relative border-l border-zinc-800 pl-6 space-y-8">
            {aboutTimeline.map((item) => (
              <div key={item.year} className="relative">
                <div className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border border-zinc-600 bg-zinc-900" />
                <span className="font-mono text-xs font-semibold text-zinc-400">{item.year}</span>
                <h4 className="mt-1 text-base font-bold text-[#FAFAFA]">{item.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-[#A1A1AA]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
