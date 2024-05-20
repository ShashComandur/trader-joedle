/** @type {import('tailwindcss').Config} */
export default {
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
    },
    extend: {},
  },
  plugins: [],
}

