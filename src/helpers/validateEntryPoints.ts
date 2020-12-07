import isGlob from 'is-glob'
import { globParser, fileExists } from '@eswatch/helpers'

type ValidateEntryPoints = (entryPoints: string[]) => Promise<string[] | unknown>

const validateEntryPoints: ValidateEntryPoints = async entryPoints => {
  //const missingEntryPoint = options._.length < 1 && !options.entry
  //if (missingEntryPoint) throw new Error('Missing entry point')
  //const unparsedEntryPoints = options.entry ? [options.entry] : options._
  const parseGlobEntries = entryPoints.map(async entryPoint =>
    isGlob(entryPoint) ? await globParser(entryPoint) : await fileExists(entryPoint)
  )
  const parsedEntryPoints = await Promise.all(parseGlobEntries)
  const flattenedEntryPoints = parsedEntryPoints.flat()
  return flattenedEntryPoints
}

export default validateEntryPoints
