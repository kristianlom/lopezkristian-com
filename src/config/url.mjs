/**
 * Shared URL normalization utility
 *
 * Plain JS module (.mjs) so it can be imported from both:
 * - astro.config.mjs  (Node / Astro config context)
 * - src/config/site.ts (Vite / runtime context)
 *
 * If you change the normalization rules here, both consumers
 * pick up the change automatically.
 */

/** Default production site URL */
export const DEFAULT_SITE_URL = 'https://lopezkristian.com';

/**
 * Normalize a site URL: trim whitespace and strip trailing slash.
 * @param {string} url
 * @returns {string}
 */
export function normalizeSiteUrl(url) {
  return url.trim().replace(/\/$/, '');
}
