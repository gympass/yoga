const reactNativeSvgTransformer = require('react-native-svg-transformer');
const upstreamTransformer = require('metro-react-native-babel-transformer');

module.exports.transform = function({ src, filename, options }) {
  if (filename.endsWith('.svg') || filename.endsWith('.svgx')) {
    return reactNativeSvgTransformer.transform({ src, filename, options });
  }

  return upstreamTransformer.transform({ src, filename, options });
};
