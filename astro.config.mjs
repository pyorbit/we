import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: process.env.SITE_URL || "https://pyorbit.github.io",
  base: process.env.SITE_BASE || "/we/",
  output: "static",
  vite: { plugins: [tailwindcss()] },
});
