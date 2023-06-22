const path = require('path');

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      '@babel/plugin-transform-react-jsx',
      {
        runtime: 'classic',
      },
    ],
    'import-glob',
    '@babel/plugin-proposal-export-namespace-from',
    [
      'module-resolver',
      {
        alias: {
          react: require.resolve('react', {
            paths: [path.join(__dirname, './')],
          }),
          '^react-native$': require.resolve('react-native', {
            paths: [path.join(__dirname, './')],
          }),
          '^react-native/(.+)': ([, name]) =>
            require.resolve(`react-native/${name}`, {
              paths: [path.join(__dirname, './')],
            }),
        },
        extensions: ['.ios.js', '.android.js', '.native.js', '.js'],
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
