import typescript from 'rollup-plugin-typescript2'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import { terser } from 'rollup-plugin-terser'

/** @type {import('rollup').RollupOptions} */
const options = {
  input: 'build/index.js',
  output: {
    format: 'es',
    name: 'app',
    dir: 'build'
  },
  plugins: [typescript(), resolve(), commonjs(), json(), terser()],
  external: ['inquirer'],
  watch: {
    clearScreen: true
  }
}

export default options
