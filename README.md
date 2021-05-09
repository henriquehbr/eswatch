# eswatch

A watcher utility for esbuild

> **Disclaimer:** this project is not being actively maintained anymore, for similar tools consider checking out [`estrella`](https://github.com/rsms/estrella) or even esbuild watch mode [thread](https://github.com/evanw/esbuild/issues/21) for more information or possible alternatives

## Command-line usage

```
Usage:
  $ eswatch <...entry-points>

Commands:
  <...entry-points>  Build files with esbuild

For more info, run any command with the `--help` flag:
  $ eswatch --help

Options:
  --watch <...files>      Directory/files to watch (supports glob patterns)
  --standalone            Include dependencies on bundle
  --clear                 Clear screen on each reload
  --run [entry]           Entry point for the build
  --keepfiles             Don't delete files from the target output directory before build
  --bundle                Bundle all dependencies into the output files
  --platform <platform>   Platform target (browser | node, default browser)
  --minify                Remove whitespace, shorten identifiers and syntax
  --external <module>     Exclude specific modules from the bundle
  --format <format>       Output format (iife | cjs | esm, no default when not bundling
                          otherwise, default is iife when platform is browser and cjs when
                          platform is node)
  --splitting             Enable code splitting (currently only works for esm)
  --outdir <outdir>       The output directory (for multiple entry points)
  --outext <outext>       Use a custom output extension instead of ".js"
  -h, --help              Display this message
  -v, --version           Display version number
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b feat/my-new-feature`
3. Commit your changes: `git commit -am 'feat: Add some feature'`
4. Push to the branch: `git push origin feat/my-new-feature`
5. Submit a pull request :D
