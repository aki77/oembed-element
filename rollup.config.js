const pkg = require('./package.json')
const commonjs = require('rollup-plugin-commonjs')
import pluginNodeResolve from '@rollup/plugin-node-resolve'
import nodePolyfills from 'rollup-plugin-polyfill-node'

export default [
  {
    external: ['minimatch'],
    input: 'dist/o-embed-element.js',
    output: {
      file: pkg['module'],
      format: 'es'
    },
    plugins: [pluginNodeResolve()]
  },
  {
    input: 'dist/o-embed-element.js',
    output: {
      file: 'dist/bundle.js',
      format: 'es',
    },
    plugins: [
      nodePolyfills(),
      pluginNodeResolve({
        browser: true,
        preferBuiltins: false,
      }),
      commonjs()
    ]
  }
]
