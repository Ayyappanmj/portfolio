export default function Footer() {
  return (
    <footer className="glass mt-20 rounded-3xl p-8 text-center text-sm text-muted">
      <p>Built with Next.js, TypeScript, and Tailwind CSS.</p>
      <p className="mt-2">© {new Date().getFullYear()} AYYAPPAN M.</p>
    </footer>
  );
}
