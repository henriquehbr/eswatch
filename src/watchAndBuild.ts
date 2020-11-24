import { spawn } from 'child_process'
import type { ChildProcess } from 'child_process'
import readline from 'readline'
import esbuild from 'esbuild'
import getOptions from './getOptions'
import validateEntryPoints from './validateEntryPoints'
import parseOptions from './parseOptions'
import type { WatchAndBuild } from './types'

let child: ChildProcess | undefined
let entryPoints: string[] | undefined

const options = getOptions()

// Investigate possible optimizations on this
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

// Consider replacing this by a top-level await
validateEntryPoints(options).then(entries => (entryPoints = entries))

const watchAndBuild: WatchAndBuild = async () => {
  const { external, outExtension, splitting, outdir } = await parseOptions(options)
  child?.kill()
  const service = await esbuild.startService()
  options.clear && console.clear()
  await service.build({
    bundle: options.bundle,
    entryPoints,
    outExtension,
    format: options.format,
    minify: options.minify,
    outdir,
    platform: options.platform,
    ...(options.bundle && {
      external,
      splitting
    })
  })
  service.stop()
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
      rl.close()
      resolve()
    }
  })
}

export { watchAndBuild }
