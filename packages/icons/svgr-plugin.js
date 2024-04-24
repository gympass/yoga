import { transform } from '@svgr/core';
import { readFileSync } from 'fs';

const plugin = (options = {}) => {
  const { native } = options;

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
            native,
          },
          { filePath: args.path },
        );

        return {
          contents,
          loader: 'jsx',
        };
      });
    },
  };
};

export default plugin;
