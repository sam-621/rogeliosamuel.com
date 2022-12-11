/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      display: ['"Inter"']
    },
    extend: {
      colors: {
        viewport: 'var(--viewport-bg)',
        primary: 'var(--primary-color)',
        subtitle: 'var(--subtitle-color)',
        'simple-title': 'var(--title-simple)',
        links: 'var(--links-hover)',
        'stroke-cards': 'rgba(201, 210, 227, 0.24);'
      }
    }
  },
  plugins: []
}
