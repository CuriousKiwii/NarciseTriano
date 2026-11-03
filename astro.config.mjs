// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// Test deployment on GitHub Pages: https://curiouskiwii.github.io/NarciseTriano/
// When moving to the real domain, set site to "https://narcissetriano.com",
// remove `base`, and add public/CNAME containing narcissetriano.com.
export default defineConfig({
  site: "https://curiouskiwii.github.io",
  base: "/NarciseTriano",
  vite: {
    plugins: [tailwindcss()],
  },
});
