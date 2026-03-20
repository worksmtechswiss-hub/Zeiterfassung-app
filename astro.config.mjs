import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://zeiterfassung-app.ch',
  trailingSlash: 'always',
  integrations: [
    tailwind(),
    sitemap(),
  ],
});
