import path from 'path'
import slash from 'slash'
import fileExists from './fileExists'
import isGlob from 'is-glob'
import glob from 'tiny-glob'
import type { CLIFlags } from 'types'

type ValidateEntryPoints = (options: Readonly<CLIFlags>) => Promise<string[]>

// Move this to a separated util
const globParser = async (globPattern: string) => {
  const normalizedPath = path.normalize(globPattern)
  const forwardSlashedPath = slash(normalizedPath)
  const globFiles = await glob(forwardSlashedPath)
  const forwardSlashedGlobFiles = globFiles.map(slash)
  return forwardSlashedGlobFiles
}

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
