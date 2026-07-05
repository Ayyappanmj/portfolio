import AnimatedCounter from "@/components/shared/AnimatedCounter";
import SectionHeading from "@/components/shared/SectionHeading";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { achievements } from "@/data/portfolio";
export default function Achievements() {
  return (
    <SectionWrapper id="achievements">
      <SectionHeading
        eyebrow="Achievements"
        title="Numbers, awards, and proof of consistency."
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {achievements.map((achievement) => {
          const Icon = achievement.icon;
          return (
            <article
              key={achievement.label}
              className="glass rounded-3xl p-6 text-center transition hover:-translate-y-2 hover:shadow-glow"
            >
              <div className="mx-auto mb-5 grid h-16 w-16 place-items-center rounded-2xl bg-cyan-400/10 text-3xl text-cyan-400">
                <Icon />
              </div>
              <h3 className="font-poppins text-4xl font-extrabold">
                <AnimatedCounter value={achievement.value} suffix={achievement.suffix} />
              </h3>
              <p className="mt-3 text-muted">{achievement.label}</p>
            </article>
          );
        })}
      </div>
    </SectionWrapper>
  );
}