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
      className="fixed left-0 top-0 z-[100] h-[2px] origin-left bg-[#FAFAFA]"
      style={{ scaleX, width: "100%" }}
    />
  );
}
