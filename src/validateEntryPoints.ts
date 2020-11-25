import isGlob from 'is-glob'
import { globParser } from 'helpers'
import { fileExists } from 'helpers'
import type { CLIFlags } from 'types'

type ValidateEntryPoints = (options: Readonly<CLIFlags>) => Promise<string[]>

const validateEntryPoints: ValidateEntryPoints = async options => {
  const missingEntryPoint = options._.length < 1 && !options.entry
  if (missingEntryPoint) throw new Error('Missing entry point')
  const unparsedEntryPoints = options.entry ? [options.entry] : options._
  const parseGlobEntries = unparsedEntryPoints.map(async entryPoint =>
    isGlob(entryPoint) ? await globParser(entryPoint) : await fileExists(entryPoint)
  )
  const parsedEntryPoints = await Promise.all(parseGlobEntries)
  const flattenedEntryPoints = parsedEntryPoints.flat()
  return flattenedEntryPoints
}

export default validateEntryPoints
