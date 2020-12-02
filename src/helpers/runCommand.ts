import { spawn } from 'child_process'
import type { ChildProcess } from 'child_process'
import type { CLIFlags } from '@eswatch/types'

type RunOutput = (options: CLIFlags) => ChildProcess

const runCommand: RunOutput = options => {
  const commandToRun =
    typeof options.run === 'string'
      ? options.run
      : `node --experimental-specifier-resolution=node ${options.outdir}`
  const [commandName] = commandToRun.split(' ')
  const commandParameters = commandToRun.split(' ').slice(1)
  // Consider replacing this `spawn` with a `fork`
  const childProcess = spawn(commandName, commandParameters, { stdio: 'inherit' })
  return childProcess
}

export default runCommand
