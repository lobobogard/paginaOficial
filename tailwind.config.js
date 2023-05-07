/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      backgroundImage: {
        'hero': "url('../img/segurosExito.jpg')",
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
    { src: "~/plugins/aos", mode: "client" },
  ],
  // purgeCSS: {
  //   whitelist: ["aos-init", "aos-animate", "data-aos-delay", "data-aos-duration", "fade-up", "zoom-in"],
  // }
}

