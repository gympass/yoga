import { defineConfig } from 'tsup';
import { rename, mkdir } from 'node:fs/promises';

export default defineConfig({
  async onSuccess() {
    await mkdir('dist/cjs');
    await rename('dist/index.js', 'dist/cjs/index.js');
  },
});
