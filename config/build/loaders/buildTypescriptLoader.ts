import type webpack from 'webpack'

// if we don't use typescript then we need to add babel to transpile jsx
export const buildTypescriptLoader = (): webpack.RuleSetRule => {
  return {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }
}
