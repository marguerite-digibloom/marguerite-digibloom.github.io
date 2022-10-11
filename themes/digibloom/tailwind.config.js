const defaultTheme = require('tailwindcss/defaultTheme');

const customColors = {
  digibleu: {
    light: '#EDFFFE',
    DEFAULT: '#D0F9F6',
    normal: '#D0F9F6',
    dark: '#8BBFBC',
  },
  digijaune: {
    light: '#FFF5B6',
    DEFAULT: '#F0DE73',
    normal: '#F0DE73',
    dark: '#E0C72F',
  },
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '../../content/**/*.md',
    '../../content/**/*.html',
    '../../layouts/**/*.html',
    'content/**/*.md',
    'layouts/**/*.html',
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
