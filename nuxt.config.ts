// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['~/assets/css/main.css', 'animate.css/animate.min.css'],
    runtimeConfig:{
      public:{
        URL_API_CORREO: process.env.URL_API_CORREO
      }
    },
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
})
