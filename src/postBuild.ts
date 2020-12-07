import type { ChildProcess } from 'child_process'
import readline from 'readline'
import { runCommand } from '@eswatch/helpers'
import type { CLIFlags } from '@eswatch/types'

type PostBuild = (entryPoints: string[], options: CLIFlags) => Promise<void>

let child: ChildProcess | undefined

// Investigate possible optimizations on this
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const postBuild: PostBuild = (entryPoints, options) => {
  return new Promise(async resolve => {
    //const options = getCLIOptions()
    options.clear && console.clear()
    child?.kill()
    if (options.run) {
      rl.pause()
      child = runCommand(entryPoints)
      child.on('close', () => {
        rl.resume()
        options.watch ? resolve() : process.exit()
      })
    } else {
      console.log(`${entryPoints.join(', ')} built successfully on ${options.outdir}`)
      rl.close()
      resolve()
    }
  })
}

export { postBuild }
