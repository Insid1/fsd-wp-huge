import type webpack from 'webpack'

export const buildSvgLoader = (): webpack.RuleSetRule => {
  return {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: [
      {
        loader: '@svgr/webpack',
        options: {
          icon: true,
        },
      },
    ],
  }
}
