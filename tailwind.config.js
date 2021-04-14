const colors = require('tailwindcss/colors');
const defThem = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: ['./**/*.{ts,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    screens: {
      xs: '425px',
      ...defThem.screens
    },
    colors: {
      bland: 'rgba(0, 0, 0, 0.5)',

      main: '#A05EB5',
      'grad-1': '#8a557b',
      'grad-2': '#673b67',
      ...colors
    },
    fontFamily: {
      sans: ['"Karla"', 'sans-serif']
    },
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
};
