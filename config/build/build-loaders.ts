import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {IBuildOptions} from "./types/config";

const buildLoaders = (options: IBuildOptions): webpack.RuleSetRule[] => {

  // if we don't use typescript then we need to add babel to transpile jsx
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  }

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // creates style nodes from JS strings
      options.mode === "development" ? "style-loader" :MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      "css-loader",
      // Compiles Sass to CSS
      "sass-loader",
    ],
  };

  return [
    typescriptLoader,
    cssLoader,
  ]
}

export {buildLoaders}
