/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'midnightGreen':'#014E56',
        'lightCoral':'#F67E7E',
      },
      spacing: {
        '73':'73px',
        '50':'50PX'
      },
      fontFamily:{
        'Livvic': ['Livvic', "sans-serif"]
      },
      fontSize:{
        '100':'100px'
      },
      lineHeight: {
        '100': '100px',
      },
      maxWidth:{
        '445':'445px'
      }
    },
  },
  plugins: [],
}