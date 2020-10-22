import type { ParsedArgs } from 'minimist'

export interface CLIFlags extends ParsedArgs {
  bundle: boolean
  external: string[]
  format: 'cjs' | 'esm' | 'iife'
  splitting: boolean
  watch: string | readonly string[]
  clear?: boolean
  entry: string
  outdir?: string
  run?: boolean
}
