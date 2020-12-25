import esbuild from 'esbuild'
import rimraf from 'rimraf'
import { postBuild } from '@eswatch/postBuild'
import type { CLIFlags, EntryPoints } from '@eswatch/types'
import { getEsbuildConfig } from '@eswatch/helpers/getEsbuildConfig'

const executeBuildSteps = async (buildSteps: any[]) => {
  for (const buildStep of buildSteps) await buildStep()
}

const initEsbuild = async (entryPoints: EntryPoints, options: CLIFlags) => {
  const esbuildConfig = await getEsbuildConfig(entryPoints, options)
  !options.keepfiles && rimraf.sync(esbuildConfig.outdir)
  const esbuildService = options.watch && (await esbuild.startService())
  const buildOrWatchStep = (esbuildService || esbuild).build.bind(this, esbuildConfig)
  const postBuildStep = postBuild.bind(this, entryPoints, options)
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
