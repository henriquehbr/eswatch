import { existsSync } from 'fs'
import type { CLIFlags } from 'types'

export type ValidateEntryPoints = (options: CLIFlags) => void

export const validateEntryPoints: ValidateEntryPoints = options => {
  const missingEntryPoint = options._.length < 1 && !options.entry
  const invalidEntryPoint = !options._.every(entryPoint => existsSync(entryPoint))
  if (missingEntryPoint)
    throw new Error('Missing entry point')
  else if (invalidEntryPoint)
    throw new Error('Invalid entry point')
}
