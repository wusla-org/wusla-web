import tailwindcss from "@tailwindcss/vite";
import { studioProjects } from "./content/studio";

export default defineNuxtConfig({
  compatibilityDate: "2026-09-05",
  devtools: { enabled: false },

  modules: ["@nuxt/fonts", "@nuxtjs/sitemap", "@nuxtjs/robots", "@nuxt/eslint"],

  app: {
    head: {
      link: [{ rel: "icon", type: "image/png", href: "/assets/wusla_square.png" }],
      meta: [{ name: "theme-color", content: "#FBFBEA" }],
    },
  },

  // main.css is the Tailwind entry point; wusla.css is the design system.
  css: ["~/assets/css/main.css", "~/assets/css/wusla.css"],

  vite: {
    plugins: [tailwindcss()],
  },

  fonts: {
    defaults: { styles: ["normal"], subsets: ["latin"] },
    families: [
      { name: "Geist", provider: "google", global: true, weights: [300, 400, 500, 600, 700] },
      { name: "Newsreader", provider: "google", global: true, weights: [400, 500], styles: ["normal", "italic"] },
      // Still used by the inner routes until they are ported.
      { name: "Manrope", provider: "google", global: true },
      { name: "IBM Plex Mono", provider: "google", global: true, weights: [400, 500] },
    ],
  },

  site: {
    url: "https://wusla.co",
  },

  // The four case-study pages are a dynamic [slug] route, so the sitemap
  // module can't discover them by scanning the file-based routes. List
  // them explicitly from the same data the pages render from.
  sitemap: {
    urls: () => studioProjects.map(project => ({ loc: `/portfolio/${project.slug}` })),
  },

  nitro: {
    preset: "cloudflare_module",
    prerender: {
      // Every route worth prerendering is already listed here. Crawling
      // the rendered HTML for more links on top of that queues the same
      // dynamic [slug] routes a second time (once from this list, once
      // discovered from /portfolio's own links), and that duplicate,
      // concurrent render is what was overwriting each case-study page
      // with the /portfolio listing's HTML.
      crawlLinks: false,
      routes: ["/", "/portfolio", "/capabilities", "/company", "/applications", "/start", "/portfolio/bewingo-india", "/portfolio/muzari", "/portfolio/wafy-sports", "/portfolio/pg-campus"],
      failOnError: true,
    },
  },

  routeRules: {
    "/": { prerender: true },
    "/portfolio": { prerender: true },
    "/portfolio/**": { prerender: true },
    "/capabilities": { prerender: true },
    "/company": { prerender: true },
    "/applications": { prerender: true },
    "/start": { prerender: true },
    "/api/contact": { headers: { "Cache-Control": "no-store" } },
  },

  future: {
    compatibilityVersion: 4,
  },
});
