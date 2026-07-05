"use client";
import { useEffect, useState } from "react";
type TypingTextProps = {
  words: string[];
};
export default function TypingText({ words }: TypingTextProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    const currentWord = words[wordIndex];
    const timeout = window.setTimeout(
      () => {
        if (!deleting) {
          setDisplayed(currentWord.slice(0, displayed.length + 1));
          if (displayed === currentWord) {
            window.setTimeout(() => setDeleting(true), 900);
          }
        } else {
          setDisplayed(currentWord.slice(0, displayed.length - 1));
          if (displayed.length === 0) {
            setDeleting(false);
            setWordIndex((index) => (index + 1) % words.length);
          }
        }
      },
      deleting ? 45 : 85
    );
    return () => window.clearTimeout(timeout);
  }, [deleting, displayed, wordIndex, words]);
  return (
    <span className="gradient-text">
      {displayed}
      <span className="text-cyan-300">|</span>
    </span>
  );
}