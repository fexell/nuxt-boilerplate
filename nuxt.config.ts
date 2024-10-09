// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxtjs/google-fonts',
  ],
  app: {
    head: {
      bodyAttrs: {
        class: 'min-w-full max-w-full w-full min-h-screen',
      },
    },
  },
  googleFonts: {
    Lato: true,
  },
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
  build: {
    transpile: [
      '@fortawesome/vue-fontawesome',
    ],
  },
})