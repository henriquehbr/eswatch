import { parseOptions, validateEntryPoints } from '@eswatch/helpers'
import type { CLIFlags, ESBuildFlags } from '@eswatch/types'

type GetEsbuildConfig = (entryPoints: string[], options: CLIFlags) => Promise<ESBuildFlags>

const getEsbuildConfig: GetEsbuildConfig = async (entryPoints, options) => {
  const validatedEntryPoints = await validateEntryPoints(entryPoints)
  const { external, outExtension, outdir } = await parseOptions(options)
  return {
    outdir,
    outExtension,
    entryPoints: validatedEntryPoints,
    bundle: options.bundle,
    format: options.format,
    incremental: options.incremental,
    minify: options.minify,
    platform: options.platform,
    ...(options.bundle && { external, splitting: options.splitting })
  }
}

export { getEsbuildConfig }
