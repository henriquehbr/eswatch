import chokidar2 from "chokidar";
import esbuild2 from "esbuild";
import readline2 from "readline";
import minimist2 from "minimist";
import path2, {dirname} from "path";
import {fileURLToPath} from "url";
import {fork} from "child_process";
const __dirname = dirname(fileURLToPath(import.meta.url));
const argv = minimist2(process.argv.slice(2));
let child;
const rl = readline2.createInterface({
  input: process.stdin,
  output: process.stdout
});
const liveReload = async (options) => {
  const outdir = path2.join(__dirname, "build");
  child && child.kill();
  const service = await esbuild2.startService();
  options.clear && console.clear();
  await service.build({
    entryPoints: [options.entry],
    outdir
  });
  return new Promise((resolve) => {
    rl.pause();
    child = fork(outdir, {stdio: "inherit"});
    child.on("close", () => {
      rl.resume();
      resolve();
    });
  });
};
if (!argv.watch)
  throw new Error('Missing "watch" argumment');
const watcher = chokidar2.watch(argv.watch);
watcher.on("ready", async () => liveReload(argv));
watcher.on("change", async () => liveReload(argv));
