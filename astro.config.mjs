// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

// Landing lives on its own URL — NOT motorival.app (that's the mobile app).
// Hosted on GitHub Pages with the custom domain motorival.ch (Infomaniak DNS).
const SITE_URL = 'https://motorival.ch';

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
