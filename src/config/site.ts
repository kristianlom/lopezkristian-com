/**
 * Site configuration
 * Centralizes site URLs and metadata to support different deployment environments
 */

import { DEFAULT_SITE_URL, normalizeSiteUrl } from './url.mjs';

/**
 * Base site URL (production)
 * Override with PUBLIC_SITE_URL environment variable for staging/preview environments
 *
 * Normalized via shared {@link normalizeSiteUrl} helper (also used by astro.config.mjs)
 * so the two can never drift out of sync.
 */
export const SITE_URL = normalizeSiteUrl(import.meta.env.PUBLIC_SITE_URL ?? DEFAULT_SITE_URL);

/**
 * Get the full URL for a given path
 * @param path - Path relative to site root (e.g., '/writing/my-post')
 * @returns Full URL (e.g., 'https://lopezkristian.com/writing/my-post')
 */
export function getFullUrl(path: string): string {
  // Ensure path starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_URL}${normalizedPath}`;
}

/**
 * Site metadata
 */
export const SITE_METADATA = {
  name: 'Kristian López',
  domain: 'lopezkristian.com',
  url: SITE_URL,
} as const;
