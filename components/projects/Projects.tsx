"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";
import SectionHeading from "@/components/shared/SectionHeading";
import SectionWrapper from "@/components/shared/SectionWrapper";
import {
  projects,
  projectCategories,
  type ProjectCategory,
  type Project,
} from "@/data/projects";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const featuredProjects = useMemo(
    () => filteredProjects.filter((p) => p.featured),
    [filteredProjects]
  );

  const compactProjects = useMemo(
    () => filteredProjects.filter((p) => !p.featured),
    [filteredProjects]
  );

  return (
    <SectionWrapper id="projects">
      <SectionHeading
        eyebrow="Projects"
        title="Engineered software & systems."
        description="A selection of autonomous AI workflows, distributed transaction engines, data pipelines, and infrastructure tools."
      />

      {/* Accessible Filter Tabs */}
      <div
        role="tablist"
        aria-label="Filter projects by category"
        className="mb-12 flex flex-wrap justify-center gap-2"
      >
        {projectCategories.map((cat) => {
          const isSelected = activeCategory === cat;
          return (
            <button
              key={cat}
              role="tab"
              aria-selected={isSelected}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`focus-ring rounded-lg border px-4 py-2 font-mono text-xs transition duration-150 ${
                isSelected
                  ? "border-zinc-200 bg-[#FAFAFA] text-[#09090B] font-semibold"
                  : "border-zinc-800 bg-[#121215] text-zinc-400 hover:border-zinc-700 hover:text-zinc-200"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* TIER 1: FEATURED PROJECTS */}
      {featuredProjects.length > 0 && (
        <div className="mb-14">
          <div className="mb-6 flex items-center justify-between">
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-400 font-semibold">
              Featured Systems
            </h3>
            <span className="font-mono text-xs text-zinc-500">
              {featuredProjects.length} {featuredProjects.length === 1 ? "project" : "projects"}
            </span>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <AnimatePresence mode="popLayout">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} isFeatured />
              ))}
            </AnimatePresence>
          </div>
        </div>
      )}

      {/* TIER 2: COMPACT & ADDITIONAL PROJECTS */}
      {compactProjects.length > 0 && (
        <div>
          <div className="mb-6 flex items-center justify-between pt-6 border-t border-zinc-800/80">
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-400 font-semibold">
              Additional Work &amp; Applied Projects
            </h3>
            <span className="font-mono text-xs text-zinc-500">
              {compactProjects.length} {compactProjects.length === 1 ? "project" : "projects"}
            </span>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {compactProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </AnimatePresence>
          </div>
        </div>
      )}
    </SectionWrapper>
  );
}

function ProjectCard({
  project,
  isFeatured = false,
}: {
  project: Project;
  isFeatured?: boolean;
}) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.25 }}
      className={`group flex flex-col justify-between overflow-hidden rounded-2xl border border-[#27272A] bg-[#121215] transition duration-200 hover:border-[#3F3F46] ${
        isFeatured ? "p-6 sm:p-7 shadow-xl" : "p-5 sm:p-6"
      }`}
    >
      <div>
        {/* Preview Image / Architecture Card */}
        <div
          className={`relative w-full overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 mb-5 ${
            isFeatured ? "h-52 sm:h-60" : "h-44 sm:h-48"
          }`}
        >
          <Image
            src={project.image}
            alt={`${project.title} technical architecture preview`}
            fill
            sizes={
              isFeatured
                ? "(min-width: 1024px) 50vw, 100vw"
                : "(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            }
            className="object-cover transition duration-500 group-hover:scale-[1.02]"
            loading="lazy"
          />
        </div>

        {/* Category & Badge Header */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-zinc-400">
            {project.category}
          </span>
          {project.additionalWork && (
            <span className="rounded border border-zinc-800 bg-zinc-900/60 px-2 py-0.5 font-mono text-[10px] text-zinc-400">
              Additional work
            </span>
          )}
        </div>

        {/* Hackathon Badge if present */}
        {project.hackathonBadge && (
          <div className="mb-3 inline-flex items-center gap-1.5 rounded-md border border-amber-500/30 bg-amber-500/10 px-2.5 py-1 text-left font-mono text-[11px] text-amber-300">
            <span>★</span>
            <span>{project.hackathonBadge}</span>
          </div>
        )}

        {/* Title & Tagline */}
        <h4
          className={`font-bold tracking-tight text-[#FAFAFA] transition group-hover:text-white ${
            isFeatured ? "text-xl sm:text-2xl" : "text-lg"
          }`}
        >
          {project.title}
        </h4>

        <p className="mt-2 text-xs sm:text-sm leading-relaxed text-zinc-300 font-normal">
          {project.tagline}
        </p>

        {/* Bullets with real metrics (max 3) */}
        <ul className="mt-3.5 space-y-1.5 text-xs text-zinc-400 leading-relaxed">
          {project.bullets.slice(0, 3).map((bullet, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="font-mono text-zinc-500 select-none">&gt;</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer: Tech chips + Strict Buttons */}
      <div className="mt-6 pt-4 border-t border-zinc-800/80">
        {/* Tech Chips (max 6) */}
        <div className="mb-4 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 6).map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-zinc-800/80 bg-zinc-900 px-2.5 py-1 font-mono text-[11px] text-zinc-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons (STRICT RULE 3):
            - DEMO LIST: Live Demo (primary) + GitHub (secondary)
            - All other projects: GitHub button ONLY
        */}
        <div className="flex items-center gap-2.5 pt-1">
          {project.demoUrl && (
            <Link
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex items-center gap-1.5 rounded-lg bg-[#FAFAFA] px-3.5 py-2 font-mono text-xs font-semibold text-[#09090B] transition hover:bg-zinc-200"
            >
              <span>Live Demo</span>
              <FaArrowUpRightFromSquare className="text-[10px]" />
            </Link>
          )}

          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`focus-ring inline-flex items-center gap-1.5 rounded-lg border font-mono text-xs transition ${
                project.demoUrl
                  ? "border-zinc-800 bg-[#121215] px-3.5 py-2 font-medium text-zinc-300 hover:border-zinc-700 hover:bg-zinc-900 hover:text-white"
                  : "border-zinc-800 bg-zinc-900 px-4 py-2 font-medium text-zinc-200 hover:border-zinc-700 hover:bg-zinc-800 hover:text-white"
              }`}
            >
              <FaGithub className="text-xs" />
              <span>GitHub</span>
            </Link>
          )}
        </div>
      </div>
    </motion.article>
  );
}
