// rollup.config.js
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import terser from '@rollup/plugin-terser'

export default {
  input: 'src/extension.js',
  output: {
    file: 'dist/extension.js',
    format: 'cjs',
    exports: 'auto'
  },
  plugins: [resolve(), commonjs(), terser()]
}
