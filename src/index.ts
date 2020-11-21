#!/usr/bin/env node
import getOptions from './getOptions'

const options = getOptions()

const main = async () => {
  if (options.version) {
    const { displayVersion } = await import('./displayVersion')
    return displayVersion()
  }
  const { watchAndBuild } = await import('./watchAndBuild')
  options.watch
    ? (await import('chokidar'))
        .watch(options.watch)
        .on('ready', async () => watchAndBuild())
        .on('change', async () => watchAndBuild())
    : watchAndBuild()
}

main()
