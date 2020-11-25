import type { ParsedArgs } from 'minimist'

type PostBuild = () => Promise<void>

type CLIFlags = ESWatchFlags & ESBuildFlags & ParsedArgs

interface ESWatchFlags {
  watch: string | readonly string[]
  clear?: boolean
  entry: string
  run?: boolean
  standalone?: boolean
  version?: boolean
}

interface ESBuildFlags {
  bundle?: boolean
  external?: string[]
  platform?: 'browser' | 'node'
  format?: 'cjs' | 'esm' | 'iife'
  splitting: boolean
  outdir: string
  outext?: string
  minify?: boolean
}

export { PostBuild, CLIFlags, ESWatchFlags, ESBuildFlags }
