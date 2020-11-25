import esbuild from 'esbuild'
import rimraf from 'rimraf'
import { postBuild } from '@eswatch/postBuild'
import { getCLIOptions, getEsbuildConfig } from '@eswatch/helpers'

const options = getCLIOptions()

const initEsbuild = async () => {
  const esbuildConfig = await getEsbuildConfig()
  const esbuildService = options.watch && (await esbuild.startService())
  const build = esbuildService ? esbuildService.build : esbuild.build
  return async () =>
    await Promise.all([rimraf.sync(options.outdir), build(esbuildConfig), postBuild()])
}

export { initEsbuild }
