#!/usr/bin/env node
import { build } from './build'
import getOptions from './getOptions'

const main = async () => {
  const options = getOptions()
  if (options.version) {
    const { displayVersion } = await import('./displayVersion')
    return displayVersion()
  }
  await build(options)
}

main()
