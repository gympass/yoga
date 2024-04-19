import { defineConfig } from 'tsup'
import svgr from './svgr-plugin'
import { replace } from 'esbuild-plugin-replace';

export default defineConfig( opts => {
  const { target } = opts.define || {};
  const ext = target === 'native' ? '.native.js' : '.js';
  const entry = target === 'native' ? ["src/**/*.svg"] : [
    "src/index.ts",
    "src/**/*.ts",
    "src/**/*.svg"
    ];

  return {
    name: "tsup",
    entry,
    splitting: false,
    bundle: false,
    esbuildPlugins: [
      svgr({ target, typescript: true }),
      replace({
        include: /\.ts$/,
        values: {
          '.svg': ''
        },
       }),
    ],
    outExtension: () => ({
      js: ext,
    }),
   }
});
