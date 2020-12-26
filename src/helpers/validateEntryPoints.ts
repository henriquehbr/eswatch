import isGlob from 'is-glob'
import { globParser } from './globParser'
import { fileExists } from './fileExists'

type ValidateEntryPoints = (entryPoints: string[]) => Promise<string[]>

const parseGlob = async (entryPoint: string) =>
  isGlob(entryPoint) ? await globParser(entryPoint) : await fileExists(entryPoint)

const validateEntryPoints: ValidateEntryPoints = async entryPoints => {
  const parseGlobEntries = entryPoints.map(parseGlob)
  const parsedEntryPoints = await Promise.all(parseGlobEntries)
  const flattenedEntryPoints = parsedEntryPoints.flat()
  return flattenedEntryPoints
}

export { validateEntryPoints }
