// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://sprightly-eclair-6f0be4.netlify.app/",
  integrations: [preact()]
});