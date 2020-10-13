#!/usr/bin/env node
import readline2 from "readline";
import path2, {dirname} from "path";
import {fileURLToPath} from "url";
import {spawn} from "child_process";
import minimist2 from "minimist";
import esbuild2 from "esbuild";
const __dirname = dirname(fileURLToPath(import.meta.url));
const options = minimist2(process.argv.slice(2));
let child;
const rl = readline2.createInterface({
  input: process.stdin,
  output: process.stdout
});
const watchAndBuild = async () => {
  const outdir = options.outdir || path2.join(__dirname, "build");
  child && child.kill();
  const service = await esbuild2.startService();
  options.clear && console.clear();
  await service.build({
    entryPoints: [options.entry],
    outdir
  });
  return new Promise((resolve) => {
    if (options.run) {
      rl.pause();
      const commandToRun = typeof options.run === "string" ? options.run : `node ${outdir}`;
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
options.watch ? import("chokidar").then(({default: chokidar}) => chokidar.watch(options.watch).on("ready", async () => watchAndBuild()).on("change", async () => watchAndBuild())) : watchAndBuild();
