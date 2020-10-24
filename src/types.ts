import type { ParsedArgs } from 'minimist'

export type CLIFlags = ESWatchFlags & ESBuildFlags & ParsedArgs

export interface ESWatchFlags {
  watch: string | readonly string[]
  clear?: boolean
  entry: string
  run?: boolean
}

export interface ESBuildFlags {
  bundle: boolean
  external: string[]
  format: 'cjs' | 'esm' | 'iife'
  splitting: boolean
  outdir?: string
}
