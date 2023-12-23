const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['InterVariable', 'Inter', ...defaultTheme.fontFamily.sans],
        ibm: ['IBM Plex Sans', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: '#146EF5',
        'neutral-1': '#F1F1F1',
        'neutral-2': '#818181',
        view: '#000',
      },
    },
  },
  plugins: [],
}
