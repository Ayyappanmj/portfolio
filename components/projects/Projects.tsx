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
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(projects.map((project) => project.category)))],
    []
  );
  const [active, setActive] = useState("All");
  const filteredProjects =
    active === "All"
      ? projects
      : projects.filter((project) => project.category === active);
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
                ? "border-cyan-400 bg-cyan-400 text-slate-950"
                : "border-white/10 hover:border-cyan-400 hover:text-cyan-400"
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
              className="glass group overflow-hidden rounded-3xl"
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.35 }}
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={project.image}
                  alt={`${project.title} project preview`}
                  fill
                  sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent" />
              </div>
              <div className="p-6">
                <p className="text-sm font-semibold text-cyan-400">{project.category}</p>
                <h3 className="mt-2 font-poppins text-2xl font-bold">{project.title}</h3>
                <p className="mt-4 leading-7 text-muted">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/10 px-3 py-1 text-xs text-muted"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex gap-3">
                  <Link
                    href={project.github}
                    target="_blank"
                    className="focus-ring inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-white/10 px-4 py-3 text-sm font-semibold transition hover:border-cyan-400 hover:text-cyan-400"
                  >
                    <FaGithub /> GitHub
                  </Link>
                  <Link
                    href={project.demo}
                    target="_blank"
                    className="focus-ring inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-white text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                  >
                    <FaArrowUpRightFromSquare /> Demo
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