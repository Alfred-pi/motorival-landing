import { ui, SUPPORTED_LOCALES, DEFAULT_LOCALE, type Locale } from './ui';

export { SUPPORTED_LOCALES, DEFAULT_LOCALE };
export type { Locale };

export function isLocale(value: string | undefined): value is Locale {
  return !!value && (SUPPORTED_LOCALES as readonly string[]).includes(value);
}

/** Resolve the locale from an Astro URL pathname, e.g. "/en/", "/es/foo". */
export function localeFromUrl(url: URL): Locale {
  const segment = url.pathname.split('/').filter(Boolean)[0];
  return isLocale(segment) ? segment : DEFAULT_LOCALE;
}

/** Trim trailing slash from Astro's BASE_URL (e.g. "/motorival-landing/" → "/motorival-landing"). */
const BASE = (import.meta.env.BASE_URL ?? '/').replace(/\/$/, '');

/** Prefix a path with the configured Astro base (no-op when base is "/"). */
export function withBase(path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${BASE}${clean}`;
}

/** Build a path for a given locale. Default locale lives at root (no prefix). */
export function localePath(locale: Locale, path = '/'): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  const localised = locale === DEFAULT_LOCALE
    ? clean
    : `/${locale}${clean === '/' ? '' : clean}`;
  return `${BASE}${localised}`;
}

/** Get the dictionary for a locale. */
export function t(locale: Locale) {
  return ui[locale];
}

/**
 * Compute alternates for hreflang tags. Returns a map locale → absolute URL
 * (caller passes the site origin).
 */
export function alternates(origin: string, currentPath = '/') {
  const stripped = stripLocalePrefix(currentPath);
  return SUPPORTED_LOCALES.map((loc) => ({
    locale: loc,
    href: `${origin}${localePath(loc, stripped)}`,
  }));
}

function stripLocalePrefix(path: string): string {
  const parts = path.split('/').filter(Boolean);
  if (parts.length && isLocale(parts[0])) {
    return '/' + parts.slice(1).join('/');
  }
  return path || '/';
}
