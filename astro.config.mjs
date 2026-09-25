// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';
import markdoc from '@astrojs/markdoc';
import vercel from '@astrojs/vercel';

import sitemap from '@astrojs/sitemap';

export default defineConfig({ 
  
  // <-- Ton domaine final ici
  site: 'https://offthebeatentracks.fr',
  output: 'static',
  adapter: vercel(),
  integrations: [react(), keystatic(), markdoc(), sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});


