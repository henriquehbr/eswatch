#!/usr/bin/env node
import { initEsbuild } from '@eswatch/initEsbuild'
import { getCLIOptions } from '@eswatch/helpers'

const main = async () => {
  const options = getCLIOptions()
  if (options.version) {
    const { displayVersion } = await import('./displayVersion')
    return displayVersion()
  }
  const buildSteps = await initEsbuild()
  options.watch
    ? (await import('chokidar'))
        .watch(options.watch)
        .on('ready', buildSteps)
        .on('change', buildSteps)
    : buildSteps
}

main()
