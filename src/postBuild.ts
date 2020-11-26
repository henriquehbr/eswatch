import type { ChildProcess } from 'child_process'
import readline from 'readline'
import { getCLIOptions, runCommand, parseOptions } from '@eswatch/helpers'
import type { PostBuild } from '@eswatch/types'

let child: ChildProcess | undefined

// Investigate possible optimizations on this
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const postBuild: PostBuild = async () => {
  const options = getCLIOptions()
  const { entryPoints, outdir } = await parseOptions()
  options.clear && console.clear()
  child?.kill()
  return new Promise(resolve => {
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
