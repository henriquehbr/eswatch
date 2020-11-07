import type { ParsedArgs } from 'minimist'

type WatchAndBuild = (options: Readonly<CLIFlags>) => Promise<void>

type CLIFlags = ESWatchFlags & ESBuildFlags & ParsedArgs

interface ESWatchFlags {
  watch: string | readonly string[]
  clear?: boolean
  entry: string
  run?: boolean
  standalone?: boolean
}

interface ESBuildFlags {
  bundle?: boolean
  external?: string[]
  platform?: 'browser' | 'node'
  format?: 'cjs' | 'esm' | 'iife'
  splitting: boolean
  outdir?: string
  minify?: boolean
}

export { WatchAndBuild, CLIFlags, ESWatchFlags, ESBuildFlags }
