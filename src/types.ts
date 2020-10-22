import type { ParsedArgs } from 'minimist'

export interface CLIFlags extends ParsedArgs {
  watch: string | readonly string[]
  clear?: boolean
  entry: string
  outdir?: string
  run?: boolean
}
