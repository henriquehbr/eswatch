import esbuild from 'esbuild'
import chokidar from 'chokidar'
import type { EntryPoints, CLIFlags } from '@eswatch/types'
import { getEsbuildConfig } from '@eswatch/helpers'
import { postBuild } from './postBuild'

const executeBuildSteps = async (buildSteps: any[]) => {
  for (const buildStep of buildSteps) await buildStep()
}

const watch = async (entryPoints: EntryPoints, options: CLIFlags) => {
  const esbuildConfig = await getEsbuildConfig(entryPoints, options)
  const esbuildService = await esbuild.startService()
  const watchStep = esbuildService.build.bind(this, esbuildConfig)
  const postBuildStep = postBuild.bind(this, entryPoints, options)
  const buildSteps = [watchStep, postBuildStep]
  chokidar
    .watch(entryPoints)
    .on('ready', async () => await executeBuildSteps(buildSteps))
    .on('change', async () => await executeBuildSteps(buildSteps))
}

export { watch }
