import type webpack from 'webpack'

export const buildFileLoader = (): webpack.RuleSetRule => {
  return {
  // add extensions to regexp to load different files
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  }
}
