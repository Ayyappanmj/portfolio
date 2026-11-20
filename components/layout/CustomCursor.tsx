"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const move = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[110] hidden h-7 w-7 rounded-full border border-zinc-500/50 mix-blend-difference md:block"
      animate={{
        x: position.x - 14,
        y: position.y - 14
      }}
      transition={{ type: "spring", stiffness: 500, damping: 35 }}
    />
  );
}
