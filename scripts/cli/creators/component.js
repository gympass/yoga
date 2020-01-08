const { componentIndex, component } = require('../templates');
const { createDirectory, createFile } = require('../utils');

const newComponent = (name, { base, web, native }) => {
  createDirectory([web, native]);

  createFile(`${web}/index.js`, componentIndex(name));
  createFile(`${web}/${name}.jsx`, component(name));

  createFile(`${native}/index.js`, componentIndex(name));
  createFile(`${native}/${name}.jsx`, component(name, 'native'));

  createFile(`${base}/${name}/index.js`, componentIndex(name, 'web'));
  createFile(`${base}/${name}/index.native.js`, componentIndex(name, 'native'));
};

module.exports = newComponent;
