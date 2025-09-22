/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        body: 'var(--body)',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        subtitle: 'var(--subtitle)',
        'subtitle-secondary': 'var(--subtitle-secondary)',
        distinct: 'var(--distinct)',
        border: 'var(--border)',
      },
      screens: {
        '2xl': '1440px',
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
