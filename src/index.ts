#!/usr/bin/env node
import { build } from 'build'
import getCLIOptions from 'getOptions'

const main = async () => {
  const options = getCLIOptions()
  if (options.version) {
    const { displayVersion } = await import('./displayVersion')
    return displayVersion()
  }
  await build(options)
}

main()
