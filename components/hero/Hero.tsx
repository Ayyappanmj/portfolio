"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight, FaGithub, FaLinkedin } from "react-icons/fa6";
import { profile, techIcons, typingRoles } from "@/data/portfolio";
import TypingText from "./TypingText";
import ParticleBackground from "./ParticleBackground";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#09090B] px-4 pt-32 md:px-8"
    >
      <ParticleBackground />
      <div className="mx-auto grid min-h-[calc(100vh-8rem)] max-w-7xl items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Status Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-[#121215] px-3.5 py-1.5 font-mono text-xs text-zinc-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Available for Full-Time Roles &amp; Engineering Contracts</span>
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-[#FAFAFA] md:text-6xl lg:text-7xl">
            Hi, I am {profile.name}
          </h1>
          <h2 className="mt-4 min-h-10 font-mono text-xl text-zinc-400 md:text-3xl">
            <TypingText words={typingRoles} />
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#A1A1AA] md:text-lg">
            {profile.intro}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="#contact"
              className="focus-ring inline-flex items-center gap-2.5 rounded-lg bg-[#FAFAFA] px-6 py-3 text-sm font-semibold text-[#09090B] transition hover:bg-zinc-200"
            >
              <span>Get in Touch</span>
              <FaArrowRight className="text-xs" />
            </Link>
            <Link
              href="#projects"
              className="focus-ring inline-flex items-center gap-2.5 rounded-lg border border-zinc-800 bg-transparent px-6 py-3 text-sm font-semibold text-zinc-200 transition hover:bg-zinc-900"
            >
              <span>View Projects</span>
            </Link>
          </div>

          <div className="mt-8 flex gap-3">
            {profile.socials.map((social) => {
              const Icon = social.icon;
              return (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  aria-label={social.label}
                  className="focus-ring rounded-lg border border-zinc-800 bg-[#121215] p-3 text-base text-zinc-400 transition hover:border-zinc-600 hover:text-zinc-100"
                >
                  <Icon />
                </Link>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          className="relative mx-auto h-[320px] w-[320px] max-w-full md:h-[440px] md:w-[440px]"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className="relative h-full w-full overflow-hidden rounded-2xl border border-[#27272A] bg-[#121215] p-3 transition hover:border-[#3F3F46]">
            <Image
              src={profile.avatar}
              alt={`${profile.name} profile image`}
              width={700}
              height={700}
              priority
              className="h-full w-full rounded-xl object-cover grayscale contrast-125 transition duration-500 hover:grayscale-0"
            />
          </div>

          <div className="absolute -bottom-4 left-1/2 flex -translate-x-1/2 gap-3 rounded-xl border border-[#27272A] bg-[#121215] px-4 py-2.5 shadow-lg">
            {techIcons.map((Icon, index) => (
              <span
                key={index}
                className="text-lg text-zinc-400 transition hover:text-zinc-100"
              >
                <Icon />
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
