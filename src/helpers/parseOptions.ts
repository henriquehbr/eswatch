import path from 'path'
import { fileURLToPath } from 'url'
import { builtinModules } from 'module'
import { getCLIOptions } from 'helpers'

interface ParsedOptions {
  splitting: boolean
  incremental: boolean
  outExtension: { '.js': string }
  outdir: string
  external: string[]
}

type ParseOptions = () => Promise<ParsedOptions>

const dirname = path.dirname(fileURLToPath(import.meta.url))

// TODO: remove `options.entry` on 1.0
const parseOptions: ParseOptions = async () => {
  const options = getCLIOptions()
  const splitting = options.format === 'esm' ? options.splitting : false
  const incremental = options.watch ? true : false
  const outExtension = options.outext ? { '.js': options.outext } : { '.js': '.js' }
  const outdir = options.outdir ?? path.join(dirname, 'build')
  const external = [...builtinModules]
  if (!options.standalone) {
    const { getDependencies } = await import('helpers')
    external.push(...(await getDependencies()))
  }
  options.external && external.push(...options.external)
  return { splitting, incremental, outExtension, outdir, external }
}

export default parseOptions
