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
  --platform    Platform target
  --minify      Remove whitespace, shorten indentifiers and syntax
  --external    Exclude specific modules from the bundle
  --format      Output format
  --splitting   Enable code splitting
  --outdir      The output directory (for multiple entry points)
```
