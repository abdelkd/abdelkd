// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [],

  markdown: {
    shikiConfig: {
      theme: 'poimandres',
      defaultColor: false,
      wrap: true,
    }
  },
});
