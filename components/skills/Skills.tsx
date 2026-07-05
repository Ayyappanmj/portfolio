"use client";
import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { skillGroups } from "@/data/portfolio";
export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <SectionHeading
        eyebrow="Skills"
        title="A modern engineering toolkit."
        description="Technologies grouped by real-world product development needs, from frontend polish to backend systems, AI integrations, and cloud deployment."
      />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {skillGroups.map((group) => {
          const Icon = group.icon;
          return (
            <motion.article
              key={group.category}
              className="glass rounded-3xl p-6 transition hover:-translate-y-2 hover:shadow-glow"
              whileHover={{ scale: 1.02 }}
            >
              <div className="mb-6 flex items-center gap-4">
                <div className="rounded-2xl bg-cyan-400/10 p-4 text-2xl text-cyan-400">
                  <Icon />
                </div>
                <h3 className="font-poppins text-xl font-bold">{group.category}</h3>
              </div>
              <div className="space-y-5">
                {group.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="mb-2 flex justify-between text-sm">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-cyan-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-white/10">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.article>
          );
        })}
      </div>
    </SectionWrapper>
  );
}