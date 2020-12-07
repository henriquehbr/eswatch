import {
  getEsbuildConfig,
  runCommand_default
} from "./chunk.B4XYYNIB.js";

// src/initEsbuild.ts
import esbuild2 from "esbuild";
import rimraf2 from "rimraf";

// src/postBuild.ts
import readline2 from "readline";
var child;
var rl = readline2.createInterface({
  input: process.stdin,
  output: process.stdout
});
var postBuild = (entryPoints, options) => {
  return new Promise(async (resolve) => {
    options.clear && console.clear();
    child?.kill();
    if (options.run) {
      rl.pause();
      child = runCommand_default(entryPoints);
      child.on("close", () => {
        rl.resume();
        options.watch ? resolve() : process.exit();
      });
    } else {
      console.log(`${entryPoints.join(", ")} built successfully on ${options.outdir}`);
      rl.close();
      resolve();
    }
  });
};

// src/initEsbuild.ts
var executeBuildSteps = async (buildSteps) => {
  for (const buildStep of buildSteps)
    await buildStep();
};
console.log("Hello World!");
var initEsbuild = async (entryPoints, options) => {
  const esbuildConfig = await getEsbuildConfig(entryPoints, options);
  !options.keepfiles && rimraf2.sync(esbuildConfig.outdir);
  const esbuildService = options.watch && await esbuild2.startService();
  const buildOrWatchStep = (esbuildService || esbuild2).build.bind(void 0, esbuildConfig);
  const postBuildStep = postBuild.bind(void 0, entryPoints, options);
  const buildSteps = [buildOrWatchStep, postBuildStep];
  if (options.watch) {
    const chokidar = await import("chokidar");
    chokidar.watch(options.watch).on("ready", async () => await executeBuildSteps(buildSteps)).on("change", async () => await executeBuildSteps(buildSteps));
  } else {
    await executeBuildSteps(buildSteps);
  }
};
export {
  initEsbuild
};
