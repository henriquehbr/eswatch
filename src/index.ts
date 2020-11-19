import minimist from 'minimist'
import type { CLIFlags } from './types'
// This must me converted into a dynamic import
import watchAndBuild from './watchAndBuild'

const options = minimist<CLIFlags>(process.argv.slice(2))

if (options.version) {
  import('./displayVersion').then(({ default: displayVersion }) => displayVersion())
} else {
  /**
   * Consider moving this line to watchAndBuild, but first check if
   * only `watchAndBuild()` function is run
   */
  import('./validateEntryPoints').then(({ default: validateEntryPoints }) =>
    validateEntryPoints(options)
  )

  options.watch
    ? import('chokidar').then(({ default: chokidar }) =>
        chokidar
          .watch(options.watch)
          .on('ready', async () => watchAndBuild(options))
          .on('change', async () => watchAndBuild(options))
      )
    : watchAndBuild(options)
}
