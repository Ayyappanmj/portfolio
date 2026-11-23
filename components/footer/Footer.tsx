import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa6";
import { profile } from "@/data/portfolio";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-[#27272A] bg-[#09090B] py-12 px-4">
      <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left">
          <Link
            href="#home"
            className="font-sans text-base font-bold tracking-tight text-[#FAFAFA] hover:text-zinc-300"
          >
            {profile.name}
          </Link>
          <p className="mt-1 font-mono text-xs text-zinc-500">
            {profile.identity}
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-3">
          <Link
            href="https://github.com/Ayyappanmj"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="focus-ring rounded-lg border border-zinc-800 bg-[#121215] p-2.5 text-xs text-zinc-400 transition hover:border-zinc-700 hover:text-white"
          >
            <FaGithub className="text-sm" />
          </Link>

          <Link
            href="https://www.linkedin.com/in/ayyappanmj"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="focus-ring rounded-lg border border-zinc-800 bg-[#121215] p-2.5 text-xs text-zinc-400 transition hover:border-zinc-700 hover:text-white"
          >
            <FaLinkedin className="text-sm text-blue-400" />
          </Link>

          <a
            href={`mailto:${profile.email}`}
            aria-label="Send Email"
            className="focus-ring rounded-lg border border-zinc-800 bg-[#121215] p-2.5 text-xs text-zinc-400 transition hover:border-zinc-700 hover:text-white"
          >
            <FaEnvelope className="text-sm" />
          </a>
        </div>

        <div className="text-center sm:text-right font-mono text-xs text-zinc-500">
          <p>Built with Next.js, TypeScript &amp; Tailwind CSS.</p>
          <p className="mt-1">© {currentYear} {profile.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
