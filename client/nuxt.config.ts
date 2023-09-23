// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  modules: ['@nuxt/devtools', '@nuxtjs/tailwindcss'],
  devtools: { enabled: true }
})
