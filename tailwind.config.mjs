/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: { dark: '#0a0a0a', light: '#f9f9f9' },
        surface: { dark: '#111111', light: '#ffffff' },
        accent: {
          primary: '#7c3aed',
          secondary: '#ef4444',
        },
        'text-primary': { dark: '#f1f1f1', light: '#111111' },
        muted: '#9ca3af',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      lineHeight: {
        body: '1.7',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
