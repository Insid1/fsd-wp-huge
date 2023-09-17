import webpack from "webpack";
import {IBuildOptions} from "./types/config";
import {buildLoaders} from "./build-loaders";
import {buildResolvers} from "./build-resolvers";
import {buildPlugins} from "./build-plugins";
import {buildDevServer} from "./build-dev-server";

const buildWebpackConfig = (options: IBuildOptions): webpack.Configuration => {
  const {mode, paths, port} = options;
  const {entry, build, html, staticPath} = paths;

  const isDevelopmentMode = mode === "development";

  return {
    entry,
    mode,
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(options),
    plugins: buildPlugins({
      htmlTemplatePath: html,
      isDevelopmentMode
    }),
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
