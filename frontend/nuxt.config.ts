import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  buildModules: ["@nuxtjs/google-fonts"],

  modules: ["@nuxtjs/tailwindcss"],

  components: {
    global: true,
    dirs: ["~/components"],
  },

  css: ["@/assets/scss/tailwind.css", "@/assets/scss/main.scss"],

  googleFonts: {
    families: {
      Cormorant: {
        wght: [100, 200, 300, 400, 500, 600],
        ital: [100],
      },
      Cardo: {
        wght: [100, 200, 300, 400, 500, 600],
        ital: [100],
      },

      Manrope: {
        wght: [100, 200, 300, 400, 500, 600],
        ital: [100],
      },
      "Source Sans Pro": {
        wght: [100, 200, 300, 400, 500, 600],
        ital: [100],
      },

      Inter: {
        wght: [100, 200, 300, 400, 500, 600],
        ital: [100],
      },
    },
  },
});
