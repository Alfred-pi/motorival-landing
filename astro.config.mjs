// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

// TODO: replace with the chosen landing domain (e.g. https://motorival.cc)
// before going live — required for sitemap + canonical URLs.
const SITE_URL = 'https://motorival.cc';

const LOCALES = ['fr', 'en', 'es', 'de', 'it', 'pt'];

export default defineConfig({
  site: SITE_URL,
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
