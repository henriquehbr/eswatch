import { existsSync } from 'fs'
import type { CLIFlags } from 'types'

type ValidateEntryPoints = (options: Readonly<CLIFlags>) => void

const validateEntryPoints: ValidateEntryPoints = options => {
  const missingEntryPoint = options._.length < 1 && !options.entry
  const invalidEntryPoint = !options._.every(existsSync)
  if (missingEntryPoint) throw new Error('Missing entry point')
  else if (invalidEntryPoint) throw new Error('Entry point not found')
}

export default validateEntryPoints
