"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { AnimatePresence, motion } from "framer-motion";
import { FaBars, FaMoon, FaSun, FaXmark } from "react-icons/fa6";
import { navLinks } from "@/data/portfolio";
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
        className="glass mx-auto flex max-w-7xl items-center justify-between rounded-2xl px-4 py-3"
      >
        <Link href="#home" className="focus-ring rounded-lg font-poppins text-xl font-bold">
          <span className="gradient-text">AYYAPPAN</span>{" "}
          <span className="text-cyan-400">M</span>
        </Link>
        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="focus-ring rounded-md text-sm font-medium text-muted transition hover:text-cyan-400"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Toggle theme"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="focus-ring rounded-xl border border-white/10 p-3 text-sm transition hover:border-cyan-400 hover:text-cyan-400"
          >
            {mounted ? (theme === "dark" ? <FaSun /> : <FaMoon />) : <FaMoon />}
          </button>
          <button
            type="button"
            aria-label="Open navigation menu"
            onClick={() => setOpen((value) => !value)}
            className="focus-ring rounded-xl border border-white/10 p-3 md:hidden"
          >
            {open ? <FaXmark /> : <FaBars />}
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {open ? (
          <motion.div
            className="glass mx-auto mt-3 max-w-7xl rounded-2xl p-4 md:hidden"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
          >
            <div className="grid gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="focus-ring rounded-xl px-4 py-3 text-sm font-medium text-muted transition hover:bg-white/10 hover:text-cyan-400"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}