const BASE = import.meta.env.BASE_URL;

/** Prefix a public asset path with Astro's BASE_URL. Accepts "/foo" or "foo". */
export function asset(path: string): string {
  const clean = path.startsWith('/') ? path.slice(1) : path;
  return `${BASE}${clean}`;
}
