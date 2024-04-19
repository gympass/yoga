import { transform } from '@svgr/core';
import { readFileSync } from 'fs';

const plugin = (options = {}) => {
  const { target, typescript } = options;

  return {
    name: 'svgr',
    setup: build => {
      build.onResolve({ filter: /\.svg$/ }, args => ({
        path: args.path,
        namespace: 'svg-ns',
      }));

      build.onLoad({ filter: /.*/, namespace: 'svg-ns' }, async args => {
        const svg = readFileSync(args.path, { encoding: 'utf8' });
        const contents = await transform(
          svg,
          {
            plugins: ['@svgr/plugin-jsx'],
            native: target === 'native',
            typescript,
          },
          { filePath: args.path },
        );

        return {
          contents,
          loader: 'tsx',
        };
      });
    },
  };
};

export default plugin;
