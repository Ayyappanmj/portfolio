"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaCertificate, FaArrowUpRightFromSquare, FaCalendarDays, FaChevronDown, FaChevronUp } from "react-icons/fa6";
import SectionHeading from "@/components/shared/SectionHeading";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { certificates, type Certificate } from "@/data/certificates";

export default function Certifications() {
  const [showAll, setShowAll] = useState(false);

  const topCertificates = useMemo(
    () => certificates.filter((c) => c.topPriority),
    []
  );

  const remainingCertificates = useMemo(
    () => certificates.filter((c) => !c.topPriority),
    []
  );

  const standardRemaining = useMemo(
    () => remainingCertificates.filter((c) => c.group !== "Virtual experience programs"),
    [remainingCertificates]
  );

  const foragePrograms = useMemo(
    () => remainingCertificates.filter((c) => c.group === "Virtual experience programs"),
    [remainingCertificates]
  );

  return (
    <SectionWrapper id="certifications">
      <SectionHeading
        eyebrow="Certifications"
        title="Verified credentials & certifications."
        description="Credentials across automated testing, agentic AI systems, enterprise data analytics, and cloud foundations."
      />

      {/* Top 6 Priority Certifications */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {topCertificates.map((cert) => (
          <CertificateCard key={cert.id} cert={cert} />
        ))}
      </div>

      {/* Expander Section */}
      <div className="mt-10 text-center">
        <button
          type="button"
          onClick={() => setShowAll(!showAll)}
          className="focus-ring inline-flex items-center gap-2 rounded-lg border border-zinc-800 bg-[#121215] px-6 py-3 font-mono text-xs font-medium text-zinc-200 transition hover:border-zinc-700 hover:bg-zinc-900"
        >
          <span>{showAll ? "Show fewer certifications" : `View all certifications (${certificates.length})`}</span>
          {showAll ? <FaChevronUp className="text-[10px]" /> : <FaChevronDown className="text-[10px]" />}
        </button>
      </div>

      <AnimatePresence>
        {showAll && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35 }}
            className="mt-12 space-y-12 overflow-hidden"
          >
            {/* Additional Standard Certifications */}
            <div>
              <h3 className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-zinc-400 font-semibold text-center sm:text-left">
                Additional Certifications &amp; Credentials
              </h3>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {standardRemaining.map((cert) => (
                  <CertificateCard key={cert.id} cert={cert} />
                ))}
              </div>
            </div>

            {/* Virtual Experience Programs (Forage) */}
            <div>
              <div className="mb-6 border-t border-zinc-800/80 pt-8">
                <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-400 font-semibold text-center sm:text-left">
                  Virtual Experience Programs (Forage)
                </h3>
                <p className="mt-1 text-xs text-zinc-500 text-center sm:text-left">
                  Practical industry simulation workflows and engineering assessments.
                </p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {foragePrograms.map((cert) => (
                  <CertificateCard key={cert.id} cert={cert} />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
}

function CertificateCard({ cert }: { cert: Certificate }) {
  return (
    <article className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-[#27272A] bg-[#121215] p-6 transition duration-200 hover:border-[#3F3F46]">
      <div>
        {cert.image ? (
          <div className="relative mb-5 h-44 w-full overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950">
            <Image
              src={cert.image}
              alt={`${cert.name} credential`}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#121215]/80 via-transparent to-transparent" />
          </div>
        ) : (
          <div className="mb-5 inline-flex rounded-xl border border-zinc-800 bg-zinc-900/60 p-3 text-2xl text-zinc-400">
            <FaCertificate />
          </div>
        )}

        <div className="flex items-center justify-between gap-2">
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-zinc-400">
            {cert.issuer}
          </span>
          {cert.date && (
            <span className="flex items-center gap-1 font-mono text-xs text-zinc-500">
              <FaCalendarDays className="text-[10px]" /> {cert.date}
            </span>
          )}
        </div>

        <h4 className="mt-2.5 text-base font-bold text-[#FAFAFA] transition group-hover:text-white">
          {cert.name}
        </h4>

        {cert.tasks && (
          <p className="mt-2 text-xs leading-relaxed text-[#A1A1AA]">
            {cert.tasks}
          </p>
        )}
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-zinc-800/80 pt-4">
        {cert.verifyUrl ? (
          <Link
            href={cert.verifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring inline-flex items-center gap-1.5 rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-1.5 font-mono text-xs font-medium text-zinc-200 transition hover:bg-zinc-800 hover:text-white"
          >
            <span>Verify Credential</span>
            <FaArrowUpRightFromSquare className="text-[10px]" />
          </Link>
        ) : (
          <span className="font-mono text-xs text-zinc-400">
            {cert.verifyText || "Verified"}
          </span>
        )}

        {cert.image && (
          <Link
            href={cert.image}
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
}
