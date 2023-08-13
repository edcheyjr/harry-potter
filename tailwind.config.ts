import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        bg: {
          dark: 'rgb(14, 22, 34)',
        },
        primary: {
          gryffindor: '#740001',
          hufflepuff: '#dfb80b',
          ravenclaw: '#0496bd',
          slytherin: '#237c23',
        },
        secondary: {
          gryffindor: '#e1cca6',
          hufflepuff: '#000000',
          ravenclaw: '#6A4F3C',
          slytherin: '#C0C0C0',
        },
      },
    },
  },
  plugins: [],
}
export default config
