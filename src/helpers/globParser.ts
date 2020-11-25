import path from 'path'
import slash from 'slash'
import glob from 'tiny-glob'

const globParser = async (globPattern: string) => {
  const normalizedPath = path.normalize(globPattern)
  const forwardSlashedPath = slash(normalizedPath)
  const globFiles = await glob(forwardSlashedPath)
  const forwardSlashedGlobFiles = globFiles.map(slash)
  return forwardSlashedGlobFiles
}

export default globParser
