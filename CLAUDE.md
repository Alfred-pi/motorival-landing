# Landing — motorival.ch

> Repo Astro séparé `Alfred-pi/motorival-landing` (public). Custom domain `motorival.ch` via GH Pages. **Ne PAS confondre avec `motorival.app`** qui est l'app mobile prod (Firebase Hosting).

## Stack

- Astro 5 + Tailwind 4 + React 19 + Framer Motion + GSAP
- 6 locales : fr (default) / en / es / de / it / pt
- Hosting : GitHub Pages + custom domain `motorival.ch` (CNAME, SSL Let's Encrypt actif depuis 2026-05-10)
- CI : `.github/workflows/deploy.yml` (build Astro + deploy Pages on push main)

## Fichiers clés (NE PAS toucher sans précaution)

- `astro.config.mjs` — `site: 'https://motorival.ch'`, base retiré (custom domain, plus de subpath)
- `public/CNAME` — contient `motorival.ch` (contrôle le custom domain)
- `src/content/legal/{privacy,terms,support}-{fr,en,es,de,it,pt}.md` — 18 markdown legal localisés (commit `57b116b`)
- `src/content.config.ts` — collection `legal` typed
- `src/lib/legal.ts` — helper `getLegalEntry()` avec EN fallback
- `src/layouts/LegalLayout.astro` — layout partagé pages legal
- `src/lib/asset.ts` + `src/i18n/utils.ts` (`withBase`, `localePath`) — helpers links/assets

## Local rules

- **Toujours utiliser `asset()` / `withBase()` / `localePath()` pour les paths** — jamais hardcoder `src="/foo.png"` (cassait sur GH Pages subpath précédent, garde l'habitude au cas où on bouge encore)
- **Pages legal sont la source de vérité** légale pour l'app — l'app mobile redirige users vers `motorival.ch/{privacy,terms,support}/`
- **Trailing slash obligatoire** sur `/privacy/`, `/terms/`, `/support/` (Astro génère `/privacy/index.html`, sans `/` = 301 visible reviewer)
- **PR pattern** : feat/fix branches, PR vers main, CI deploy auto sur merge main

## Pattern URL pour redirections depuis app mobile

```ts
const LANDING_BASE = 'https://motorival.ch';

function legalUrl(slug: 'privacy' | 'terms' | 'support', locale: 'fr'|'en'|'es'|'de'|'it'|'pt') {
  // FR = locale default → root, pas de prefix
  const langPrefix = locale === 'fr' ? '' : `/${locale}`;
  return `${LANDING_BASE}${langPrefix}/${slug}/`;
}
```

## Voir aussi

- `README.md` — overview humain landing
- `RESEARCH.md` — research landing initiale (pricing copy, hero, FAQ)
- `../code/CLAUDE.md` — repo code app (différent !)
- `../STATUS.md` Bucket J — status landing
