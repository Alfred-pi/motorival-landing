import type { Locale } from '../i18n/ui';

export const APP_STORE_ID = '6762416437';
export const APP_STORE_SLUG = 'motorival';

const STOREFRONT_BY_LOCALE: Record<Locale, string> = {
  fr: 'fr',
  en: 'us',
  es: 'es',
  de: 'de',
  it: 'it',
  pt: 'pt',
};

export function appStoreUrl(locale: Locale): string {
  const storefront = STOREFRONT_BY_LOCALE[locale] ?? 'us';
  return `https://apps.apple.com/${storefront}/app/${APP_STORE_SLUG}/id${APP_STORE_ID}`;
}
