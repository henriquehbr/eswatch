#!/usr/bin/env node
// This must me converted into a dynamic import
import watchAndBuild from './watchAndBuild'
import getOptions from './getOptions'

const options = getOptions()

const main = async () => {
  if (options.version) {
    const { displayVersion } = await import('./displayVersion')
    displayVersion()
  } else if (options.watch) {
    const chokidar = await import('chokidar')
    chokidar
      .watch(options.watch)
      .on('ready', async () => watchAndBuild())
      .on('change', async () => watchAndBuild())
  } else {
    watchAndBuild()
  }
}

main()
