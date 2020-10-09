#!/usr/bin/env node
import readline from 'readline'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
import { ChildProcess, fork } from 'child_process'
import minimist from 'minimist'
import esbuild from 'esbuild'
import chokidar from 'chokidar'

interface LiveReloadOptions {
  watch: string | readonly string[]
  clear: boolean
  entry: string
}

const __dirname = dirname(fileURLToPath(import.meta.url))
const argv = minimist<LiveReloadOptions>(process.argv.slice(2))

let child: ChildProcess

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const watchAndBuild = async (options: LiveReloadOptions) => {
  const outdir = path.join(__dirname, 'build')
  child && child.kill()
  const service = await esbuild.startService()
  options.clear && console.clear()
  // TODO: switch to yargs later, as minimist doesn't support array options
  await service.build({
    entryPoints: [options.entry],
    outdir
  })
  return new Promise<void>(resolve => {
    rl.pause()
    child = fork(outdir, { stdio: 'inherit' })
    child.on('close', () => {
      rl.resume()
      resolve()
    })
  })
}

if (!argv.watch) throw new Error('Missing "watch" argument')
const watcher = chokidar.watch(argv.watch)
watcher.on('ready', async () => watchAndBuild(argv))
watcher.on('change', async () => watchAndBuild(argv))
