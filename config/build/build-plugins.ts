import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";

interface IBuildPluginsParams {
  htmlTemplatePath: string,
}

const buildPlugins = ({htmlTemplatePath}: IBuildPluginsParams): webpack.WebpackPluginInstance[] => {
  return [
    new HtmlWebpackPlugin({
      template: htmlTemplatePath
    }),
    new webpack.ProgressPlugin()
  ]
}

export {buildPlugins}
