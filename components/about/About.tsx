import SectionHeading from "@/components/shared/SectionHeading";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { profile } from "@/data/portfolio";
import { educationList } from "@/data/experience";

export default function About() {
  return (
    <SectionWrapper id="about">
      <SectionHeading
        eyebrow="About"
        title="Background & how I build."
        description="A practical overview of my education, technical interests, and hands-on engineering approach."
      />

      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Left Column: First-Person Bio & Learning Note */}
        <div className="flex flex-col justify-between rounded-2xl border border-[#27272A] bg-[#121215] p-6 sm:p-8 transition hover:border-[#3F3F46]">
          <div className="space-y-4 text-sm sm:text-base leading-relaxed text-[#A1A1AA]">
            <p>
              I am an Information Technology student at University College of Engineering, Kariyavattom, University of Kerala (graduating in 2026). I build software across the stack—focusing on backend systems, data pipelines, and applied AI tools—with an emphasis on writing comprehensive tests, setting up CI/CD workflows, and understanding system internals.
            </p>
            <p>
              I enjoy taking technical concepts from design into working implementations: whether that is configuring distributed token-bucket rate limiters in Redis Lua, building resilient data lakehouse models with DuckDB and dbt, or wiring Model Context Protocol (MCP) agents with typed contracts. I value clear code, automated testing (TDD with pytest), and measurable reliability.
            </p>

            {/* Human Touch: What I'm Learning Now */}
            <div className="mt-6 rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-4">
              <p className="font-mono text-xs font-semibold uppercase tracking-wider text-emerald-400">
                What I&apos;m learning now
              </p>
              <p className="mt-1.5 text-xs sm:text-sm text-zinc-300">
                Deepening my hands-on knowledge of Kubernetes cluster internals, event-driven streaming with Redpanda/Kafka, and distributed consensus mechanisms.
              </p>
            </div>
          </div>

          {/* Quick Facts */}
          <div className="mt-6 pt-6 border-t border-zinc-800/80 grid gap-3 sm:grid-cols-2">
            <div className="rounded-lg border border-zinc-800/60 bg-zinc-900/30 p-3">
              <span className="font-mono text-[11px] uppercase tracking-wider text-zinc-500">Based In</span>
              <p className="mt-1 font-mono text-xs font-medium text-zinc-200">{profile.location}</p>
            </div>
            <div className="rounded-lg border border-zinc-800/60 bg-zinc-900/30 p-3">
              <span className="font-mono text-[11px] uppercase tracking-wider text-zinc-500">Current Status</span>
              <p className="mt-1 font-mono text-xs font-medium text-zinc-200">{profile.availability}</p>
            </div>
          </div>
        </div>

        {/* Right Column: Education Timeline */}
        <div className="rounded-2xl border border-[#27272A] bg-[#121215] p-6 sm:p-8 transition hover:border-[#3F3F46]">
          <h3 className="mb-6 font-mono text-xs font-semibold uppercase tracking-wider text-zinc-400">
            Education Timeline
          </h3>

          <div className="relative border-l border-zinc-800 pl-6 space-y-7">
            {educationList.map((item) => (
              <div key={item.id} className="relative">
                <div className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border border-zinc-600 bg-zinc-900" />
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="font-mono text-xs font-medium text-zinc-400">{item.duration}</span>
                  <span className="rounded bg-zinc-900 border border-zinc-800 px-2 py-0.5 font-mono text-[11px] text-zinc-300">
                    {item.score}
                  </span>
                </div>
                <h4 className="mt-1.5 text-sm sm:text-base font-bold text-[#FAFAFA]">{item.degree}</h4>
                <p className="mt-1 text-xs text-zinc-400">{item.institution}</p>
                {item.details && (
                  <p className="mt-2 text-xs leading-relaxed text-zinc-500">{item.details}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
