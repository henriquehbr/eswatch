import minimist from 'minimist'
import type { CLIFlags } from '@eswatch/types'

const getCLIOptions = () => {
  const options = minimist<CLIFlags>(process.argv.slice(2))
  return options
}

export default getCLIOptions