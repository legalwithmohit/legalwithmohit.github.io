import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// GitHub Pages user site URL for this repository.
const SITE_URL = 'https://legalwithmohit.github.io';
const BASE_PATH = '/';

export default defineConfig({
  site: SITE_URL,
  base: BASE_PATH,
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap(),
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-light',
      wrap: true,
    },
  },
  trailingSlash: 'ignore',
});
