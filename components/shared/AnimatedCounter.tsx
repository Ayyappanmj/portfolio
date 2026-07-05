"use client";
import { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
type AnimatedCounterProps = {
  value: number;
  suffix?: string;
};
export default function AnimatedCounter({
  value,
  suffix = ""
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!isInView) return;
    let current = 0;
    const duration = 1200;
    const stepTime = 20;
    const increment = value / (duration / stepTime);
    const timer = window.setInterval(() => {
      current += increment;
      if (current >= value) {
        current = value;
        window.clearInterval(timer);
      }
      setCount(Math.floor(current));
    }, stepTime);
    return () => window.clearInterval(timer);
  }, [isInView, value]);
  return (
    <motion.span ref={ref}>
      {count}
      {suffix}
    </motion.span>
  );
}