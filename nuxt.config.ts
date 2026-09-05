import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2026-09-05",
  devtools: { enabled: true },

  modules: ["@nuxt/fonts", "@nuxtjs/sitemap", "@nuxtjs/robots", "@nuxt/eslint"],

  app: {
    head: {
      link: [{ rel: "icon", type: "image/png", href: "/assets/wusla_square.png" }],
    },
  },

  css: ["~/assets/css/main.css"],

  vite: {
    plugins: [tailwindcss()],
  },

  fonts: {
    families: [
      { name: "Inter", provider: "google", global: true },
      { name: "JetBrains Mono", provider: "google", global: true },
    ],
  },

  site: {
    url: "https://wusla.com",
  },

  nitro: {
    preset: "cloudflare_module",
  },

  future: {
    compatibilityVersion: 4,
  },
});
