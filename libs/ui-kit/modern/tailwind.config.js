const { join } = require('path');
const { createGlobPatternsForDependencies } = require('@nx/next/tailwind');

module.exports = {
  presets: [
    require('../../../tailwind.modern.js'),
    require('../../../tailwind.preset.base.js'),
  ],
  content: [
    // './components/**/*.{js,ts,jsx,tsx}',
    // './pages/**/*.{js,ts,jsx,tsx}',
    join(
      __dirname,
      '{src,pages,app,components,utils}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  darkMode: 'media', // or 'media' or 'class'
};
