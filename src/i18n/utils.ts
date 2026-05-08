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

/** Build a path for a given locale. Default locale lives at root (no prefix). */
export function localePath(locale: Locale, path = '/'): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (locale === DEFAULT_LOCALE) return clean;
  // Avoid double slashes
  return `/${locale}${clean === '/' ? '' : clean}`;
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
