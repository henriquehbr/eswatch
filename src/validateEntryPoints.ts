import path from 'path'
import slash from 'slash'
import { existsSync } from 'fs'
import isGlob from 'is-glob'
import glob from 'tiny-glob'
import type { CLIFlags } from 'types'

type ValidateEntryPoints = (options: Readonly<CLIFlags>) => Promise<string[]>

type FileExists = (path: string) => Promise<string>

// Move this to a separated util
const globParser = async (globPattern: string) => {
  const normalizedPath = path.normalize(globPattern)
  const forwardSlashedPath = slash(normalizedPath)
  const globFiles = await glob(forwardSlashedPath)
  const forwardSlashedGlobFiles = globFiles.map(slash)
  return forwardSlashedGlobFiles
}

// Move this to a separated util
const fileExists: FileExists = async path => {
  try {
    return await new Promise((resolve, reject) =>
      existsSync(path) ? resolve(path) : reject(`Couldn't find ${path} entry point`)
    )
  } catch (error) {
    throw new Error(error)
  }
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
