/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      poly: ['"Poly"', "serif"],
      lato: ['"Lato"', "sans-serif"],
      traderjoes: ['traderjoes', "display"],
    },
    colors: {
      'crimson': '#DC143C',
      'brown': '#834427',
      'off-white': '#EFEFEF',
      'red': colors.red,
      'stone': colors.stone,
      'amber': colors.amber,
      'lime': colors.lime,
      'orange': colors.orange,
      'violet': colors.violet,
      'sky': colors.sky,
      'yellow': colors.yellow,
      'teal': colors.teal,
      'pink': colors.pink
    },  
  },
  plugins: [],
}