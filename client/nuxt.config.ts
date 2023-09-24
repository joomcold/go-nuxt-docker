// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  modules: ['@nuxt/devtools', '@nuxtjs/tailwindcss', 'nuxt-icon'],
  devtools: { enabled: true },
  css: ['@/assets/styles/global.scss']
})
