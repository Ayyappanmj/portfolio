import SectionHeading from "@/components/shared/SectionHeading";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { experiences } from "@/data/portfolio";
export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <SectionHeading
        eyebrow="Experience"
        title="Real-world engineering impact."
        description="A timeline of roles focused on shipping production software, improving performance, and building scalable systems."
      />
      <div className="relative mx-auto max-w-4xl">
        <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-400 md:left-1/2" />
        <div className="space-y-10">
          {experiences.map((experience, index) => (
            <div
              key={`${experience.company}-${experience.role}`}
              className={`relative grid gap-6 md:grid-cols-2 ${
                index % 2 === 0 ? "" : "md:[&>article]:col-start-2"
              }`}
            >
              <div className="absolute left-1 top-4 h-7 w-7 rounded-full border-4 border-slate-950 bg-cyan-400 shadow-glow md:left-1/2 md:-translate-x-1/2" />
              <article className="glass ml-12 rounded-3xl p-6 md:ml-0">
                <p className="text-sm font-bold text-cyan-400">{experience.duration}</p>
                <h3 className="mt-2 font-poppins text-2xl font-bold">
                  {experience.role}
                </h3>
                <p className="mt-1 font-semibold text-muted">{experience.company}</p>
                {/* @ts-ignore */}
                {experience.summary && (
                  <p className="mt-4 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-4 text-sm leading-6 text-slate-200">
                    {/* @ts-ignore */}
                    {experience.summary}
                  </p>
                )}
                <ul className="mt-5 space-y-3 text-muted">
                  {experience.responsibilities.map((item) => (
                    <li key={item} className="leading-7">
                      {item}
                    </li>
                  ))}
                </ul>
                {/* @ts-ignore */}
                {experience.skills && experience.skills.length > 0 && (
                  <div className="mt-5 flex flex-wrap gap-2 border-t border-white/10 pt-4">
                    {/* @ts-ignore */}
                    {experience.skills.map((skill: string) => (
                      <span
                        key={skill}
                        className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-2.5 py-1 text-xs font-medium text-cyan-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </article>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}