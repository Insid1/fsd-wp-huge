import webpack from "webpack";
import {IBuildOptions} from "./types/config";
import {buildLoaders} from "./build-loaders";
import {buildResolvers} from "./build-resolvers";
import {buildPlugins} from "./build-plugins";
import {buildDevServer} from "./build-dev-server";


const buildWebpackConfig = ({mode, paths, port = 9110}: IBuildOptions): webpack.Configuration => {
  const {entry, build, html, staticPath} = paths;
  return {
    entry,
    mode,
    module: {
      rules: buildLoaders(),
    },
    resolve: buildResolvers(),
    devServer: buildDevServer({staticPath: staticPath, port }),
    plugins: buildPlugins({htmlTemplatePath: html}),
    output: {
      filename: "[name].[contenthash].js",
      path: build,
      clean: true
    },
    devtool: "inline-source-map",
  }
}

export {buildWebpackConfig}
