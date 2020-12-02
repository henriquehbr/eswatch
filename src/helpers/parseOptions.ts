import path from 'path'
import { fileURLToPath } from 'url'
import { builtinModules } from 'module'
import { getCLIOptions, validateEntryPoints } from '@eswatch/helpers'

interface ParsedOptions {
  entryPoints: string[]
  outExtension: { '.js': string }
  outdir: string
  external: string[]
}

type ParseOptions = () => Promise<ParsedOptions>

const dirname = path.dirname(fileURLToPath(import.meta.url))

// TODO: remove `options.entry` on 1.0
const parseOptions: ParseOptions = async () => {
  const options = getCLIOptions()
  const entryPoints = await validateEntryPoints(options)
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
  return { entryPoints, outExtension, outdir, external }
}

export default parseOptions
