module.exports = {
  plugins: [
    [
      'transform-rename-import',
      { original: '^(.+?)\\.svg$', replacement: '$1.js' },
    ],
  ],
  env: {
    web: {
      presets: [
        ['@babel/preset-env'],
        '@babel/preset-react',
        [
          '@dr.pogodin/babel-preset-svgr',
          {
            svgr: {
              removeViewBox: false,
            },
          },
        ],
      ],
      ignore: ['**/*.native.js'],
    },

    esm: {
      presets: [
        ['@babel/preset-env', { modules: false }],
        '@babel/preset-react',
        [
          '@dr.pogodin/babel-preset-svgr',
          {
            svgr: {
              removeViewBox: false,
            },
          },
        ],
      ],
      ignore: ['**/*.native.js'],
    },

    native: {
      only: ['**/*.native.js'],
      presets: ['@babel/preset-env', '@babel/preset-react'],
      plugins: [
        [
          'transform-rename-import',
          { original: '^(.+?)\\.svg$', replacement: '$1.native.js' },
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
