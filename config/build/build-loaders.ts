import type webpack from 'webpack'
import { type IBuildOptions } from './types/config'
import { buildTypescriptLoader } from './loaders/buildTypescriptLoader'
import { buildFileLoader } from './loaders/buildFileLoader'
import { buildSvgLoader } from './loaders/buildSvgLoader'
import { buildCSSLoader } from './loaders/buildCSSLoader'

const buildLoaders = (options: IBuildOptions): webpack.RuleSetRule[] => {
  const isDevelopmentMode = options.mode === 'development'

  const typescriptLoader: webpack.RuleSetRule = buildTypescriptLoader()
  const fileLoader: webpack.RuleSetRule = buildFileLoader()
  const svgLoader: webpack.RuleSetRule = buildSvgLoader()
  const cssLoader: webpack.RuleSetRule = buildCSSLoader(isDevelopmentMode)

  return [
    typescriptLoader,
    cssLoader,
    svgLoader,
    fileLoader,
  ]
}

export { buildLoaders }
