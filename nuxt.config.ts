// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/color-mode", "nuxt-icon"],
  colorMode: {
    preference: "system",
    fallback: "dark",
    dataValue: "theme",
  },
  css: ["@/assets/css/main.css"],
});
