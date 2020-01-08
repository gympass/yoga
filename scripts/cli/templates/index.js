const { indexMdx, webMdx, nativeMdx } = require('./doc');
const { componentIndex, component } = require('./component');
const labNative = require('./labnative');
const test = require('./test');

module.exports = {
  indexMdx,
  webMdx,
  nativeMdx,
  labNative,
  test,
  componentIndex,
  component,
};
