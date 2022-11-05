const defaultTheme = require('tailwindcss/defaultTheme');

const customColors = {
  digibleu: {
    100: '#EDFFFE',
    200: '#DFFCFA',
    300: '#D0F9F6',
    400: '#BFEBE8',
    500: '#AEDCD9',
    600: '#8BBFBC',
  },
  digijaune: {
    100: '#FFFBE0',
    200: '#FFF8CB',
    300: '#FFF5B6',
    400: '#F8EA95',
    500: '#F0DE73',
    600: '#E0C72F',
  },
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'content/**/*.md',
    'content/**/*.html',
    'layouts/**/*.html',
    'themes/digibloom/content/**/*.md',
    'themes/digibloom/layouts/**/*.html',
  ],
  theme: {
    extend: {
      colors: customColors,
      fontFamily: {
        sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
      },
      typography: {
        DEFAULT: {
          css: {
            p: {
              textAlign: 'justify',
            },
            li: {
              textAlign: 'justify',
            },
            figcaption: {
              textAlign: 'center',
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
