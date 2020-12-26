import { isIndexFile } from '@eswatch/helpers/isIndexFile'
import { getScriptWithExtension } from '@eswatch/helpers/getScriptWithExtension'
import type { CLIFlags } from '@eswatch/types'

const getScriptToBeRan = (options: CLIFlags) => {
  const indexFile = options.entryPoints.find(isIndexFile)
  const scriptToBeRan = indexFile || options.entryPoints[0]
  const scriptWithExtension = getScriptWithExtension(scriptToBeRan, options)
  return scriptWithExtension
}

export { getScriptToBeRan }
