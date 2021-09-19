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
      black: colors.black,
      subtitle: '#BEC5CB',
      'card-background': '#292F38'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
