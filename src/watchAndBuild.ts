import { spawn } from 'child_process'
import type { ChildProcess } from 'child_process'
import { builtinModules } from 'module'
import path from 'path'
import readline from 'readline'
import { fileURLToPath } from 'url'
import esbuild from 'esbuild'
import type { WatchAndBuild } from './types'

const dirname = path.dirname(fileURLToPath(import.meta.url))

let child: ChildProcess | undefined

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const watchAndBuild: WatchAndBuild = async options => {
  // TODO: remove `options.entry` on 1.0
  const entryPoints = options.entry ? [options.entry] : options._
  const splitting = options.format === 'esm' ? options.splitting : false

  // This is set to the built library inside node_modules
  const outdir = options.outdir ?? path.join(dirname, 'build')
  const external = [...builtinModules]
  if (!options.standalone) {
    const { default: getDependencies } = await import('./getDependencies')
    external.push(...(await getDependencies()))
  }
  child?.kill()
  const service = await esbuild.startService()
  options.clear && console.clear()
  await service.build({
    bundle: options.bundle,
    entryPoints,
    format: options.format,
    minify: options.minify,
    outdir,
    platform: options.platform,
    ...(options.bundle && {
      external,
      splitting
    })
  })
  return new Promise(resolve => {
    if (options.run) {
      rl.pause()
      const commandToRun = typeof options.run === 'string' ? options.run : `node ${outdir}`
      const [commandName] = commandToRun.split(' ')
      const commandParameters = commandToRun.split(' ').slice(1)
      child = spawn(commandName, commandParameters, { stdio: 'inherit' })
      child.on('close', () => {
        rl.resume()
        options.watch ? resolve() : process.exit()
      })
    } else {
      console.log(
        `${options.entry || options._.join(', ')} built successfully on ${options.outdir}`
      )
      resolve()
    }
  })
}

export default watchAndBuild
