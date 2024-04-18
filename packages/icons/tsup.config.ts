import { defineConfig } from 'tsup'
import svgr from './svgr-plugin'
import { replace } from 'esbuild-plugin-replace';

export default defineConfig( opts => {
  const { target } = opts.define || {};
  const ext = target === 'native' ? '.native.js' : '.js';

  return {
    name: "tsup",
    entry: [
    "src/index.ts",
    "src/**/*.ts",
    "src/**/*.svg"
    ],
    splitting: false,
    bundle: false,
    esbuildPlugins: [
      svgr({ target }),
      replace({
        include: /\.ts$/,
        values: {
          '.svg': ''
        },
       }),
    ],
    esbuildOptions: options => {
      options.outExtension = {
        '.js' : ext
      }
    },
   }
});
