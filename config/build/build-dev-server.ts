import type {Configuration as DevServerConfiguration} from "webpack-dev-server";

interface IBuildDevServerParams {
  staticPath: string,
  port: number,
}

const buildDevServer = ({staticPath, port}: IBuildDevServerParams): DevServerConfiguration => {
  return {
    static: {
      directory: staticPath
    },
    compress: true,
    port,
    open: true,
    allowedHosts: "auto",
    historyApiFallback: true,
    client: {
      progress: true,
    }
  }
}

export {buildDevServer}
