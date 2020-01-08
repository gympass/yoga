const {
  rootIndexTemplate,
  indexTemplate,
  componentTemplate,
} = require('../templates/component');
const { createDirectory, createFile } = require('../utils');

const component = (name, { base, web, native }) => {
  createDirectory([web, native]);

  createFile(`${web}/index.js`, indexTemplate(name));
  createFile(`${web}/${name}.jsx`, componentTemplate(name));
  createFile(`${native}/index.js`, indexTemplate(name));
  createFile(`${native}/${name}.jsx`, componentTemplate(name, 'native'));

  createFile(`${base}/${name}/index.js`, rootIndexTemplate(name, 'web'));
  createFile(
    `${base}/${name}/index.native.js`,
    rootIndexTemplate(name, 'native'),
  );
};

module.exports = component;
