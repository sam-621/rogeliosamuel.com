/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      display: ['"Work Sans"'],
    },
    extend: {
      colors: {
        primary: '#146EF5',
        bg: '#000',
        neutral1: '#E3E4E6',
        neutral2: '#818181',
      },
    },
  },
  plugins: [],
}
