"use client";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";
export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!visible) return null;
  return (
    <button
      type="button"
      aria-label="Scroll back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="focus-ring fixed bottom-6 right-6 z-50 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 p-4 text-white shadow-glow transition hover:scale-110"
    >
      <FaArrowUp />
    </button>
  );
}