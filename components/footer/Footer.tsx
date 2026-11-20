export default function Footer() {
  return (
    <footer className="mt-20 border-t border-[#27272A] bg-[#09090B] py-10 text-center font-mono text-xs text-zinc-500">
      <p>Custom-engineered with Next.js, TypeScript, and Tailwind CSS.</p>
      <p className="mt-2">© {new Date().getFullYear()} AYYAPPAN M. All rights reserved.</p>
    </footer>
  );
}
