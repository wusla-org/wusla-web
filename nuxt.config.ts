import tailwindcss from "@tailwindcss/vite";

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

  // main.css is the Tailwind entry; studio.css still styles the six inner
  // routes. wusla.css is the 2026 system and loads last so it wins. The
  // first two go away once the inner routes are ported.
  css: ["~/assets/css/main.css", "~/assets/css/studio.css", "~/assets/css/wusla.css"],

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

  nitro: {
    preset: "cloudflare_module",
    prerender: {
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
