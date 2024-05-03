/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'reef': {
          400: '#8DE239',
          500: '#6EC81A',
          600: '#52A010',
          950: '#152D06'
        },
      },
      backgroundImage: {
        'cloud': "url('/translator-bg.png')",
      }
    },
  },
  plugins: [],
}

