/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        petrol: {
          950: '#050d10',
          900: '#09171c',
          800: '#0e252d',
          700: '#153743',
          600: '#1d4d5d',
          500: '#27687d',
          400: '#3892ae',
          300: '#5cb4cf',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Syne', 'sans-serif'],
        cinzel: ['Cinzel', 'serif'],
        script: ['Great Vibes', 'cursive']
      }
    }
  },
  plugins: [],
}