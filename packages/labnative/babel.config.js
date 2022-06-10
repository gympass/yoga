const path = require('path');

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'import-glob',
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
        extensions: [
          '.ios.js',
          '.ios.ts',
          '.ios.tsx',
          '.android.js',
          '.android.ts',
          '.android.tsx',
          '.native.js',
          '.native.ts',
          '.native.tsx',
          '.js',
          '.ts',
          '.tsx',
        ],
      },
    ],
  ],
};
