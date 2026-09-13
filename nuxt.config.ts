import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2026-09-05",
  devtools: { enabled: false },

  modules: ["@nuxt/fonts", "@nuxtjs/sitemap", "@nuxtjs/robots", "@nuxt/eslint"],

  app: {
    head: {
      link: [{ rel: "icon", type: "image/png", href: "/assets/wusla_square.png" }],
      meta: [{ name: "theme-color", content: "#1A4D3C" }],
    },
  },

  css: ["~/assets/css/main.css", "~/assets/css/studio.css"],

  vite: {
    plugins: [tailwindcss()],
  },

  fonts: {
    defaults: { styles: ["normal"], subsets: ["latin"] },
    families: [
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
