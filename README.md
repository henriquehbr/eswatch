# ts-node-boilerplate

A fully-structured project structure for writing Node with TypeScript

## Start

In order to get started, just run `yarn` (or npm) to install all the required dependencies to run your application (All the core dependencies are `devDependencies`, avoiding unnecessary code and keeping your bundle size as small as possible)

## Development

For a quick and lean development experience, you can run `yarn dev` for a lightning-fast reloading utility to preview the changes on your application almost instantly

## Build

Run `yarn build` to lint, transpile, and minify your entire application to production-ready vanilla JavaScript

## Lint

In order to check if your code is properly optimized, formatted and matches ESLint rules, run `yarn lint`, it will scan all files with a `.ts` extension on `src`, and also, will run the TypeScript Compiler (`tsc`) to check for inconsistencies on your code
