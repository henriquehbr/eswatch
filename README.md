# eswatch

A watcher utility for esbuild

> This project is in very early development stage, it's not advised to use it in production, at the moment, it's only a proof-of-concept

## Command line flags

| Flag       | Type                  | Description                                       | Default                          | Required |
| ---------- | --------------------- | ------------------------------------------------- | -------------------------------- | -------- |
| `--watch`  | `string`              | Directory/files to watch (supports glob patterns) | `''`                             | ❌       |
| `--clear`  | `boolean`             | Clear screen on each reload                       | `false`                          | ❌       |
| `--entry`  | `string`              | Entry point for the build                         |                                  | ✔️       |
| `--outdir` | `string`              | The output directory (for multiple entry points)  | `node_modules/eswatch/lib/build` | ❌       |
| `--run`    | `boolean` or `string` | Execute the output script right after each build  | `false`                          | ❌       |
