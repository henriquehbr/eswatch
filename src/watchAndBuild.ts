import path from 'path'
import readline from 'readline'
import { fileURLToPath } from 'url'
import { ChildProcess, spawn } from 'child_process'
import { builtinModules } from 'module'
import esbuild from 'esbuild'
import type { CLIFlags } from './types'
import { getDependencies } from './getDependencies'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

let child: ChildProcess

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

export type WatchAndBuild = (options: CLIFlags) => Promise<void>

export const watchAndBuild: WatchAndBuild = async options => {
  // TODO: remove `options.entry` on 1.0
  const entryPoints = options.entry ? [options.entry] : options._
  // This is set to the built library inside node_modules
  const outdir = options.outdir || path.join(__dirname, 'build')
  const dependencies = await getDependencies()
  child && child.kill()
  const service = await esbuild.startService()
  options.clear && console.clear()
  await service.build({
    bundle: options.bundle,
    ...(options.bundle && { external: [...dependencies, ...builtinModules] }),
    format: options.format,
    splitting: options.splitting,
    entryPoints,
    outdir
  })
  return new Promise(resolve => {
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
