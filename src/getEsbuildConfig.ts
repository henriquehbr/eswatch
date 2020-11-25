import validateEntryPoints from 'validateEntryPoints'
import parseOptions from 'parseOptions'
import type { BuildOptions } from 'esbuild'
import getCLIOptions from 'getOptions'

type GetEsbuildConfig = () => Promise<BuildOptions>

const getEsbuildConfig: GetEsbuildConfig = async () => {
  const options = getCLIOptions()
  const entryPoints = await validateEntryPoints(options)
  const { external, incremental, outExtension, outdir, splitting } = await parseOptions()
  return {
    bundle: options.bundle,
    entryPoints,
    format: options.format,
    incremental,
    minify: options.minify,
    outdir,
    outExtension,
    platform: options.platform,
    ...(options.bundle && {
      external,
      splitting
    })
  }
}

export { getEsbuildConfig }
