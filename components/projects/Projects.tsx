"use client";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";
import SectionHeading from "@/components/shared/SectionHeading";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { projects } from "@/data/portfolio";
export default function Projects() {
  const projectList = Array.isArray(projects) ? projects.filter((project) => project?.title) : [];
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(projectList.map((project) => project.category)))],
    [projectList]
  );
  const [active, setActive] = useState("All");
  const formatUrl = (url?: string) => {
    if (!url || url === "#") return null;
    return url.startsWith("http://") || url.startsWith("https://") ? url : `https://${url}`;
  };
  const filteredProjects =
    active === "All"
      ? projectList
      : projectList.filter((project) => project.category === active);
  return (
    <SectionWrapper id="projects">
      <SectionHeading
        eyebrow="Projects"
        title="Selected work built for speed, scale, and beauty."
        description="A curated collection of web apps, AI products, mobile applications, and cloud-backed platforms."
      />
      <div className="mb-10 flex flex-wrap justify-center gap-3">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category)}
            className={`focus-ring rounded-full border px-5 py-2 text-sm font-semibold transition ${
              active === category
                ? "border-cyan-400 bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-500/20"
                : "border-white/15 bg-white/5 text-slate-200 hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-300"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <motion.div layout className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.article
              layout
              key={project.title}
              className="glass group overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 shadow-2xl shadow-black/20"
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.35 }}
            >
              <div className="relative h-56 overflow-hidden bg-slate-800/60">
                <Image
                  src={project.image || "/projects/project-1.jpg"}
                  alt={`${project.title} project preview`}
                  fill
                  sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-110"
                  loading="lazy"
                  onError={(event) => {
                    event.currentTarget.src = "/projects/project-1.jpg";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />
              </div>
              <div className="p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">{project.category}</p>
                <h3 className="mt-3 font-poppins text-2xl font-bold text-white">{project.title}</h3>
                <p className="mt-4 leading-7 text-slate-300">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-200"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href={formatUrl(project.github) || "#"}
                    target="_blank"
                    className="focus-ring inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-white/10 bg-slate-800/70 px-4 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-300"
                  >
                    <FaGithub /> GitHub
                  </Link>
                  <Link
                    href={formatUrl(project.demo) || "#"}
                    target="_blank"
                    className="focus-ring inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-cyan-400 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                  >
                    <FaArrowUpRightFromSquare /> Live Demo
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </SectionWrapper>
  );
}
