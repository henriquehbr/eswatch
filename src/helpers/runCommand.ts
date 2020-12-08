import path from 'path'
import { ChildProcess, spawn } from 'child_process'
import type { CLIFlags } from '@eswatch/types'

type RunCommand = (entryPoints: string[], options: CLIFlags) => ChildProcess

const isIndexFile = (file: string) => {
  const filename = path.parse(file).name
  return filename === 'index'
}

const getScriptWithExtension = (file: string, options: CLIFlags) => {
  const filename = path.parse(file).name
  const extension = options.outext || '.js'
  const filenameWithExtension = filename + extension
  const filePath = path.resolve(options.outdir, filenameWithExtension)
  return filePath
}

const getScriptToBeRan = (entryPoints: string[], options: CLIFlags): any => {
  const indexFile = entryPoints.find(isIndexFile)
  const scriptToBeRan = !indexFile ? entryPoints[0] : indexFile
  return getScriptWithExtension(scriptToBeRan, options)
}

const getCommandToBeRan = (entryPoints: string[], options: CLIFlags) => {
  if (typeof options.run === 'string') {
    return options.run
  } else {
    const scriptToRun = getScriptToBeRan(entryPoints, options)
    return 'node ' + scriptToRun
  }
}

const runCommand: RunCommand = (entryPoints, options) => {
  const commandToRun = getCommandToBeRan(entryPoints, options)
  const [commandName] = commandToRun.split(' ')
  const commandParameters = commandToRun.split(' ').slice(1)
  // Consider replacing this `spawn` with a `fork` when --run is not string
  const childProcess = spawn(commandName, commandParameters, { stdio: 'inherit' })
  return childProcess
}

export default runCommand
