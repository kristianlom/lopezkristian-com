import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { DEFAULT_SITE_URL, normalizeSiteUrl } from './src/config/url.mjs';

const siteUrl = normalizeSiteUrl(process.env.PUBLIC_SITE_URL ?? DEFAULT_SITE_URL);

export default defineConfig({
  site: siteUrl,
  integrations: [
    tailwind({ applyBaseStyles: false }),
    react(),
    mdx(),
    sitemap({
      filter: (page) => !page.includes('style-guide'),
    }),
  ],
  image: {
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
  markdown: {
    shikiConfig: {
      theme: 'one-dark-pro',
      langs: [],
      wrap: true,
    },
  },
});
