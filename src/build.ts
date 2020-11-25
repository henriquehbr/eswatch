import esbuild from 'esbuild'
import { postBuild } from 'postBuild'
import { getEsbuildConfig } from 'getEsbuildConfig'
import { CLIFlags } from 'types'

type Build = (options: CLIFlags) => Promise<void>

const build: Build = async options => {
  const esbuildConfig = await getEsbuildConfig(options)
  const esbuildService = options.watch && (await esbuild.startService())
  if (esbuildService) {
    const chokidar = await import('chokidar')
    const { rebuild } = await esbuildService.build({ ...esbuildConfig, incremental: true })
    chokidar
      .watch(options.watch)
      .on('ready', async () => await Promise.all([rebuild!(), postBuild()]))
      .on('change', async () => await Promise.all([rebuild!(), postBuild()]))
  } else {
    await esbuild.build(esbuildConfig)
    await postBuild()
  }
}

export { build }
