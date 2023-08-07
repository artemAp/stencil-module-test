import ts from 'rollup-plugin-ts';
import { cleandir } from 'rollup-plugin-cleandir';
import copy from 'rollup-plugin-copy';

export default {
  input: 'output/utils/index.ts',
  output: [
    {
      file: 'utils/index.cjs.js',
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'utils/index.js',
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    cleandir('./utils'),
    cleandir('./styles'),
    ts({
      tsconfig: './tsconfig-rollup.json',
    }),
    copy({
      targets: [
        {
          src: './dist/stencil-module-test/stencil-module-test.css',
          dest: './styles',
        },
      ],
    }),
  ],
};
