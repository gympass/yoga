import { defineConfig } from 'tsup';
import { replace } from 'esbuild-plugin-replace';
import svgr from '../../plugins/svgr-plugin';

export default defineConfig(options => {
  const native = options['--'].includes('native');

  return {
    entry: ['src/index.ts', 'src/**/*.ts', 'src/**/*.svg'],
    splitting: false,
    bundle: false,
    treeshake: true,
    minify: true,
    esbuildPlugins: [
      svgr({ native }),
      replace({
        include: /\.ts$/,
        values: {
          '.svg': '',
        },
      }),
    ],
    outExtension: () => ({
      js: native ? '.native.js' : '.js',
    }),
  };
});
