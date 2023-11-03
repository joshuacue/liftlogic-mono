import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  stories: ['../src/lib/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: ['@storybook/addon-essentials'],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  webpackFinal: async (baseConfig) => {
    if (!baseConfig?.module?.rules) return baseConfig;
    baseConfig.module.rules.push({
      test: /\.(mov)$/i,
      loader: 'file-loader',
      options: {
        name: '[path][name].[ext]',
        esModule: false,
      },
    });

    return baseConfig;
  },
};

export default config;
