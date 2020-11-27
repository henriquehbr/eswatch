import { getCLIOptions, parseOptions } from '@eswatch/helpers'
import { ESBuildFlags } from '@eswatch/types'

type GetEsbuildConfig = () => Promise<ESBuildFlags>

const getEsbuildConfig: GetEsbuildConfig = async () => {
  const options = getCLIOptions()
  const { entryPoints, external, outExtension, outdir, splitting } = await parseOptions()
  return {
    entryPoints,
    outdir,
    outExtension,
    bundle: options.bundle,
    format: options.format,
    incremental: options.incremental,
    minify: options.minify,
    platform: options.platform,
    ...(options.bundle && { external, splitting })
  }
}

export { getEsbuildConfig }
