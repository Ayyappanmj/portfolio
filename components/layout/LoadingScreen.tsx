"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 700);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading ? (
        <motion.div
          className="fixed inset-0 z-[120] flex flex-col items-center justify-center gap-4 bg-[#09090B]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.35 } }}
        >
          <motion.div
            className="h-10 w-10 rounded-full border-2 border-zinc-800 border-t-zinc-200"
            animate={{ rotate: 360 }}
            transition={{ duration: 0.7, repeat: Infinity, ease: "linear" }}
            aria-label="Loading portfolio"
          />
          <p className="font-mono text-xs uppercase tracking-widest text-zinc-500">
            SYSTEM_INIT
          </p>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
