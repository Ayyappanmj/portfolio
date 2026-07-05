"use client";
import { motion, useScroll, useSpring } from "framer-motion";
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 130,
    damping: 24,
    restDelta: 0.001
  });
  return (
    <motion.div
      className="fixed left-0 top-0 z-[100] h-1 origin-left bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400"
      style={{ scaleX, width: "100%" }}
    />
  );
}