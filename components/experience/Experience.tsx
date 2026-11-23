import Image from "next/image";
import Link from "next/link";
import { FaCertificate, FaArrowUpRightFromSquare, FaCalendarDays } from "react-icons/fa6";
import SectionHeading from "@/components/shared/SectionHeading";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <SectionHeading
        eyebrow="Experience"
        title="Internship timeline & contributions."
        description="Applied engineering internships focused on clean software architecture, automated testing suites, data workflows, and technology prototyping."
      />

      <div className="relative mx-auto max-w-4xl">
        <div className="space-y-8">
          {experiences.map((exp) => (
            <article
              key={exp.id}
              className="rounded-2xl border border-[#27272A] bg-[#121215] p-6 sm:p-8 transition duration-200 hover:border-[#3F3F46]"
            >
              {/* Header: Dates & Company */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="font-mono text-xs font-semibold text-zinc-400">
                  {exp.company}
                </span>
                <span className="flex items-center gap-1.5 font-mono text-xs text-zinc-500">
                  <FaCalendarDays className="text-[11px]" />
                  <span>{exp.duration}</span>
                </span>
              </div>

              {/* Official Role Title (Fact, not positioning) */}
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#FAFAFA]">
                {exp.role}
              </h3>

              {/* Summary */}
              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-zinc-300">
                {exp.summary}
              </p>

              {/* Responsibilities & Outcomes */}
              <ul className="mt-4 space-y-2 text-xs sm:text-sm leading-relaxed text-[#A1A1AA]">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="font-mono text-zinc-500 select-none">&gt;</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>

              {/* Skills */}
              <div className="mt-5 flex flex-wrap gap-1.5 pt-4 border-t border-zinc-800/80">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded border border-zinc-800 bg-zinc-900 px-2.5 py-1 font-mono text-[11px] text-zinc-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Verified Certificate if available (YIP 6.0) */}
              {exp.certificate && (
                <div className="mt-6 pt-4 border-t border-zinc-800/80">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-xl border border-zinc-800 bg-zinc-900/40 p-3.5">
                    <div className="flex items-center gap-3">
                      <div className="relative h-14 w-20 overflow-hidden rounded-lg border border-zinc-800 shrink-0 bg-zinc-950">
                        <Image
                          src={exp.certificate}
                          alt={`${exp.role} Certificate of Appreciation`}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-[#FAFAFA]">
                          Certificate of Appreciation
                        </p>
                        <p className="font-mono text-[11px] text-zinc-400">
                          ID: {exp.certificateId} • K-DISC &amp; GTech
                        </p>
                      </div>
                    </div>
                    <Link
                      href={exp.certificate}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="focus-ring inline-flex items-center justify-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900 px-3.5 py-2 font-mono text-xs font-medium text-zinc-200 transition hover:bg-zinc-800 hover:text-white self-start sm:self-auto"
                    >
                      <FaCertificate className="text-xs" />
                      <span>View Certificate</span>
                      <FaArrowUpRightFromSquare className="text-[10px]" />
                    </Link>
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
