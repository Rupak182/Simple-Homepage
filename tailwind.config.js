/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {

    screens: {
      'sm': '700px',

      'md': '900px',

      'lg': '1250px',
    },

    extend: {
      fontFamily:{
       poppins:["Poppins", "sans-serif"]
      }
    },
  },
  plugins: [],
}