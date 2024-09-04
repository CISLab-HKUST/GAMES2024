/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.{html,js}"],
  corePlugins: {
    // ...
    container: false,
  },
  theme: {
    extend: {
      colors: {
        primary: colors.cyan,
        secondary: colors.amber,
        neutral: colors.gray,
      },
    },
  },
  plugins: [],
}