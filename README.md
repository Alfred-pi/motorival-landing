# MotoRival — Landing (v3 Astro)

Static, SEO-tuned, multilingual landing page for MotoRival. Built with **Astro 5 + Tailwind 4**, deployed to **GitHub Pages** on its own dedicated repo / domain — kept separate from the `app/` (Despia/Firebase) so the canonical brand domain is index-friendly without leaking the in-app PWA assets.

## Links

- **Landing**: https://motorival.ch
- **App (PROD)**: https://motorival.app
- **App Store**: https://apps.apple.com/app/motorival/id6762416437
  - FR storefront: https://apps.apple.com/fr/app/motorival/id6762416437
  - US storefront: https://apps.apple.com/us/app/motorival/id6762416437

CTAs on this site use locale-aware storefront paths (`/fr/`, `/us/`, `/es/`, `/de/`, `/it/`, `/pt/`) — see `src/lib/appStore.ts`. The path-based locale is required because link-preview scrapers (WhatsApp, Telegram) ignore the `?l=` query param.

## Stack

- Astro 5 (static output)
- Tailwind 4 (`@tailwindcss/vite`)
- `@astrojs/sitemap`
- Zero JS framework — `is:inline` scripts for theme + reveal observer
- 6 locales: `fr` (default, served at `/`), `en`, `es`, `de`, `it`, `pt` (BR)
- Dark + light theme, system-aware, persisted in `localStorage` under `motorival.theme`

## Scripts

```bash
npm install
npm run dev       # http://0.0.0.0:4090
npm run build     # outputs ./dist
npm run preview   # preview the built site
```

## Layout

```
landing/
├── astro.config.mjs        # site URL, i18n, sitemap config
├── src/
│   ├── i18n/{ui.ts,utils.ts}
│   ├── styles/global.css
│   ├── layouts/BaseLayout.astro
│   ├── components/         # Logo, Nav, Footer, ThemeToggle, LangSwitcher, AppStoreBadge, DeviceMockup
│   ├── sections/           # Hero, Loop, Showcase, FAQ, FinalCTA
│   └── pages/
│       ├── index.astro     # FR (root, default locale)
│       ├── en/index.astro  # EN
│       ├── es/index.astro
│       ├── de/index.astro
│       ├── it/index.astro
│       └── pt/index.astro
├── public/
│   ├── logo-{dark,light}.svg
│   ├── favicon.svg
│   ├── apple-touch-icon.png
│   ├── og-image.png
│   ├── robots.txt
│   └── screens/            # iPhone screenshots
└── .github/workflows/deploy.yml   # GH Pages CI
```

## SEO checklist

- Per-locale `<title>` + `<meta description>` (in `i18n/ui.ts`)
- `<link rel="canonical">` per page
- `<link rel="alternate" hreflang>` for all 6 locales + `x-default`
- Open Graph + Twitter cards
- JSON-LD `MobileApplication`
- Auto-generated `sitemap-index.xml` (via `@astrojs/sitemap`)
- `robots.txt` with sitemap pointer
- Inline `theme-color` for both color schemes
- Skip-to-content link for a11y

## TODOs before going live

1. **Pick the landing domain** and replace `SITE_URL` in `astro.config.mjs` and `public/robots.txt`.
2. Create a dedicated GitHub repo (e.g. `Alfred-pi/motorival-landing`) and push this folder as its root.
3. Configure GitHub Pages in repo settings → "Build and deployment" → Source: "GitHub Actions".
4. Add a `CNAME` file in `public/` once the domain is set.
5. Generate a real OG image (`public/og-image.png` is currently the app icon).
6. Update `legal-{privacy,terms}-*.md` if landing should host them (currently in `app/public/`).
