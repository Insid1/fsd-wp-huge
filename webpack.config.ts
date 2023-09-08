import webpack from "webpack";
import path from "path";
import {buildWebpackConfig} from "./config/build/build-webpack-config";
import {IBuildEnv, IBuildPath} from "./config/build/types/config";

const SRC = "src";
const BUILD = "build";
const PUBLIC = "public";


export default (env: IBuildEnv) => {
  const paths: IBuildPath = {
    entry: path.resolve(__dirname, SRC, "theme-prodiver.tsx"),
    html: path.resolve(__dirname, PUBLIC, "index.html"),
    build: path.resolve(__dirname, BUILD),
    staticPath: path.resolve(__dirname, PUBLIC),
  }

  const mode = env.mode || "development";
  const port = env.port || 9010;

  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    paths,
    port,
  });

  return config
};
