# Design System — lopezkristian.com

Internal reference for component inventory and design tokens. See also: `brand-kit.md`.

## Design Tokens

Tokens are defined in two places:

- **CSS custom properties**: `src/styles/global.css` — theme-aware colors (swap via `.light` class)
- **Tailwind config**: `tailwind.config.mjs` — maps CSS vars to utility classes + fonts, shadows, radii

### Color Tokens

| Utility Class     | CSS Variable          | Dark              | Light             |
| ----------------- | --------------------- | ----------------- | ----------------- |
| `bg-bg`           | `--color-bg`          | #0a0a0a           | #f9f9f9           |
| `bg-surface`      | `--color-surface`     | #111111           | #ffffff           |
| `text-text-primary` | `--color-text`      | #f1f1f1           | #111111           |
| `text-muted`      | `--color-muted`       | gray-400          | gray-500          |
| `border-border`   | `--color-border`      | rgba(255,255,255,0.1) | rgba(0,0,0,0.1) |
| `bg-surface-hover`| `--color-surface-hover`| rgba(255,255,255,0.05)| rgba(0,0,0,0.05)|

### Accent Colors (Static)

| Utility                | Hex       | Usage                   |
| ---------------------- | --------- | ----------------------- |
| `bg-accent-primary`    | #7c3aed   | Buttons, active links   |
| `bg-accent-secondary`  | #ef4444   | Gradient, errors        |
| `bg-violet-600`        | #7c3aed   | Primary CTA background  |
| `text-violet-400`      | #a78bfa   | Link/hover text (dark)  |
| `text-violet-600`      | #7c3aed   | Link text (light)       |

### Shadows

| Utility           | Value                              | Usage          |
| ----------------- | ---------------------------------- | -------------- |
| `shadow-accent-sm`| 0 2px 8px rgba(124,58,237,0.2)     | Default CTA    |
| `shadow-accent-md`| 0 4px 16px rgba(124,58,237,0.3)    | CTA hover      |

### Spacing

Standard Tailwind 4px scale. Key recurring values:

- Section padding: `py-20` (80px)
- Container: `max-w-4xl mx-auto px-6`
- Card padding: `p-6`
- Component gaps: `gap-6` (cards), `gap-2` (tags)

### Border Radius

- Cards: `rounded-xl` (12px) / `rounded-card`
- Tags: `rounded-full`
- Buttons: `rounded-lg` (8px)
- Favicon: `rx="6"`

---

## Component Inventory

### Layout Components (`src/components/layout/`)

#### `Header.astro`
Sticky site header with navigation, theme toggle, and mobile menu.
- Props: none
- Features: active link highlighting, localStorage theme persistence, mobile hamburger

#### `Footer.astro`
Site footer with copyright, social links, and legal.
- Props: none

#### `Section.astro`
Reusable section wrapper with consistent padding and max-width.
- Props: `class?`

### UI Components (`src/components/ui/`)

#### `CTA.astro`
Call-to-action link button.
- Props: `href`, `variant?: 'primary' | 'secondary'`, `external?`, `class?`
- **Primary**: violet-600 bg, white text, shadow
- **Secondary**: transparent bg, border, text-primary

#### `Card.astro`
Content card for blog posts and projects.
- Props: `title`, `description`, `href`, `tags?`, `date?`, `variant?: 'post' | 'project'`
- Features: hover border/shadow animation, full-card click area, tag display

#### `Tag.astro`
Inline tag/badge.
- Props: `label`, `href?`, `active?`
- **Active**: violet-600 bg, white text
- **Default**: surface-hover bg, muted text, hover to violet

#### `ReadingTime.astro`
Displays estimated reading time for blog posts.

#### `TableOfContents.astro`
Auto-generated table of contents from headings.

### SEO Components (`src/components/seo/`)

#### `SEO.astro`
Meta tags for OpenGraph, Twitter Cards.
- Props: `title`, `description`, `canonical?`, `image?`, `type?`, `publishedTime?`, `tags?`

#### `JsonLd.astro`
Schema.org structured data.
- Props: `type: 'Person' | 'Article' | 'WebSite'`, plus type-specific props

### Layouts (`src/layouts/`)

#### `BaseLayout.astro`
Root HTML shell — `<head>` (SEO, fonts, favicons), `<Header>`, `<main>`, `<Footer>`.

#### `PostLayout.astro`
Blog post wrapper with table of contents, tags, reading time.

#### `ProjectLayout.astro`
Project case study wrapper.

---

## CSS Utilities

| Class           | Definition                                              |
| --------------- | ------------------------------------------------------- |
| `.text-gradient` | `bg-gradient-to-r from-violet-500 to-red-500 bg-clip-text text-transparent` |

---

## Visual Reference

See `/style-guide` page for a live rendering of all tokens and components.
