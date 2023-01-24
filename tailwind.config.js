/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Inter'],
      primary: ['Inter']
    },
    extend: {
      colors: {
        primary: '#6F50B5',
        secondary: '#f1f5f2'
      },
      width: {
        '400' : '400px'
      }
    },
  },
  plugins: [],
}
