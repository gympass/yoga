/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

const path = require('path');
const { getDefaultConfig } = require('metro-config');
const blacklist = require('metro-config/src/defaults/blacklist');

const reactNativeLib = path.resolve(__dirname, '../', '../');

module.exports = (async () => {
  const {
    resolver: { assetExts },
  } = await getDefaultConfig();

  return {
    watchFolders: [
      path.resolve(__dirname, '../../', 'node_modules'),
      `${reactNativeLib}/packages/yoga`,
      `${reactNativeLib}/packages/icons`,
      `${reactNativeLib}/packages/tokens`,
      `${reactNativeLib}/packages/common`,
    ],
    resolver: {
      extraNodeModules: {
        'react-native': path.resolve(__dirname, 'node_modules/react-native'),
        'react-native-svg': path.resolve(
          __dirname,
          'node_modules/react-native-svg/lib/commonjs',
        ),
        react: path.resolve(__dirname, 'node_modules/react'),
      },
      blacklistRE: blacklist([
        new RegExp(
          `${reactNativeLib}/node_modules/(.*)/node_modules/react-native/.*`,
        ),
        new RegExp(`${reactNativeLib}/node_modules/react-native/.*`),
        new RegExp(`${reactNativeLib}/node_modules/react/.*`),
      ]),
      assetExts: assetExts.filter(ext => ext !== 'svg'),
      sourceExts: ['jsx', 'js', 'svg'],
    },
    transformer: {
      babelTransformerPath: require.resolve('react-native-svg-transformer'),
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: false,
        },
      }),
    },
  };
})();
