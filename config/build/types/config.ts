type BuildMode = "production" | "development";

interface IBuildPath {
  entry: string;
  build: string;
  html: string;
}

interface IBuildOptions {
  mode: BuildMode;
  paths: IBuildPath;
}

export {BuildMode, IBuildPath, IBuildOptions}
