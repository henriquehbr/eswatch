import path from 'path'
import { ChildProcess, spawn } from 'child_process'
import { getCLIOptions } from '@eswatch/helpers'

type RunCommand = (entryPoints: string[]) => ChildProcess

const options = getCLIOptions()

const isIndexFile = (file: string) => {
  const filename = path.parse(file).name
  return filename === 'index'
}

const getScriptWithExtension = (file: string) => {
  const filename = path.parse(file).name
  const extension = options.outext || '.js'
  const filenameWithExtension = filename + extension
  const filePath = path.resolve(options.outdir, filenameWithExtension)
  return filePath
}

const getScriptToBeRan = (entryPoints: string[]): any => {
  const indexFile = entryPoints.find(isIndexFile)
  const scriptToBeRan = !indexFile ? entryPoints[0] : indexFile
  return getScriptWithExtension(scriptToBeRan)
}

const getCommandToBeRan = (entryPoints: string[]) => {
  if (typeof options.run === 'string') {
    return options.run
  } else {
    const scriptToRun = getScriptToBeRan(entryPoints)
    return 'node ' + scriptToRun
  }
}

const runCommand: RunCommand = entryPoints => {
  const commandToRun = getCommandToBeRan(entryPoints)
  console.log(commandToRun)
  const [commandName] = commandToRun.split(' ')
  const commandParameters = commandToRun.split(' ').slice(1)
  // Consider replacing this `spawn` with a `fork` when --run is not string
  const childProcess = spawn(commandName, commandParameters, { stdio: 'inherit' })
  return childProcess
}

export default runCommand
