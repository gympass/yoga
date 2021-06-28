module.exports = {
  env: {
    web: {
      ignore: ['**/native', '**/*.native.js', '**/*.test.jsx'],
      presets: ['@babel/preset-env', '@babel/preset-react'],
      plugins: ['inline-react-svg', 'import-glob'],
    },
    esm: {
      ignore: ['**/native', '**/*.native.js', '**/*.test.jsx'],
      presets: [
        ['@babel/preset-env', { modules: false }],
        '@babel/preset-react',
      ],
      plugins: ['import-glob'],
    },
    native: {
      ignore: ['**/*.test.jsx'],
      only: ['**/native', '**/*.native.js'],
      presets: [
        '@babel/preset-env',
        '@babel/preset-react',
        'module:metro-react-native-babel-preset',
      ],
      plugins: ['import-glob'],
    },
    test: {
      plugins: ['import-glob'],
      presets: [
        '@babel/preset-env',
        '@babel/preset-react',
        'module:metro-react-native-babel-preset',
      ],
    },
  },
};
