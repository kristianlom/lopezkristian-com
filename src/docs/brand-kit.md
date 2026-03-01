# Brand Kit — Kristian Lopez

Internal reference for brand identity. Not published to the site.

## Logo & Monogram

- **Monogram**: "KL" in bold white on violet-600 (#7c3aed) rounded square
- **Source**: `public/favicon.svg`
- **Header**: Typographic logo "Kristian Lopez" in font-sans (Inter), bold

## Tagline

**Software Architect & Staff Engineer**

Used in JSON-LD structured data and meta descriptions.

## Color Palette

### Dark Mode (Default)

| Token           | Value               | Usage                      |
| --------------- | ------------------- | -------------------------- |
| `--color-bg`    | rgb(10, 10, 10)     | Page background            |
| `--color-surface` | rgb(17, 17, 17)   | Cards, elevated surfaces   |
| `--color-text`  | rgb(241, 241, 241)  | Primary text               |
| `--color-muted` | rgb(156, 163, 175)  | Secondary text, captions   |
| `--color-border` | rgba(255,255,255,0.1) | Borders, dividers        |
| `--color-surface-hover` | rgba(255,255,255,0.05) | Hover states      |

### Light Mode

| Token           | Value               | Usage                      |
| --------------- | ------------------- | -------------------------- |
| `--color-bg`    | rgb(249, 249, 249)  | Page background            |
| `--color-surface` | rgb(255, 255, 255) | Cards, elevated surfaces   |
| `--color-text`  | rgb(17, 17, 17)     | Primary text               |
| `--color-muted` | rgb(107, 114, 128)  | Secondary text, captions   |
| `--color-border` | rgba(0,0,0,0.1)    | Borders, dividers          |
| `--color-surface-hover` | rgba(0,0,0,0.05) | Hover states          |

### Accent Colors

| Name      | Hex       | Tailwind     | Usage                         |
| --------- | --------- | ------------ | ----------------------------- |
| Primary   | `#7c3aed` | violet-600   | CTAs, links, active states    |
| Secondary | `#ef4444` | red-500      | Gradient accent, error states |

### Gradient

```css
bg-gradient-to-r from-violet-500 to-red-500
```

Used for decorative text highlights (`.text-gradient` utility).

## WCAG AA Contrast Validation

All color combinations pass WCAG AA requirements:

| Combination                    | Ratio   | Requirement | Status |
| ------------------------------ | ------- | ----------- | ------ |
| Text on bg (dark)              | 17.53:1 | 4.5:1       | PASS   |
| Muted on bg (dark)             | 7.80:1  | 4.5:1       | PASS   |
| Violet-400 on bg (dark)        | 7.27:1  | 4.5:1       | PASS   |
| Violet-400 on surface (dark)   | 6.94:1  | 4.5:1       | PASS   |
| Text on bg (light)             | 17.94:1 | 4.5:1       | PASS   |
| Muted on bg (light)            | 4.59:1  | 4.5:1       | PASS   |
| Violet-600 on bg (light)       | 5.41:1  | 4.5:1       | PASS   |
| White on violet-600 (buttons)  | 5.70:1  | 4.5:1       | PASS   |

Note: red-500 (#ef4444) is only used in gradients and form validation — never as a background for white text.

## Typography

| Role      | Font             | Weight     | Source                            |
| --------- | ---------------- | ---------- | --------------------------------- |
| Sans      | Inter Variable   | 100–900    | `@fontsource-variable/inter`      |
| Mono      | JetBrains Mono   | 400, 700   | `@fontsource/jetbrains-mono`      |

- `font-display: swap` is handled by Fontsource defaults
- Fallbacks: `system-ui, sans-serif` (sans), `Fira Code, monospace` (mono)
- Body line-height: 1.7
- Headings: `font-bold tracking-tight`

## Tone of Communication

- **Professional-technical**: demonstrates deep engineering expertise without being exclusionary
- **Accessible**: avoids unnecessary jargon; when technical terms are needed, they are used precisely
- **Direct**: concise, structured writing; prefers bullet points and clear headings over long paragraphs
- **Confident but humble**: shares opinions backed by experience, acknowledges trade-offs
- **First-person**: writes as "I" — personal, not corporate
- **Bilingual awareness**: primary content in English; Spanish used naturally where appropriate (e.g., name, cultural references)
