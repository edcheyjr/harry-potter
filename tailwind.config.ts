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
          gryffindor: '#740001', //'Scarlet '
          hufflepuff: '#dfb80b', //'Yellow '
          ravenclaw: '#0496bd', //Blue
          slytherin: '#237c23', //Green
        },
        secondary: {
          gryffindor: '#e1cca6', //Gold
          hufflepuff: '#000000', //Black
          ravenclaw: '#6A4F3C', //Bronze
          slytherin: '#C0C0C0', //Silver
        },
      },
      animation: {
        shining: '1s shine ease-out infinite', //based on this blog https://harshilmoradia.medium.com/how-to-create-css-animated-loading-card-skeleton-ab0827795ae8
      },
      keyframes: {
        shine: {
          to: {
            'background-position': 'right bottom',
          },
        },
      },
      backgroundSize: {
        'two-one': '200% 100%',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')({ nocompatible: true })], // be warying!!! as they are only supported in Webkit-based browsers
}
export default config
