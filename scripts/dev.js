import chokidar from 'chokidar'
import esbuild from 'esbuild'
import readline from 'readline'
import { fork } from 'child_process'

let child

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const liveReload = async () => {
  child && child.kill()
  const service = await esbuild.startService()
  console.clear()
  await service.build({
    entryPoints: ['./src/index.ts'],
    outdir: './build'
  })
  return new Promise(resolve => {
    rl.pause()
    child = fork('build', { stdio: 'inherit' })
    child.on('close', () => {
      rl.resume()
      resolve()
    })
  })
}

chokidar
  .watch('./src')
  .on('ready', async () => liveReload())
  .on('change', async () => liveReload())
