// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// `site` must be the final production URL. The sitemap, canonical tags, and
// Open Graph tags are all built from it.
export default defineConfig({
  site: 'https://marisoldelbrey.com',
  integrations: [sitemap()],
});
