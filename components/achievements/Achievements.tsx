import AnimatedCounter from "@/components/shared/AnimatedCounter";
import SectionHeading from "@/components/shared/SectionHeading";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { achievements } from "@/data/portfolio";

export default function Achievements() {
  return (
    <SectionWrapper id="metrics">
      <SectionHeading
        eyebrow="Numbers"
        title="Key metrics at a glance."
        description="A summary of authored projects, completed internships, and earned certifications."
      />

      <div className="mx-auto max-w-4xl grid gap-6 sm:grid-cols-3">
        {achievements.map((item) => {
          const Icon = item.icon;
          return (
            <article
              key={item.label}
              className="rounded-2xl border border-[#27272A] bg-[#121215] p-6 text-center transition duration-200 hover:border-[#3F3F46]"
            >
              <div className="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-xl border border-zinc-800 bg-zinc-900 text-xl text-zinc-300">
                <Icon />
              </div>
              <h3 className="text-3xl font-bold tracking-tight text-[#FAFAFA]">
                <AnimatedCounter value={item.value} suffix={item.suffix} />
              </h3>
              <p className="mt-2 font-mono text-xs uppercase tracking-wider text-[#A1A1AA]">
                {item.label}
              </p>
            </article>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
