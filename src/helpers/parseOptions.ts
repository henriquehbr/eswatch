import path from 'path'
import { fileURLToPath } from 'url'
import { builtinModules } from 'module'
import type { CLIFlags } from '@eswatch/types'

interface ParsedOptions {
  outExtension: { '.js': string }
  outdir: string
  external: string[]
}

type ParseOptions = (options: CLIFlags) => Promise<ParsedOptions>

const dirname = path.dirname(fileURLToPath(import.meta.url))

const parseOptions: ParseOptions = async options => {
  const outExtension = options.outext ? { '.js': options.outext } : { '.js': '.js' }
  // Look for a better-looking alternative for this
  const outdirPaths = [options.outdir || [dirname, 'build']].flat()
  const outdir = path.resolve(...outdirPaths)
  const external = [...builtinModules]
  if (!options.standalone) {
    const { getDependencies } = await import('@eswatch/helpers')
    external.push(...(await getDependencies()))
  }
  options.external && external.push(...options.external)
  return { outExtension, outdir, external }
}

export { parseOptions }
