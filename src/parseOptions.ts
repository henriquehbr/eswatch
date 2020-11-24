import path from 'path'
import { fileURLToPath } from 'url'
import { builtinModules } from 'module'
import type { CLIFlags } from './types'

interface ParsedOptions {
  splitting: boolean
  outExtension: { '.js': string }
  outdir: string
  external: string[]
}

type ParseOptions = (options: CLIFlags) => Promise<ParsedOptions>

const dirname = path.dirname(fileURLToPath(import.meta.url))

// TODO: remove `options.entry` on 1.0
const parseOptions: ParseOptions = async options => {
  const splitting = options.format === 'esm' ? options.splitting : false
  const outExtension = options.outext ? { '.js': options.outext } : { '.js': '.js' }
  const outdir = options.outdir ?? path.join(dirname, 'build')
  const external = [...builtinModules]
  if (!options.standalone) {
    const { getDependencies } = await import('./getDependencies')
    external.push(...(await getDependencies()))
  }
  options.external && external.push(...options.external)
  return { splitting, outExtension, outdir, external }
}

export default parseOptions
