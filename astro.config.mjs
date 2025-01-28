import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import alpinejs from "@astrojs/alpinejs";
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.monsefrachid.com', 
  integrations: [
    tailwind(), 
    alpinejs(), sitemap({
      entryLimit: 10000, // Ensures only one sitemap file is generated
    })
  ]
});