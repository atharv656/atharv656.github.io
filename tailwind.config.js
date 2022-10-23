/** @type {import('tailwindcss').Config} */

const { gridTemplateRows } = require('tailwindcss/defaultTheme')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js, html}",
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        '10': 'repeat(10, minmax(0, 1fr))',
      },
      fontFamily: {
        'sans': ['Alata', defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [],
}
