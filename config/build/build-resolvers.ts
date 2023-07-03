import webpack from "webpack";

const buildResolvers = (): webpack.ResolveOptions => {
  return {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
  }
}

export {buildResolvers}
