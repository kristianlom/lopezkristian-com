/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],

  // Theme toggle via .light class on <html>; default is dark
  darkMode: 'class',

  theme: {
    extend: {
      /*────────────────────────────────────────────────────
       * Colors — semantic tokens mapped to CSS custom
       * properties defined in src/styles/global.css.
       * Dark/light values swap via the .light class.
       *───────────────────────────────────────────────────*/
      colors: {
        // Page background — dark: #0a0a0a, light: #f9f9f9
        bg: 'rgb(var(--color-bg) / <alpha-value>)',
        // Card / elevated surface — dark: #111111, light: #ffffff
        surface: 'rgb(var(--color-surface) / <alpha-value>)',
        // Primary text — dark: #f1f1f1, light: #111111
        'text-primary': 'rgb(var(--color-text) / <alpha-value>)',
        // Secondary / muted text — dark: gray-400, light: gray-500
        muted: 'rgb(var(--color-muted) / <alpha-value>)',
        // Borders & dividers
        border: 'var(--color-border)',
        // Subtle hover background
        'surface-hover': 'var(--color-surface-hover)',
        // Brand accent colors
        accent: {
          primary: '#7c3aed', // violet-600 — CTAs, links, active states
          secondary: '#ef4444', // red-500 — gradient accent, error states
        },
      },

      /*────────────────────────────────────────────────────
       * Typography — Inter (variable) for body,
       * JetBrains Mono for code. Loaded via Fontsource.
       *───────────────────────────────────────────────────*/
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },

      lineHeight: {
        body: '1.7', // Used on <body> for comfortable reading
      },

      /*────────────────────────────────────────────────────
       * Shadows — used for CTA buttons and card hover.
       *───────────────────────────────────────────────────*/
      boxShadow: {
        'accent-sm': '0 2px 8px rgba(124, 58, 237, 0.2)',
        'accent-md': '0 4px 16px rgba(124, 58, 237, 0.3)',
      },

      /*────────────────────────────────────────────────────
       * Border radius — component-level defaults.
       *───────────────────────────────────────────────────*/
      borderRadius: {
        card: '0.75rem', // 12px — cards
      },
    },
  },

  plugins: [require('@tailwindcss/typography')],
};
