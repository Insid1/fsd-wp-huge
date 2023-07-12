import webpack from "webpack";
import {IBuildOptions} from "./types/config";
import {buildLoaders} from "./build-loaders";
import {buildResolvers} from "./build-resolvers";
import {buildPlugins} from "./build-plugins";
import {buildDevServer} from "./build-dev-server";


const buildWebpackConfig = ({mode, paths, port}: IBuildOptions): webpack.Configuration => {
  const {entry, build, html, staticPath} = paths;

  const isDevelopmentMode = mode === "development";

  return {
    entry,
    mode,
    module: {
      rules: buildLoaders(),
    },
    resolve: buildResolvers(),
    plugins: buildPlugins({htmlTemplatePath: html}),
    output: {
      filename: "[name].[contenthash].js",
      path: build,
      clean: true
    },
    devtool: isDevelopmentMode ? "inline-source-map" : undefined,
    devServer: isDevelopmentMode ? buildDevServer({staticPath: staticPath, port}) : undefined,
  }
}

export {buildWebpackConfig}
