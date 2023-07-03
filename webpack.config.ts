import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";

const SRC = "src"
const BUILD = "build"
const PUBLIC = "public"

const config: webpack.Configuration = {
  entry:  path.resolve(__dirname, SRC, "index.ts"),
  mode: "development",
  // mode: "production",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
  },
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, BUILD),
    clean: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, PUBLIC, "index.html")
    }),
    new webpack.ProgressPlugin()
  ]
};

export default config;
