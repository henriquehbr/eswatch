import path from 'path'
import type { CLIFlags } from '@eswatch/types'

const getScriptWithExtension = (file: string, options: CLIFlags) => {
  const filename = path.parse(file).name
  const extension = options.outext || '.js'
  const filenameWithExtension = filename + extension
  const filePath = path.resolve(options.outdir, filenameWithExtension)
  return filePath
}

export { getScriptWithExtension }
