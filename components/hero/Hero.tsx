"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import { profile, techIcons, typingRoles } from "@/data/portfolio";
import TypingText from "./TypingText";
import ParticleBackground from "./ParticleBackground";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-hero-gradient px-4 pt-32 md:px-8"
    >
      <ParticleBackground />
      <div className="mx-auto grid min-h-[calc(100vh-8rem)] max-w-7xl items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 42 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
        >
          <h1 className="font-poppins text-4xl font-extrabold leading-tight md:text-6xl lg:text-7xl">
            Hi, I am <span className="gradient-text">{profile.name}</span>
          </h1>
          <h2 className="mt-5 min-h-10 font-poppins text-2xl font-semibold md:text-4xl">
            <TypingText words={typingRoles} />
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
            {profile.intro}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="#contact"
              className="focus-ring inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 px-6 py-3 font-semibold text-white shadow-glow transition hover:scale-105"
            >
              Hire Me <FaArrowRight />
            </Link>
          </div>
          <div className="mt-8 flex gap-4">
            {profile.socials.map((social) => {
              const Icon = social.icon;
              return (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  aria-label={social.label}
                  className="focus-ring rounded-full border border-white/15 p-4 text-xl transition hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400"
                >
                  <Icon />
                </Link>
              );
            })}
          </div>
        </motion.div>
        <motion.div
          className="relative mx-auto h-[340px] w-[340px] max-w-full md:h-[460px] md:w-[460px]"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.15 }}
        >
          <div className="absolute inset-0 animate-float rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-400 opacity-30 blur-3xl" />
          <div className="glass relative h-full w-full overflow-hidden rounded-[2.5rem] p-5">
            <Image
              src={profile.avatar}
              alt={`${profile.name} profile image`}
              width={700}
              height={700}
              priority
              className="h-full w-full rounded-[2rem] object-cover"
            />
          </div>
          <div className="glass absolute -bottom-4 left-1/2 flex -translate-x-1/2 gap-4 rounded-2xl px-5 py-4">
            {techIcons.map((Icon, index) => (
              <motion.span
                key={index}
                className="text-2xl text-cyan-300"
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 2,
                  delay: index * 0.15,
                  repeat: Infinity
                }}
              >
                <Icon />
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
