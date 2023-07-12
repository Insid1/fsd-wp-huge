import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";


interface IBuildPluginsParams {
  htmlTemplatePath: string,
}

const buildPlugins = ({htmlTemplatePath}: IBuildPluginsParams): webpack.WebpackPluginInstance[] => {
  return [
    new HtmlWebpackPlugin({
      template: htmlTemplatePath
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[name].[contenthash:8].css",
    }),
  ]
}

export {buildPlugins}
