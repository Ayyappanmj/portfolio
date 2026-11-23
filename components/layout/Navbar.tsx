"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { AnimatePresence, motion } from "framer-motion";
import { FaBars, FaGithub, FaLinkedin, FaMoon, FaSun, FaXmark } from "react-icons/fa6";
import { navLinks, profile } from "@/data/portfolio";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="fixed left-0 right-0 top-4 z-50 px-4">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl items-center justify-between rounded-xl border border-[#27272A] bg-[#121215]/90 px-5 py-3 backdrop-blur-md shadow-lg"
      >
        <Link
          href="#home"
          className="focus-ring flex items-center gap-2 rounded-md font-sans text-base font-bold tracking-tight text-[#FAFAFA]"
        >
          <span className="font-mono text-sm text-zinc-500">&gt;</span>
          <span>{profile.name}</span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden items-center gap-6 lg:gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="focus-ring font-mono text-xs font-medium uppercase tracking-wider text-[#A1A1AA] transition hover:text-[#FAFAFA]"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right Action Icons & Status */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Availability Pill */}
          <div className="hidden sm:inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-3 py-1 font-mono text-xs text-zinc-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>{profile.availability}</span>
          </div>

          {/* GitHub Icon Link */}
          <Link
            href="https://github.com/Ayyappanmj"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="focus-ring inline-flex rounded-lg border border-[#27272A] p-2 text-xs text-[#A1A1AA] transition hover:border-[#3F3F46] hover:text-[#FAFAFA]"
          >
            <FaGithub className="text-sm" />
          </Link>

          {/* LinkedIn Icon Link */}
          <Link
            href="https://www.linkedin.com/in/ayyappanmj"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="focus-ring inline-flex rounded-lg border border-[#27272A] p-2 text-xs text-[#A1A1AA] transition hover:border-[#3F3F46] hover:text-[#FAFAFA]"
          >
            <FaLinkedin className="text-sm" />
          </Link>

          {/* Theme Toggle */}
          <button
            type="button"
            aria-label="Toggle theme"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="focus-ring rounded-lg border border-[#27272A] p-2 text-xs text-[#A1A1AA] transition hover:border-[#3F3F46] hover:text-[#FAFAFA]"
          >
            {mounted ? (theme === "dark" ? <FaSun className="text-sm" /> : <FaMoon className="text-sm" />) : <FaMoon className="text-sm" />}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            aria-label="Open navigation menu"
            onClick={() => setOpen((value) => !value)}
            className="focus-ring rounded-lg border border-[#27272A] p-2 text-xs text-[#A1A1AA] transition hover:text-[#FAFAFA] md:hidden"
          >
            {open ? <FaXmark className="text-sm" /> : <FaBars className="text-sm" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {open ? (
          <motion.div
            className="mx-auto mt-2 max-w-7xl rounded-xl border border-[#27272A] bg-[#121215] p-4 md:hidden shadow-xl"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
          >
            <div className="grid gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="focus-ring rounded-lg px-4 py-2.5 font-mono text-xs uppercase tracking-wider text-[#A1A1AA] transition hover:bg-zinc-900 hover:text-[#FAFAFA]"
                >
                  {link.label}
                </Link>
              ))}

              <div className="mt-2 pt-3 border-t border-zinc-800 flex items-center justify-between px-2">
                <div className="flex items-center gap-2 font-mono text-xs text-zinc-300">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span>{profile.availability}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Link
                    href="https://github.com/Ayyappanmj"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                    className="p-2 text-zinc-400 hover:text-white"
                  >
                    <FaGithub />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/ayyappanmj"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                    className="p-2 text-zinc-400 hover:text-white"
                  >
                    <FaLinkedin />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
