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
    throw new Error("Entry point not found");
};

// src/watchAndBuild.ts
import {spawn} from "child_process";
import {builtinModules} from "module";
import path2 from "path";
import readline2 from "readline";
import {fileURLToPath} from "url";
import esbuild2 from "esbuild";
const dirname = path2.dirname(fileURLToPath(import.meta.url));
let child;
const rl = readline2.createInterface({
  input: process.stdin,
  output: process.stdout
});
const watchAndBuild = async (options2) => {
  const entryPoints = options2.entry ? [options2.entry] : options2._;
  const splitting = options2.format === "esm" ? options2.splitting : false;
  const outdir = options2.outdir ?? path2.join(dirname, "build");
  const external = [...builtinModules];
  if (!options2.standalone) {
    const {default: getDependencies} = await import("./getDependencies.js");
    external.push(...await getDependencies());
  }
  child?.kill();
  const service = await esbuild2.startService();
  options2.clear && console.clear();
  await service.build({
    bundle: options2.bundle,
    entryPoints,
    format: options2.format,
    minify: options2.minify,
    outdir,
    platform: options2.platform,
    ...options2.bundle && {
      external,
      splitting
    }
  });
  service.stop();
  return new Promise((resolve) => {
    if (options2.run) {
      rl.pause();
      const commandToRun = typeof options2.run === "string" ? options2.run : `node ${outdir}`;
      const [commandName] = commandToRun.split(" ");
      const commandParameters = commandToRun.split(" ").slice(1);
      child = spawn(commandName, commandParameters, {stdio: "inherit"});
      child.on("close", () => {
        rl.resume();
        options2.watch ? resolve() : process.exit();
      });
    } else {
      console.log(`${options2.entry || options2._.join(", ")} built successfully on ${options2.outdir}`);
      rl.close();
      resolve();
    }
  });
};
var watchAndBuild_default = watchAndBuild;

// src/index.ts
const options = minimist2(process.argv.slice(2));
validateEntryPoints(options);
options.watch ? import("chokidar").then(({default: chokidar}) => chokidar.watch(options.watch).on("ready", async () => watchAndBuild_default(options)).on("change", async () => watchAndBuild_default(options))) : watchAndBuild_default(options);
