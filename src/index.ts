#!/usr/bin/env node
import type { CLIFlags } from './types'
import minimist from 'minimist'
import { validateEntryPoints } from './validateEntryPoints'
import { watchAndBuild } from './watchAndBuild'

const options = minimist<CLIFlags>(process.argv.slice(2))

validateEntryPoints(options)

options.watch
  ? import('chokidar')
    .then(({ default: chokidar }) =>
      chokidar
        .watch(options.watch)
        .on('ready', async () => watchAndBuild(options))
        .on('change', async () => watchAndBuild(options))
    )
  : watchAndBuild(options)
