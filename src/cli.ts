#!/usr/bin/env node
import oneline from 'oneline'
import { cac } from 'cac'
import { version } from '../package.json'

const cli = cac('eswatch')

cli
  .command('<...entry-points>', 'Build files with esbuild')
  .action(async (entryPoints, options) => {
    const { initEsbuild } = await import('./initEsbuild')
    await initEsbuild(entryPoints, options)
  })

cli.option('--watch <...files>', 'Directory/files to watch (supports glob patterns)')
cli.option('--standalone', 'Include dependencies on bundle')
cli.option('--clear', 'Clear screen on each reload')
cli.option('--run [entry]', 'Entry point for the build')
cli.option('--keepfiles', "Don't delete files from the target output directory before build")
cli.option('--bundle', 'Bundle all dependencies into the output files')
// Consider researching about conditional default values for cacjs
cli.option('--platform <platform>', 'Platform target (browser | node, default browser)')
cli.option('--minify', 'Remove whitespace, shorten identifiers and syntax')
cli.option('--external <module>', 'Exclude specific modules from the bundle')
cli.option(
  '--format <format>',
  oneline`
    Output format (iife | cjs | esm, no default when not bundling, otherwise, default
    is iife when platform is browser and cjs when platform is node)
  `
)
cli.option('--splitting', 'Enable code splitting (currently only works for esm)')
cli.option('--outdir <outdir>', 'The output directory (for multiple entry points)')
cli.option('--outext <outext>', 'Use a custom output extension instead of ".js"')

cli.help()
cli.version(version)

cli.parse()
