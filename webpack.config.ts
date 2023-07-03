import webpack from "webpack";
import path from "path";
import {buildWebpackConfig} from "./config/build/build-webpack-config";
import {IBuildPath} from "./config/build/types/config";

const SRC = "src";
const BUILD = "build";
const PUBLIC = "public";

const paths: IBuildPath = {
  entry: path.resolve(__dirname, SRC, "index.ts"),
  html: path.resolve(__dirname, PUBLIC, "index.html"),
  build: path.resolve(__dirname, BUILD),
}

const config: webpack.Configuration = buildWebpackConfig({
  mode: "development",
  paths,
});

export default config;
