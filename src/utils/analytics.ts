/**
 * Lightweight wrapper around Cloudflare Zaraz event tracking.
 *
 * - Checks for `window.zaraz` before calling (graceful no-op in dev/localhost).
 * - Auto-appends `page` (current pathname) to every event.
 * - Logs to console in development for debugging.
 *
 * @example
 * import { track } from '@utils/analytics';
 * track('cta-click', { label: 'Get in touch', destination: '/contact' });
 */

interface ZarazInstance {
  track: (eventName: string, properties?: Record<string, string>) => void;
}

declare global {
  interface Window {
    zaraz?: ZarazInstance;
  }
}

export function track(eventName: string, properties: Record<string, string> = {}): void {
  const enriched = {
    ...properties,
    page: window.location.pathname,
  };

  if (window.zaraz) {
    window.zaraz.track(eventName, enriched);
  }

  if (import.meta.env.DEV) {
    console.debug('[analytics]', eventName, enriched);
  }
}
