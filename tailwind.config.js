/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'JetBrains Mono', 'monospace'],
        poppins: ['var(--font-inter)', 'Inter', 'sans-serif'],
      },
      colors: {
        background: '#09090B',
        surface: '#121215',
        'surface-border': '#27272A',
        'surface-border-hover': '#3F3F46',
      },
    },
  },
  plugins: [],
};
