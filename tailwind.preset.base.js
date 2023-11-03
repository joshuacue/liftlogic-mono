const { generateSizes } = require('./tailwind.sizes.js');

module.exports = {
  theme: {
    screens: {
      '2xs': '320px',
      xs: '414px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      '3xl': '1920px',
      '4xl': '2560px',
      '5xl': '3840px',
    },
    visibility: ['hover', 'focus'],
    extend: {
      colors: {
        black: '#000000',
        white: '#FFFFFF',
      },
      fontSize: generateSizes(),
      lineHeight: generateSizes(),
      spacing: generateSizes(),
      minWidth: generateSizes(),
      maxWidth: generateSizes(),
      minHeight: generateSizes(),
      maxHeight: generateSizes(),
      borderRadius: generateSizes(),
      borderWidth: generateSizes(),
      ringWidth: generateSizes(),
      strokeWidth: generateSizes(),
    },
  },
  plugins: [],
};
