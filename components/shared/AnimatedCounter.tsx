"use client";
import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

type AnimatedCounterProps = {
  value: number;
  suffix?: string;
};

export default function AnimatedCounter({
  value,
  suffix = "",
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true });
  // Start with real value on server/initial mount to prevent "0+" flash
  const [count, setCount] = useState(value);

  useEffect(() => {
    if (!isInView) return;
    let current = 0;
    const duration = 1000;
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
