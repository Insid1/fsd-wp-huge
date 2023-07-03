import webpack from "webpack";
import {IBuildOptions} from "./types/config";
import {buildLoaders} from "./build-loaders";
import {buildResolvers} from "./build-resolvers";
import {buildPlugins} from "./build-plugins";


const buildWebpackConfig = ({mode, paths}: IBuildOptions): webpack.Configuration => {
  const {entry, build, html} = paths;
  return {
    entry,
    mode,
    module: {
      rules: buildLoaders(),
    },
    resolve: buildResolvers(),
    output: {
      filename: "[name].[contenthash].js",
      path: build,
      clean: true
    },
    plugins: buildPlugins({htmlTemplatePath: html})
  }
}

export {buildWebpackConfig}
