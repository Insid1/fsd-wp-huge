import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {IBuildOptions} from "./types/config";

const buildLoaders = (options: IBuildOptions): webpack.RuleSetRule[] => {
  const isDevelopmentMode = options.mode === "development";

  // if we don't use typescript then we need to add babel to transpile jsx
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  }

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDevelopmentMode
        ? "style-loader"
        : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: (resPath: string) => resPath.includes(".module.scss"),
            localIdentName: isDevelopmentMode
              ? "[path][name]__[local]"
              : "[hash:base64:8]",
          },
        },
      },
      "sass-loader",
    ],
  };

  return [
    typescriptLoader,
    cssLoader,
  ]
}

export {buildLoaders}
