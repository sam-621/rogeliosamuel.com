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
      fontSize: {
        h1: 56,
        h2: 40,
        h3: 32,
        h4: 24,
        h5: 16,
        body1: 18,
        button: 16,
        label: 14,
      },
    },
  },
  plugins: [],
}
