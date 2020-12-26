import { ChildProcess, spawn } from 'child_process'
import { getScriptToBeRan } from '@eswatch/helpers/getScriptToBeRan'
import type { CLIFlags } from '@eswatch/types'

type RunCommand = (options: CLIFlags) => ChildProcess

const runCommand: RunCommand = options => {
  const commandToRun =
    typeof options.run === 'string' ? options.run : 'node ' + getScriptToBeRan(options)
  const [commandName] = commandToRun.split(' ')
  const commandParameters = commandToRun.split(' ').slice(1)
  // Consider replacing this `spawn` with a `fork` when --run is not string
  const childProcess = spawn(commandName, commandParameters, { stdio: 'inherit' })
  return childProcess
}

export { runCommand }
