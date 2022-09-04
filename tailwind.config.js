/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        viewport: '#161616',
        cards: '#212121',
        primary: '#0066FF',
        title: '#FFFFFF',
        subtitle: '#B6B6B6'
      }
    }
  },
  plugins: []
}
