import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        point: '#3b82f6',
      },
      boxShadow: {
        card: '0 6px 24px rgba(15, 23, 42, 0.06)',
      },
    },
  },
  plugins: [],
} satisfies Config;
