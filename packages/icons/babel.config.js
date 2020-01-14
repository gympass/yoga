module.exports = {
  env: {
    web: {
      presets: [['@babel/preset-env'], '@babel/preset-react'],
      ignore: ['**/*.native.js'],
      plugins: ['inline-react-svg'],
    },

    esm: {
      presets: [
        ['@babel/preset-env', { modules: false }],
        '@babel/preset-react',
      ],
      ignore: ['**/*.native.js'],
      plugins: ['inline-react-svg'],
    },

    native: {
      only: ['**/*.native.js'],
      presets: ['@babel/preset-env', '@babel/preset-react'],
      plugins: [
        [
          'transform-rename-import',
          { original: '^(.+?)\\.svg$', replacement: '$1.js' },
        ],
      ],
    },

    svg: {
      presets: [
        '@babel/preset-env',
        '@babel/preset-react',
        [
          '@dr.pogodin/babel-preset-svgr',
          {
            svgr: {
              native: true,
            },
          },
        ],
      ],
    },
  },
};
