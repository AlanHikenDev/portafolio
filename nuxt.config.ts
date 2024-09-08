// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  ssr: false,
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-particles',
    "@nuxtjs/i18n",
    require('flowbite/plugin'),
    'nuxt-auth-sanctum',
  ],
  sanctum: {
      baseUrl: 'http://localhost:8000', // Laravel API
      redirect: {
        keepRequestedRoute: false,
        onLogin: '/chat',
        onLogout: '/chat/login',
        onAuthOnly: '/chat/login',
        onGuestOnly: '/',
    },
  },
  i18n: {
    locales: [
      { code: 'en', iso: 'en-US', file: 'en.js' },
      { code: 'es', iso: 'es-ES', file: 'es.js' }
    ],
    lazy: true,
    langDir: 'lang/',
    defaultLocale: 'es'
  },
})