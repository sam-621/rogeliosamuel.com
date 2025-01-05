/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        black: 'var(--black)',
        'black-foreground': 'var(--black-foreground)',
        white: 'var(--white)',
        border: 'var(--border)',
        card: 'var(--card)',
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
