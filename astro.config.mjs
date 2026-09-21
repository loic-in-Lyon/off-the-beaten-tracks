// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';

import markdoc from '@astrojs/markdoc';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  integrations: [react(), keystatic(), markdoc()],
  vite: {
    plugins: [tailwindcss()]
  }
});