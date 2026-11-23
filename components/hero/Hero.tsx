"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowDown, FaGithub, FaLinkedin } from "react-icons/fa6";
import { profile } from "@/data/portfolio";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#09090B] px-4 pt-28 pb-16 md:px-8"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Eyebrow & Availability */}
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span className="font-mono text-xs font-medium uppercase tracking-wider text-zinc-400">
              {profile.identity}
            </span>
            <span className="hidden sm:inline-block text-zinc-700">•</span>
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-[#121215] px-3 py-1 font-mono text-xs text-zinc-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{profile.availability}</span>
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-4xl font-extrabold tracking-tight text-[#FAFAFA] sm:text-5xl md:text-6xl lg:text-7xl">
            {profile.headline}
          </h1>

          {/* Subline */}
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#A1A1AA] md:text-xl font-normal">
            {profile.intro}
          </p>

          {/* Action Buttons: View projects, GitHub, LinkedIn */}
          <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
            <Link
              href="#projects"
              className="focus-ring inline-flex items-center gap-2.5 rounded-lg bg-[#FAFAFA] px-6 py-3 text-sm font-semibold text-[#09090B] transition hover:bg-zinc-200"
            >
              <span>View projects</span>
              <FaArrowDown className="text-xs" />
            </Link>

            <Link
              href="https://github.com/Ayyappanmj"
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex items-center gap-2 rounded-lg border border-zinc-800 bg-[#121215] px-5 py-3 text-sm font-medium text-zinc-200 transition hover:border-zinc-700 hover:bg-zinc-900"
            >
              <FaGithub className="text-base" />
              <span>GitHub</span>
            </Link>

            <Link
              href="https://www.linkedin.com/in/ayyappanmj"
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex items-center gap-2 rounded-lg border border-zinc-800 bg-[#121215] px-5 py-3 text-sm font-medium text-zinc-200 transition hover:border-zinc-700 hover:bg-zinc-900"
            >
              <FaLinkedin className="text-base text-blue-400" />
              <span>LinkedIn</span>
            </Link>
          </div>
        </motion.div>

        {/* Profile Avatar Card */}
        <motion.div
          className="relative mx-auto w-full max-w-[340px] sm:max-w-[400px] lg:max-w-[420px]"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="relative aspect-square overflow-hidden rounded-2xl border border-[#27272A] bg-[#121215] p-3 shadow-2xl transition hover:border-[#3F3F46]">
            <Image
              src={profile.avatar}
              alt="Ayyappan M"
              width={600}
              height={600}
              priority
              className="h-full w-full rounded-xl object-cover grayscale contrast-110 transition duration-500 hover:grayscale-0"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
