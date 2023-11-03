import './tailwind.css';
import './fonts.css';
import React from 'react';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'white',
    values: [
      {
        name: 'gray',
        value: '#1B1B1D',
      },
      {
        name: 'light gray',
        value: '#232225',
      },
      { name: 'white', value: '#ffffff' },
    ],
  },
};

export const decorators = [(Story) => <Story />];
