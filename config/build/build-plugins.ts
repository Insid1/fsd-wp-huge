import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

interface IBuildPluginsParams {
  htmlTemplatePath: string
  isDevelopmentMode: boolean
}

const buildPlugins = ({ htmlTemplatePath, isDevelopmentMode }: IBuildPluginsParams): webpack.WebpackPluginInstance[] => {
  return [
    new HtmlWebpackPlugin({
      template: htmlTemplatePath,
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    new webpack.DefinePlugin({
      __IS_DEV__: isDevelopmentMode,
    }),
    new webpack.HotModuleReplacementPlugin(),
    new BundleAnalyzerPlugin({ openAnalyzer: false }),
  ]
}

export { buildPlugins }
