# eswatch

A watcher utility for esbuild

> This project is in very early development stage, it's not advised to use it in production, at the moment, it's only a proof-of-concept

## Command-line usage

```
Usage:
  eswatch [options] [entry points]

eswatch options:
  --entry       Entry point for the build
  --watch       Directory/files to watch (supports glob patterns)
  --standalone  Include dependencies on bundle
  --clear       Clear screen on each reload
  --run         Execute the output script right after each build

esbuild options:
  --bundle      Bundle all dependencies into the output files
  --platform    Platform target (browser | node, default browser)
  --minify      Remove whitespace, shorten indentifiers and syntax
  --external    Exclude specific modules from the bundle
  --format      Output format (iife | cjs | esm, no default when not
                bundling, otherwise default is iife when platform
                is browser and cjs when platform is node)
  --splitting   Enable code splitting (currently only works for esm)
  --outdir      The output directory (for multiple entry points)
```
