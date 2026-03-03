/**
 * Global event delegation for analytics tracking.
 *
 * Any clickable element with `data-track-event` will be tracked automatically.
 * Additional `data-track-*` attributes become event properties.
 *
 * Convention:
 *   data-track-event="<event-name>"   → maps to zaraz.track() eventName (required)
 *   data-track-label="<text>"         → human-readable label (optional)
 *   data-track-destination="<url>"    → auto-captured from href for <a> elements
 *
 * @example
 * <a href="/contact" data-track-event="cta-click" data-track-label="Get in touch">
 *   Get in touch →
 * </a>
 */
import { track } from '@utils/analytics';

document.addEventListener('click', (event: MouseEvent) => {
  const target = (event.target as HTMLElement | null)?.closest<HTMLElement>('[data-track-event]');
  if (!target) return;

  const eventName = target.dataset.trackEvent;
  if (!eventName) return;

  const properties: Record<string, string> = {};

  for (const [key, value] of Object.entries(target.dataset)) {
    if (key.startsWith('track') && key !== 'trackEvent' && value) {
      const propName = key.charAt(5).toLowerCase() + key.slice(6);
      properties[propName] = value;
    }
  }

  if (target instanceof HTMLAnchorElement && target.href && !properties.destination) {
    properties.destination = target.href;
  }

  track(eventName, properties);
});
