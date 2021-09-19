const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      primary: '#222831',
      secondary: '#2F80ED',
      white: colors.white,
      subtitle: '#BEC5CB'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
