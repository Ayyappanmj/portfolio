import Image from "next/image";
import Link from "next/link";
import { FaCertificate, FaArrowUpRightFromSquare } from "react-icons/fa6";
import SectionHeading from "@/components/shared/SectionHeading";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { experiences } from "@/data/portfolio";

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <SectionHeading
        eyebrow="05 // EXPERIENCE"
        title="Real-world engineering impact."
        description="A timeline of roles focused on shipping production software, automating testing pipelines, and building scalable systems."
      />
      <div className="relative mx-auto max-w-4xl">
        <div className="absolute left-4 top-0 h-full w-px bg-zinc-800 md:left-1/2" />
        <div className="space-y-10">
          {experiences.map((experience, index) => (
            <div
              key={`${experience.company}-${experience.role}`}
              className={`relative grid gap-6 md:grid-cols-2 ${
                index % 2 === 0 ? "" : "md:[&>article]:col-start-2"
              }`}
            >
              <div className="absolute left-2.5 top-4 h-4 w-4 rounded-full border-2 border-zinc-950 bg-zinc-400 md:left-1/2 md:-translate-x-1/2" />
              <article className="ml-10 rounded-2xl border border-[#27272A] bg-[#121215] p-6 transition duration-200 hover:border-[#3F3F46] md:ml-0">
                <p className="font-mono text-xs font-semibold text-zinc-400">{experience.duration}</p>
                <h3 className="mt-2 text-xl font-bold text-[#FAFAFA]">
                  {experience.role}
                </h3>
                <p className="mt-1 font-mono text-xs text-zinc-500">{experience.company}</p>
                {/* @ts-ignore */}
                {experience.summary && (
                  <p className="mt-4 rounded-xl border border-zinc-800/80 bg-zinc-900/50 p-4 text-xs leading-relaxed text-zinc-300">
                    {/* @ts-ignore */}
                    {experience.summary}
                  </p>
                )}
                <ul className="mt-4 space-y-2 text-xs leading-relaxed text-[#A1A1AA]">
                  {experience.responsibilities.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="font-mono text-zinc-500">&gt;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                {/* @ts-ignore */}
                {experience.skills && experience.skills.length > 0 && (
                  <div className="mt-5 flex flex-wrap gap-1.5 border-t border-zinc-800/80 pt-4">
                    {/* @ts-ignore */}
                    {experience.skills.map((skill: string) => (
                      <span
                        key={skill}
                        className="rounded border border-zinc-800 bg-zinc-900 px-2.5 py-1 font-mono text-[11px] text-zinc-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
                {/* @ts-ignore */}
                {experience.certificate && (
                  <div className="mt-5 border-t border-zinc-800/80 pt-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-xl border border-zinc-800 bg-zinc-900/40 p-3">
                      <div className="flex items-center gap-3">
                        <div className="relative h-12 w-16 overflow-hidden rounded-lg border border-zinc-800 shrink-0">
                          <Image
                            /* @ts-ignore */
                            src={experience.certificate}
                            alt={`${experience.role} Certificate`}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-[#FAFAFA]">Verified Internship Certificate</p>
                          <p className="font-mono text-[11px] text-zinc-500">ID: µ2024032145 • K-DISC &amp; GTech</p>
                        </div>
                      </div>
                      <Link
                        /* @ts-ignore */
                        href={experience.certificate}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="focus-ring inline-flex items-center justify-center gap-1.5 rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-1.5 font-mono text-xs font-medium text-zinc-200 transition hover:bg-zinc-800 hover:text-white self-start sm:self-auto"
                      >
                        <FaCertificate className="text-xs" />
                        <span>View Certificate</span>
                        <FaArrowUpRightFromSquare className="text-[10px]" />
                      </Link>
                    </div>
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
