"use client";
import SectionHeading from "@/components/shared/SectionHeading";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { skillGroups } from "@/data/portfolio";

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <SectionHeading
        eyebrow="02 // SKILLS"
        title="Custom-engineered technical competencies."
        description="Core technical capabilities across AI systems, distributed backends, data lakehouses, mobile clients, and cloud infrastructure."
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => {
          const Icon = group.icon;
          return (
            <article
              key={group.category}
              className="group flex flex-col justify-between rounded-2xl border border-[#27272A] bg-[#121215] p-6 transition duration-200 hover:border-[#3F3F46]"
            >
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold uppercase tracking-wider text-zinc-500">
                    Domain
                  </span>
                  <div className="rounded-lg border border-zinc-800 bg-zinc-900/80 p-2 text-zinc-400">
                    <Icon className="text-base" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-[#FAFAFA]">
                  {group.category}
                </h3>
                {group.description && (
                  <p className="mt-2 text-xs leading-relaxed text-[#A1A1AA]">
                    {group.description}
                  </p>
                )}
              </div>
              <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-zinc-800/60">
                {group.skills.map((skillName: string) => (
                  <span
                    key={skillName}
                    className="rounded-md border border-zinc-800 bg-zinc-900 px-3 py-1 font-mono text-xs text-zinc-300 transition hover:border-zinc-700 hover:text-zinc-100"
                  >
                    {skillName}
                  </span>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
