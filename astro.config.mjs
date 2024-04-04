import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://get-astro.vercel.app/",
  integrations: [tailwind(), preact()],
  output: "server",
  adapter: vercel()
});