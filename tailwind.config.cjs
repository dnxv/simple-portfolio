/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{jsx,js}'],
  darkMode: 'class',   
  theme: {
    extend: {
      fontFamily: {
        inter: ['inter', 'serif']
      },
      colors: {
        'matte-black': 'rgb(17 19 19)',
      }
    },
  },
  plugins: [],
}

