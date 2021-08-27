module.exports = {
  plugins: [
    [
      'transform-rename-import',
      { original: '^(.+?)\\.svg$', replacement: '$1' },
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
    },

    native: {
      presets: ['@babel/preset-env', '@babel/preset-react'],
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
