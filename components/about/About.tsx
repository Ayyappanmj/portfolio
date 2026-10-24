import SectionHeading from "@/components/shared/SectionHeading";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { aboutTimeline, profile } from "@/data/portfolio";
export default function About() {
  return (
    <SectionWrapper id="about">
      <SectionHeading
        eyebrow="About Me"
        title="Engineering digital products with precision and taste."
        description="I combine strong frontend craft, backend architecture, cloud deployment, and product thinking to build experiences that look premium and perform reliably."
      />
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="glass rounded-3xl p-8">
          <h3 className="font-poppins text-2xl font-bold">Professional Summary</h3>
          <p className="mt-5 leading-8 text-muted">
            I am an Information Technology engineer focused on architecting resilient backend systems, autonomous AI agents, and enterprise data analytics pipelines. My work includes designing production-shaped API gateways with Redis-backed Lua token-bucket rate limiting, multi-agent AI workflows for automated market intelligence, and production-grade RAG assistants using hybrid FAISS/BM25 retrieval with local Ollama inference. In data engineering, I have modeled data warehouses processing 500K+ transactional records with MySQL and Power BI, as well as sports analytics optimization platforms on PostgreSQL. With hands-on internship experience in data analytics and production Python engineering—enforcing rigorous TDD (pytest), profiling (cProfile), and GitHub Actions CI/CD—I build software that combines technical rigor, security, and measurable business impact.


          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 p-5">
              <p className="text-sm text-muted">Location</p>
              <p className="mt-1 font-semibold">{profile.location}</p>
            </div>
            <div className="rounded-2xl border border-white/10 p-5">
              <p className="text-sm text-muted">Primary Role</p>
              <p className="mt-1 font-semibold">{profile.title}</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-400" />
          <div className="space-y-6">
            {aboutTimeline.map((item) => (
              <div key={item.year} className="relative pl-14">
                <div className="absolute left-2 top-2 h-7 w-7 rounded-full border-4 border-slate-950 bg-cyan-400 shadow-glow" />
                <div className="glass rounded-3xl p-6 transition hover:-translate-y-1">
                  <span className="text-sm font-bold text-cyan-400">{item.year}</span>
                  <h3 className="mt-2 font-poppins text-xl font-bold">{item.title}</h3>
                  <p className="mt-3 leading-7 text-muted">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}