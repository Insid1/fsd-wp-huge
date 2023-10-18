import type webpack from 'webpack'
import path from 'path'
import { buildWebpackConfig } from './config/build/build-webpack-config'
import { type IBuildEnv, type IBuildPath } from './config/build/types/config'

const SRC = 'src'
const BUILD = 'build'
const PUBLIC = 'public'

export default (env: IBuildEnv): webpack.Configuration => {
  const paths: IBuildPath = {
    src: path.resolve(__dirname, SRC),
    entry: path.resolve(__dirname, SRC, 'index.tsx'),
    html: path.resolve(__dirname, PUBLIC, 'index.html'),
    build: path.resolve(__dirname, BUILD),
    staticPath: path.resolve(__dirname, PUBLIC),
  }

  const mode = env.mode ?? 'development'
  const port = env.port ?? 9010

  return buildWebpackConfig({
    mode,
    paths,
    port,
  })
}
