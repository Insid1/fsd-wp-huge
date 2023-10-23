import { type StorybookConfigWebpack } from '@storybook/builder-webpack5'
import { buildCSSLoader } from '../build/loaders/buildCSSLoader'
import { buildSvgLoader } from '../build/loaders/buildSvgLoader'
import path from 'path'

export const storybookWebpackConfig: StorybookConfigWebpack['webpackFinal'] = async (config, { configType }) => {
  if (config?.module?.rules) {
    config.module.rules = config?.module?.rules?.map((rule: any) => {
      if (/svg/.test(rule.test)) {
        return { ...rule, exclude: /\.svg$/i }
      }

      return rule
    })

    config?.module?.rules?.push(buildCSSLoader(true))

    config?.module?.rules?.push(buildSvgLoader())
  }

  if (config?.resolve?.modules) {
    config.resolve.modules.push(path.resolve(__dirname, '../../src'))
  }

  return config
}
