// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

// Landing lives on its own URL — NOT motorival.app (that's the mobile app).
// Currently hosted on GitHub Pages subpath. Will move to a dedicated domain later.
const SITE_URL = 'https://alfred-pi.github.io';
const BASE_PATH = '/motorival-landing/';

const LOCALES = ['fr', 'en', 'es', 'de', 'it', 'pt'];

export default defineConfig({
  site: SITE_URL,
  base: BASE_PATH,
  output: 'static',

  i18n: {
    defaultLocale: 'fr',
    locales: LOCALES,
    routing: {
      prefixDefaultLocale: false,
    },
  },

  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'fr',
        locales: {
          fr: 'fr-FR',
          en: 'en-US',
          es: 'es-ES',
          de: 'de-DE',
          it: 'it-IT',
          pt: 'pt-BR',
        },
      },
    }),
    react(),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
