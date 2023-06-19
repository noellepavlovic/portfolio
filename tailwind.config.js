/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        noellegray: {
          DEFAULT: '#474D53',
          100: '#777D83',
          200: '#676D73',
          300: '#575D63',
          400: '#474D53',
          500: '#373D43',
          600: '#272D33',
          700: '#171D23',
          800: '#070D03',
        },
        noelleteal: {
          DEFAULT: '#64C7C6',
          100: '#95F7B1',
          200: '#78E9BE',
          300: '#67D8C5',
          400: '#64C7C6',
          500: '#369E9E',
          600: '#007777',
          700: '#005253',
          800: '#002F31',
        }
      },
    },
  },
  plugins: [],
}

