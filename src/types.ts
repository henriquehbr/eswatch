type CLIFlags = ESWatchFlags & ESBuildFlags

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
  incremental?: boolean
  platform?: 'browser' | 'node'
  format?: 'cjs' | 'esm' | 'iife'
  minify?: boolean
  outdir: string
  outext?: string
  splitting?: boolean
}

export { CLIFlags, ESWatchFlags, ESBuildFlags, EntryPoints }
