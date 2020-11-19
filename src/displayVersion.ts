import readline from 'readline'
import esbuild from 'esbuild'
import eswatch from '../package.json'

const displayVersion = () => {
  // Investigate possible optimizations on this
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })
  console.log(`eswatch version ${eswatch.version}`)
  console.log(`esbuild version ${esbuild.version}`)
  rl.close()
}

export default displayVersion
