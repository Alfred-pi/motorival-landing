import { getCollection, getEntry } from 'astro:content';
import type { Locale } from '../i18n/utils';

export type LegalSlug = 'privacy' | 'terms' | 'support';

const FALLBACK_LOCALE: Locale = 'en';

/** Convention dans `src/content/legal/`:
 *   privacy/terms → `legal-{slug}-{locale}.md`
 *   support       → `support-{locale}.md`
 */
function fileId(slug: LegalSlug, locale: Locale): string {
  return slug === 'support' ? `support-${locale}` : `legal-${slug}-${locale}`;
}

/** Try the requested locale; fall back to English if missing. */
export async function getLegalEntry(slug: LegalSlug, locale: Locale) {
  const primary = await getEntry('legal', fileId(slug, locale));
  if (primary) return primary;
  const fallback = await getEntry('legal', fileId(slug, FALLBACK_LOCALE));
  if (!fallback) {
    throw new Error(`Missing legal entry for ${slug}/${locale} (fallback ${FALLBACK_LOCALE} also missing)`);
  }
  return fallback;
}

/** Used by build-time helpers if we ever want to enumerate. */
export async function listAllLegal() {
  return getCollection('legal');
}
