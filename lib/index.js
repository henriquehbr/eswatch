#!/usr/bin/env node

// src/index.ts
import minimist2 from "minimist";

// src/validateEntryPoints.ts
import {existsSync} from "fs";
const validateEntryPoints = (options2) => {
  const missingEntryPoint = options2._.length < 1 && !options2.entry;
  const invalidEntryPoint = !options2._.every((entryPoint) => existsSync(entryPoint));
  if (missingEntryPoint)
    throw new Error("Missing entry point");
  else if (invalidEntryPoint)
    throw new Error("Invalid entry point");
};

// src/watchAndBuild.ts
import path2 from "path";
import readline2 from "readline";
import {fileURLToPath} from "url";
import {spawn} from "child_process";
import {builtinModules} from "module";
import esbuild2 from "esbuild";

// src/getDependencies.ts
import {readFileSync} from "fs";
import findUp from "find-up";
const getDependencies = async () => {
  const packageJsonPath = await findUp("package.json");
  if (packageJsonPath) {
    const packageJsonString = readFileSync(packageJsonPath, {encoding: "utf-8"});
    const packageJson = JSON.parse(packageJsonString);
    const dependencies = Object.keys(packageJson.dependencies);
    return dependencies;
  } else {
    return [];
  }
};

// src/watchAndBuild.ts
const __dirname = path2.dirname(fileURLToPath(import.meta.url));
let child;
const rl = readline2.createInterface({
  input: process.stdin,
  output: process.stdout
});
const watchAndBuild = async (options2) => {
  const entryPoints = options2.entry ? [options2.entry] : options2._;
  const outdir = options2.outdir || path2.join(__dirname, "build");
  const dependencies = await getDependencies();
  child && child.kill();
  const service = await esbuild2.startService();
  options2.clear && console.clear();
  await service.build({
    bundle: options2.bundle,
    ...options2.bundle && {external: [...dependencies, ...builtinModules]},
    format: options2.format,
    splitting: options2.splitting,
    entryPoints,
    outdir
  });
  return new Promise((resolve) => {
    if (options2.run) {
      rl.pause();
      const commandToRun = typeof options2.run === "string" ? options2.run : `node ${outdir}`;
      const commandName = commandToRun.split(" ").shift();
      const commandParameters = commandToRun.split(" ").slice(1);
      child = spawn(commandName, commandParameters, {stdio: "inherit"});
      child.on("close", () => {
        rl.resume();
        resolve();
      });
    } else {
      resolve();
    }
  });
};

// src/index.ts
const options = minimist2(process.argv.slice(2));
validateEntryPoints(options);
options.watch ? import("chokidar").then(({default: chokidar}) => chokidar.watch(options.watch).on("ready", async () => watchAndBuild(options)).on("change", async () => watchAndBuild(options))) : watchAndBuild(options);
