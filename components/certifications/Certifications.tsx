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
        eyebrow="Certifications"
        title="Industry credentials and verified job simulations."
        description="Formal certifications and practical industry simulations across AI, full-stack engineering, and scientific computing."
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((certificate) => {
          const isUrl = certificate.verify && certificate.verify.startsWith("http");
          return (
            <article
              key={certificate.name}
              className="glass group flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 p-6 transition hover:-translate-y-2 hover:border-cyan-400/30 hover:shadow-glow"
            >
              <div>
                {certificate.image ? (
                  <div className="relative mb-5 h-48 w-full overflow-hidden rounded-2xl border border-white/10 bg-slate-950/60">
                    <Image
                      src={certificate.image}
                      alt={`${certificate.name} certificate`}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  </div>
                ) : (
                  <div className="mb-5 inline-flex rounded-2xl bg-cyan-400/10 p-4 text-3xl text-cyan-400">
                    <FaCertificate />
                  </div>
                )}
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                    {certificate.issuer}
                  </span>
                  {certificate.date && (
                    <span className="flex items-center gap-1 text-xs text-muted">
                      <FaCalendarDays className="text-[10px]" /> {certificate.date}
                    </span>
                  )}
                </div>
                <h3 className="mt-2 font-poppins text-lg font-bold text-white group-hover:text-cyan-300 transition">
                  {certificate.name}
                </h3>
                {certificate.tasks && (
                  <p className="mt-2 text-xs leading-5 text-slate-300">
                    {certificate.tasks}
                  </p>
                )}
              </div>
              <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
                {isUrl ? (
                  <Link
                    href={certificate.verify}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-xs font-semibold text-cyan-300 transition hover:bg-cyan-400 hover:text-slate-950"
                  >
                    <span>Verify Credential</span>
                    <FaArrowUpRightFromSquare className="text-[10px]" />
                  </Link>
                ) : (
                  <span className="text-xs font-medium text-slate-400">
                    {certificate.verify}
                  </span>
                )}
                {certificate.image && (
                  <Link
                    href={certificate.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-muted transition hover:text-cyan-300"
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
