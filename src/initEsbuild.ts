import esbuild from 'esbuild'
import type { BuildResult } from 'esbuild'
import { postBuild } from '@eswatch/postBuild'
import { getCLIOptions, getEsbuildConfig } from '@eswatch/helpers'

// Simplify this type
type InitEsbuild = () => Promise<() => Promise<[BuildResult, void]>>

const options = getCLIOptions()

const initEsbuild: InitEsbuild = async () => {
  const esbuildConfig = await getEsbuildConfig()
  const esbuildService = options.watch && (await esbuild.startService())
  const build = esbuildService ? esbuildService.build : esbuild.build
  return async () => await Promise.all([build(esbuildConfig), postBuild()])
}

export { initEsbuild }