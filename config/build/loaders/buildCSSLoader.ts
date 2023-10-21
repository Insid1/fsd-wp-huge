import type webpack from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export const buildCSSLoader = (isDevelopmentMode: boolean): webpack.RuleSetRule => {
  return {
    test: /\.s[ac]ss$/i,
    use: [
      isDevelopmentMode
        ? 'style-loader'
        : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resPath: string) => resPath.includes('.module.scss'),
            localIdentName: isDevelopmentMode
              ? '[path][name]__[local]'
              : '[hash:base64:8]',
          },
        },
      },
      'sass-loader',
    ],
  }
}
