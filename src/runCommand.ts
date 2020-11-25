import { spawn } from 'child_process'
import type { ChildProcess } from 'child_process'
import type { CLIFlags } from './types'

type RunOutput = (options: CLIFlags) => ChildProcess

const runCommand: RunOutput = options => {
  const commandToRun = typeof options.run === 'string' ? options.run : `node ${options.outdir}`
  const [commandName] = commandToRun.split(' ')
  const commandParameters = commandToRun.split(' ').slice(1)
  const childProcess = spawn(commandName, commandParameters, { stdio: 'inherit' })
  return childProcess
}

export default runCommand
