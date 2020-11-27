import type { ChildProcess } from 'child_process'
import readline from 'readline'
import { getCLIOptions, runCommand, parseOptions } from '@eswatch/helpers'

type PostBuild = () => Promise<void>

let child: ChildProcess | undefined

// Investigate possible optimizations on this
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const postBuild: PostBuild = () => {
  return new Promise(async resolve => {
    const options = getCLIOptions()
    const { entryPoints, outdir } = await parseOptions()
    options.clear && console.clear()
    child?.kill()
    if (options.run) {
      rl.pause()
      child = runCommand(options)
      child.on('close', () => {
        rl.resume()
        options.watch ? resolve() : process.exit()
      })
    } else {
      console.log(`${entryPoints.join(', ')} built successfully on ${outdir}`)
      rl.close()
      resolve()
    }
  })
}

export { postBuild }
