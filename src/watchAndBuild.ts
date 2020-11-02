import path from 'path'
import readline from 'readline'
import { fileURLToPath } from 'url'
import type { ChildProcess } from 'child_process'
import { spawn } from 'child_process'
import { builtinModules } from 'module'
import esbuild from 'esbuild'
import type { WatchAndBuild } from './types'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

let child: ChildProcess

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

export const watchAndBuild: WatchAndBuild = async options => {
  // TODO: remove `options.entry` on 1.0
  const entryPoints = options.entry ? [options.entry] : options._,
    splitting = options.format === 'esm' ? options.splitting : false,
    // This is set to the built library inside node_modules
    outdir = options.outdir || path.join(__dirname, 'build'),
    external = [...builtinModules]
  if (!options.standalone) {
    const { getDependencies } = await import('./getDependencies')
    external.push(...(await getDependencies()))
  }
  child && child.kill()
  const service = await esbuild.startService()
  options.clear && console.clear()
  await service.build({
    bundle: options.bundle,
    platform: options.platform,
    ...(options.bundle && {
      external,
      splitting
    }),
    format: options.format,
    minify: options.minify,
    entryPoints,
    outdir
  })
  return new Promise(resolve => {
    if (options.run) {
      rl.pause()
      const commandToRun = typeof options.run === 'string' ? options.run : `node ${outdir}`,
        commandName = commandToRun.split(' ').shift()!,
        commandParameters = commandToRun.split(' ').slice(1)
      child = spawn(commandName, commandParameters, { stdio: 'inherit' })
      child.on('close', () => {
        rl.resume()
        options.watch ? resolve() : process.exit()
      })
    } else {
      console.log(`${options.entry || options._[0]} built successfully on ${options.outdir}`)
      resolve()
    }
  })
}
