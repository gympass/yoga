module.exports = {
  env: {
    web: {
      ignore: ['**/native', '**/*.native.js', '**/*.test.jsx'],
      presets: ['@babel/preset-env', '@babel/preset-react'],
    },
    esm: {
      ignore: ['**/native', '**/*.native.js', '**/*.test.jsx'],
      presets: [
        ['@babel/preset-env', { modules: false }],
        '@babel/preset-react',
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
    },
    test: {
      presets: [
        '@babel/preset-env',
        '@babel/preset-react',
        'module:metro-react-native-babel-preset',
      ],
    },
  },
};
