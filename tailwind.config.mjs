/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      colors: {
        background: '#EBEBEB',
        foreground: '#383A37',
        black: '#000000',
        white: '#FFFFFF',
        border: '#0000001A',
        card: '#0000000D',
      },
      screens: {
        '2xl': '1440px',
      }
    },
	},
	plugins: [
    require('@tailwindcss/aspect-ratio')
  ],
}
