import { parseOptions } from './parseOptions'
import { validateEntryPoints } from './validateEntryPoints'
import type { CLIFlags, ESBuildFlags } from '@eswatch/types'

type GetEsbuildConfig = (options: CLIFlags) => Promise<ESBuildFlags>

const getEsbuildConfig: GetEsbuildConfig = async options => {
  const validatedEntryPoints = await validateEntryPoints(options.entryPoints)
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
