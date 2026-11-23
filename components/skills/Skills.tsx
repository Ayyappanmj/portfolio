import SectionHeading from "@/components/shared/SectionHeading";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { skillGroups } from "@/data/skills";

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <SectionHeading
        eyebrow="Skills"
        title="What I work with"
        description="Tools, languages, and technical frameworks applied directly across projects, pipelines, and coursework."
      />

      {/* Minimal typographic grid: 4 cols on desktop, 2 on tablet, 1 on mobile */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 lg:gap-x-12 gap-y-14 md:gap-y-16">
        {skillGroups.map((group) => (
          <div key={group.group} className="flex flex-col">
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500 font-medium mb-6">
              {group.group}
            </h3>
            <ul className="space-y-3.5 list-none p-0 m-0">
              {group.items.map((skill) => (
                <li
                  key={skill}
                  className="text-base md:text-[17px] text-zinc-200 font-normal leading-snug tracking-tight"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
