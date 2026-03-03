/**
 * Site configuration
 * Centralizes site URLs and metadata to support different deployment environments
 */

/**
 * Base site URL (production)
 * Override with PUBLIC_SITE_URL environment variable for staging/preview environments
 */
export const SITE_URL = import.meta.env.PUBLIC_SITE_URL ?? 'https://lopezkristian.com';

/**
 * Get the full URL for a given path
 * @param path - Path relative to site root (e.g., '/writing/my-post')
 * @returns Full URL (e.g., 'https://lopezkristian.com/writing/my-post')
 */
export function getFullUrl(path: string): string {
  // Ensure path starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  // Remove trailing slash from SITE_URL if present
  const baseUrl = SITE_URL.endsWith('/') ? SITE_URL.slice(0, -1) : SITE_URL;
  return `${baseUrl}${normalizedPath}`;
}

/**
 * Site metadata
 */
export const SITE_METADATA = {
  name: 'Kristian López',
  domain: 'lopezkristian.com',
  url: SITE_URL,
} as const;
