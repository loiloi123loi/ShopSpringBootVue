/** @type {import('tailwindcss').Config} */

import daisyui from 'daisyui'

const config = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: {
          light: '#616161',
          dark: '#1e1e1e'
        }
      }
    }
  },
  plugins: [daisyui],
  daisyui: {
    themes: ['dracula', 'cmyk']
  }
}

export default config
