import nodeResolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import json from '@rollup/plugin-json';
import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';

const pkg = require('./package.json');

const noDeclarationFiles = { compilerOptions: { declaration: false } };

module.exports = [
  // CommonJS
  {
    input: 'src/index.ts',
    output: { file: pkg.main, format: 'cjs', indent: false },
    external: [
      ...Object.keys(pkg.peerDependencies || {}),
    ],
    plugins: [
      nodeResolve({
        extensions: ['.ts'],
      }),
      json(),
      typescript({ useTsconfigDeclarationDir: true }),
    ],
  },
  // ES
  {
    input: 'src/index.ts',
    output: { file: pkg.module, format: 'es', indent: false },
    external: [
      ...Object.keys(pkg.peerDependencies || {}),
    ],
    plugins: [
      nodeResolve({
        extensions: ['.ts'],
      }),
      json(),
      typescript({ useTsconfigDeclarationDir: true }),
    ],
  },
  // UMD production
  {
    input: 'src/index.ts',
    output: {
      file: pkg.unpkg,
      format: 'umd',
      name: pkg.pkgName,
      indent: false,
    },
    plugins: [
      nodeResolve({
        extensions: ['.ts'],
      }),
      json(),
      typescript({ tsconfigOverride: noDeclarationFiles }),
      replace({
        'process.env.NODE_ENV': JSON.stringify('production'),
      }),
      terser({
        compress: {
          'pure_getters': true,
          unsafe: true,
          'unsafe_comps': true,
          warnings: false,
        },
      }),
    ],
  },
];
