import type { StorybookConfig } from '@storybook/react-webpack5'
import { storybookWebpackConfig } from './storybook-webpack-config'

const config: StorybookConfig = {
  // Required
  framework: '@storybook/react-webpack5',
  stories: [
    '../..//src/**/*.mdx',
    '../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  // Optional
  addons: ['@storybook/addon-essentials'],
  docs: {
    autodocs: 'tag',
  },
  webpackFinal: storybookWebpackConfig,
  staticDirs: ['../../public', '../../src/shared/assets'],
}

export default config
