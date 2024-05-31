import type { StorybookConfig } from '@storybook/nextjs';

import { VanillaExtractPlugin } from '@vanilla-extract/webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  staticDirs: ['..\\public'],
  webpackFinal(config, options) {
    // Add Vanilla-Extract and MiniCssExtract Plugins
    config.plugins?.push(
      new VanillaExtractPlugin(),
      new MiniCssExtractPlugin()
    );

    return config;
  },
};
export default config;
