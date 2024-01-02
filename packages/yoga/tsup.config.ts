import { defineConfig } from 'tsup';
import ImportGlobPlugin from 'esbuild-plugin-import-glob';

export default defineConfig({
  esbuildPlugins: [ImportGlobPlugin],
});
