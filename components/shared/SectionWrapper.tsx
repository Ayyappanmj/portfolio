"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
type SectionWrapperProps = {
  id: string;
  children: React.ReactNode;
  className?: string;
};
export default function SectionWrapper({
  id,
  children,
  className
}: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      className={cn("section-padding relative scroll-mt-20", className)}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-7xl">{children}</div>
    </motion.section>
  );
}