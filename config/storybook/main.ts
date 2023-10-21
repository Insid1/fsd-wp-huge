import type { StorybookConfig } from '@storybook/react-webpack5'
import { type StorybookConfigWebpack } from '@storybook/builder-webpack5'
import path from 'path'
import { buildCSSLoader } from '../build/loaders/buildCSSLoader'

const storybookWebpackConfig: StorybookConfigWebpack['webpackFinal'] = async (config, { configType }) => {
  config?.module?.rules?.push(buildCSSLoader(true))

  if (config?.resolve?.modules) {
    config.resolve.modules = [
      ...(config.resolve.modules ?? []),
      path.resolve(__dirname, '../../src'),
    ]
  }

  return config
}

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
  staticDirs: ['../../public'],
}

export default config
