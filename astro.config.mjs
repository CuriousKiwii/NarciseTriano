// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// Live on GitHub Pages at the custom domain (see public/CNAME).
// For a test build under a subfolder, add `base: "/NarciseTriano"` and set site
// to "https://curiouskiwii.github.io".
export default defineConfig({
  site: "https://narcissetriano.com",
  vite: {
    plugins: [tailwindcss()],
  },
});
