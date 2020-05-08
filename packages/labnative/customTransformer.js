const reactNativeSvgTransformer = require('react-native-svg-transformer');

module.exports.transform = function({ src, filename, options }) {
  return reactNativeSvgTransformer.transform({ src, filename, options });
};
