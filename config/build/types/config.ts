type BuildMode = "production" | "development";

interface IBuildPath {
  entry: string;
  build: string;
  html: string;
  staticPath: string;
}

interface IBuildOptions {
  mode: BuildMode;
  paths: IBuildPath;
  port?: number;
}

export {BuildMode, IBuildPath, IBuildOptions}
