import esbuild from 'esbuild'
import rimraf from 'rimraf'
import { postBuild } from '@eswatch/postBuild'
import { getCLIOptions, getEsbuildConfig } from '@eswatch/helpers'

const initEsbuild = async () => {
  const options = getCLIOptions()
  // Change return value of getEsbuildConfig to local types
  const esbuildConfig = await getEsbuildConfig()
  !options.keepfiles && rimraf.sync(esbuildConfig.outdir)
  const esbuildService = options.watch && (await esbuild.startService())
  const buildOrWatch = (esbuildService ? esbuildService.build : esbuild.build).bind(
    this,
    esbuildConfig
  )
  const buildSteps: Promise<any>[] = [buildOrWatch(), postBuild()]
  return async () => await Promise.all(buildSteps)
}

export { initEsbuild }
