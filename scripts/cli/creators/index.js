const { createWebComponent, createNativeComponent } = require('./component');
const { createWebTest, createNativeTest } = require('./test');
const { createWebDoc, createNativeDoc } = require('./doc');

module.exports = {
  createWebComponent,
  createNativeComponent,
  createWebDoc,
  createNativeDoc,
  createWebTest,
  createNativeTest,
};
