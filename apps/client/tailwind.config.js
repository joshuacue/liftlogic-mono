const { join } = require('path');
const { createGlobPatternsForDependencies } = require('@nx/next/tailwind');

module.exports = {
  presets: [
    require('../../tailwind.preset.base.js'),
    require('../../tailwind.modern.js'),
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
