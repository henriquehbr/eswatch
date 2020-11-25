import type { ChildProcess } from 'child_process'
import getCLIOptions from './getOptions'
import readline from 'readline'
import runCommand from './runCommand'
import type { PostBuild } from './types'

let child: ChildProcess | undefined

// Investigate possible optimizations on this
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const postBuild: PostBuild = async () => {
  const options = getCLIOptions()
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
      // Set `outdir` as an alternative (`options.outdir || outdir`)
      console.log(
        `${options.entry || options._.join(', ')} built successfully on ${options.outdir}`
      )
      rl.close()
      resolve()
    }
  })
}

export { postBuild }
