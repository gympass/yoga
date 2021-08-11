module.exports = {
  env: {
    web: {
      ignore: ['**/native', '**/*.native.js', '**/*.test.jsx'],
      presets: ['@babel/preset-env', '@babel/preset-react'],
      plugins: [
        'inline-react-svg',
        'import-glob',
        ['@babel/plugin-proposal-private-methods', { loose: true }],
      ],
    },
    esm: {
      ignore: ['**/native', '**/*.native.js', '**/*.test.jsx'],
      presets: [
        ['@babel/preset-env', { modules: false }],
        '@babel/preset-react',
      ],
      plugins: [
        'import-glob',
        ['@babel/plugin-proposal-private-methods', { loose: true }],
      ],
    },
    native: {
      ignore: ['**/*.test.jsx'],
      only: ['**/native', '**/*.native.js'],
      presets: [
        '@babel/preset-env',
        '@babel/preset-react',
        'module:metro-react-native-babel-preset',
      ],
      plugins: [
        'import-glob',
        ['@babel/plugin-proposal-private-methods', { loose: true }],
      ],
    },
    test: {
      plugins: [
        'import-glob',
        '@babel/plugin-transform-flow-strip-types',
        ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
        ['@babel/plugin-proposal-private-methods', { loose: true }],
      ],
      presets: [
        '@babel/preset-env',
        '@babel/preset-react',
        'module:metro-react-native-babel-preset',
      ],
    },
  },
};
