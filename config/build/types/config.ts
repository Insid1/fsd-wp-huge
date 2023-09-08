type BuildMode = "production" | "development";

interface IBuildPath {
  entry: string;
  src: string;
  build: string;
  html: string;
  staticPath: string;
}

interface IBuildEnv {
  mode?: BuildMode,
  port?: number,
}

interface IBuildOptions {
  mode: BuildMode;
  paths: IBuildPath;
  port: number;
}

export {BuildMode, IBuildPath, IBuildEnv, IBuildOptions}
