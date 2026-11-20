"use client";
import Image from "next/image";
import Link from "next/link";
import { FaCertificate, FaArrowUpRightFromSquare, FaCalendarDays } from "react-icons/fa6";
import SectionHeading from "@/components/shared/SectionHeading";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { certifications } from "@/data/portfolio";

export default function Certifications() {
  return (
    <SectionWrapper id="certifications">
      <SectionHeading
        eyebrow="04 // CERTIFICATIONS"
        title="Industry credentials and verified engineering simulations."
        description="Formal certifications and practical industry simulations across QA automation, AI systems, full-stack engineering, and cloud platforms."
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((certificate) => {
          const isUrl = certificate.verify && certificate.verify.startsWith("http");
          return (
            <article
              key={certificate.name}
              className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-[#27272A] bg-[#121215] p-6 transition duration-200 hover:border-[#3F3F46]"
            >
              <div>
                {certificate.image ? (
                  <div className="relative mb-5 h-44 w-full overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950">
                    <Image
                      src={certificate.image}
                      alt={`${certificate.name} certificate`}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121215] via-transparent to-transparent opacity-60" />
                  </div>
                ) : (
                  <div className="mb-5 inline-flex rounded-xl border border-zinc-800 bg-zinc-900/60 p-3 text-2xl text-zinc-400">
                    <FaCertificate />
                  </div>
                )}
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-xs font-semibold uppercase tracking-wider text-zinc-400">
                    {certificate.issuer}
                  </span>
                  {certificate.date && (
                    <span className="flex items-center gap-1 font-mono text-xs text-zinc-500">
                      <FaCalendarDays className="text-[10px]" /> {certificate.date}
                    </span>
                  )}
                </div>
                <h3 className="mt-2.5 text-lg font-bold text-[#FAFAFA] transition group-hover:text-white">
                  {certificate.name}
                </h3>
                {certificate.tasks && (
                  <p className="mt-2 text-xs leading-relaxed text-[#A1A1AA]">
                    {certificate.tasks}
                  </p>
                )}
              </div>
              <div className="mt-6 flex items-center justify-between border-t border-zinc-800/80 pt-4">
                {isUrl ? (
                  <Link
                    href={certificate.verify}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring inline-flex items-center gap-1.5 rounded-lg border border-zinc-800 bg-zinc-900 px-3.5 py-1.5 font-mono text-xs font-medium text-zinc-200 transition hover:bg-zinc-800 hover:text-white"
                  >
                    <span>Verify Credential ↗</span>
                  </Link>
                ) : (
                  <span className="font-mono text-xs text-zinc-500">
                    {certificate.verify}
                  </span>
                )}
                {certificate.image && (
                  <Link
                    href={certificate.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs text-zinc-500 transition hover:text-zinc-300"
                  >
                    View Full
                  </Link>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
