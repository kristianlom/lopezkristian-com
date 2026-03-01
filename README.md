# lopezkristian.com

Personal brand site for Kristian López — Software Architect & Staff Engineer.

## Stack

- [Astro](https://astro.build) (v5) + TypeScript (strict)
- [Tailwind CSS](https://tailwindcss.com) v3 + [@tailwindcss/typography](https://tailwindcss.com/docs/typography-plugin)
- [MDX](https://mdxjs.com) for content with [Shiki](https://shiki.matsu.io) syntax highlighting
- React (islands) for interactive UI
- Content Collections for type-safe blog posts and projects
- Sitemap + RSS feed

## Pages

| Route | Description |
|-------|-------------|
| `/` | Hero, skills, featured projects, latest writing |
| `/about` | Bio, specialties, experience timeline |
| `/projects` | Project case studies |
| `/projects/[slug]` | Individual project detail |
| `/writing` | Blog listing with tag filtering |
| `/writing/[slug]` | Individual blog post with ToC |
| `/resume` | Full résumé page |
| `/contact` | Contact form + social links |
| `/privacy` | Privacy policy |
| `/writing/rss.xml` | RSS feed |

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Lint & Typecheck

```bash
npm run lint
npm run typecheck
```

## Content

- Blog posts: `src/content/writing/*.mdx`
- Projects: `src/content/projects/*.mdx`
- Schema: `src/content/config.ts`

## Deployment

Deploys to GitHub Pages via `.github/workflows/deploy-pages.yml` on push to `main`.
Custom domain: `lopezkristian.com` (configured via `public/CNAME`).
