import validateEntryPoints from './validateEntryPoints'
import parseOptions from './parseOptions'
import type { BuildOptions } from 'esbuild'
import type { CLIFlags } from './types'

type GetEsbuildConfig = (options: CLIFlags) => Promise<BuildOptions>

const getEsbuildConfig: GetEsbuildConfig = async options => {
  const entryPoints = await validateEntryPoints(options)
  const { external, outExtension, outdir, splitting } = await parseOptions(options)
  return {
    bundle: options.bundle,
    entryPoints,
    outExtension,
    format: options.format,
    minify: options.minify,
    outdir,
    platform: options.platform,
    ...(options.bundle && {
      external,
      splitting
    })
  }
}

export { getEsbuildConfig }
