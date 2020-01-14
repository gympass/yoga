const { componentIndex, component } = require('../templates');
const { createDirectory, createFile } = require('../utils');

const createWebComponent = (name, { base, web }) => {
  createDirectory([web]);

  createFile(`${web}/index.js`, componentIndex(name));
  createFile(`${web}/${name}.jsx`, component(name));

  createFile(`${base}/${name}/index.js`, componentIndex(name, 'web'));
};

const createNativeComponent = (name, { base, native }) => {
  createDirectory([native]);

  createFile(`${native}/index.js`, componentIndex(name));
  createFile(`${native}/${name}.jsx`, component(name, 'native'));

  createFile(`${base}/${name}/index.native.js`, componentIndex(name, 'native'));
};

module.exports = { createWebComponent, createNativeComponent };
