#!/usr/bin/env node
import readline from 'readline'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
import { ChildProcess, spawn } from 'child_process'
import minimist from 'minimist'
import esbuild from 'esbuild'

interface LiveReloadOptions {
  watch: string | readonly string[]
  clear: boolean
  entry: string
  outdir: string
  run: boolean
}

const __dirname = dirname(fileURLToPath(import.meta.url))
const options = minimist<LiveReloadOptions>(process.argv.slice(2))

let child: ChildProcess

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const watchAndBuild = async () => {
  // This is set to the built library inside node_modules
  const outdir = options.outdir || path.join(__dirname, 'build')
  child && child.kill()
  const service = await esbuild.startService()
  options.clear && console.clear()
  // TODO: switch to yargs later, as minimist doesn't support array options on 
  await service.build({
    entryPoints: [options.entry],
    outdir
  })
  return new Promise<void>(resolve => {
    if (options.run) {
      rl.pause()
      const commandToRun = typeof options.run === 'string' ? options.run : `node ${outdir}`
      const commandName = commandToRun.split(' ').shift()!
      const commandParameters = commandToRun.split(' ').slice(1)
      child = spawn(commandName, commandParameters, { stdio: 'inherit' })
      child.on('close', () => {
        rl.resume()
        resolve()
      })
    } else {
      resolve()
    }
  })
}

options.watch
  ? import('chokidar')
    .then(({ default: chokidar }) =>
      chokidar
        .watch(options.watch)
        .on('ready', async () => watchAndBuild())
        .on('change', async () => watchAndBuild())
    )
  : watchAndBuild()
