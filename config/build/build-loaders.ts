import webpack from "webpack";

const buildLoaders = (): webpack.RuleSetRule[] => {

  // if we don't use typescript then we need to add babel to transpile jsx
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  }

  return [
    typescriptLoader,
  ]
}

export {buildLoaders}
