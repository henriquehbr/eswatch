import esbuild from 'esbuild'
import rimraf from 'rimraf'
import { postBuild } from '@eswatch/postBuild'
import type { CLIFlags } from '@eswatch/types'
import { getEsbuildConfig } from '@eswatch/helpers/getEsbuildConfig'

const executeBuildSteps = async (buildSteps: Array<() => Promise<any>>) => {
  for (const buildStep of buildSteps) await buildStep()
}

const initEsbuild = async (options: CLIFlags) => {
  const esbuildConfig = await getEsbuildConfig(options)
  !options.keepfiles && rimraf.sync(esbuildConfig.outdir)
  const esbuildService = options.watch && (await esbuild.startService())
  const buildOrWatchStep = (esbuildService || esbuild).build.bind(this, esbuildConfig)
  const postBuildStep = postBuild.bind(this, options)
  const buildSteps = [buildOrWatchStep, postBuildStep]

  if (options.watch) {
    const chokidar = await import('chokidar')
    chokidar
      .watch(options.watch)
      .on('ready', async () => await executeBuildSteps(buildSteps))
      .on('change', async () => await executeBuildSteps(buildSteps))
  } else {
    await executeBuildSteps(buildSteps)
  }
}

export { initEsbuild }
