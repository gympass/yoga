module.exports = {
  env: {
    web: {
      presets: [['@babel/preset-env', { loose: true }], '@babel/preset-react'],
      plugins: ['inline-react-svg', 'import-glob'],
    },
    esm: {
      presets: [
        ['@babel/preset-env', { loose: true, modules: false }],
        '@babel/preset-react',
      ],
      plugins: ['inline-react-svg', 'import-glob'],
    },
    native: {
      only: ['**/native', '**/*.native.js'],
      presets: [
        ['@babel/preset-env', { loose: true }],
        '@babel/preset-react',
        'module:metro-react-native-babel-preset',
      ],
      plugins: ['import-glob'],
    },
    test: {
      plugins: ['import-glob', '@babel/plugin-transform-flow-strip-types'],
      presets: [
        ['@babel/preset-env', { loose: true }],
        '@babel/preset-react',
        'module:metro-react-native-babel-preset',
      ],
    },
  },
};
