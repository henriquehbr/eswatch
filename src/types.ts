import type { ParsedArgs } from 'minimist'

type CLIFlags = ESWatchFlags & ESBuildFlags & ParsedArgs

interface ESWatchFlags {
  watch: string | readonly string[]
  clear?: boolean
  entry: string
  run: boolean | string
  standalone?: boolean
  version?: boolean
  keepfiles?: boolean
}

interface ESBuildFlags {
  bundle?: boolean
  external?: string[]
  platform?: 'browser' | 'node'
  format?: 'cjs' | 'esm' | 'iife'
  splitting?: boolean
  outdir: string
  outext?: string
  minify?: boolean
}

export { CLIFlags, ESWatchFlags, ESBuildFlags }
