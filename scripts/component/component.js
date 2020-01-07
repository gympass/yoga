const { indexTemplate, componentTemplate } = require('./templates/component');
const { createDirectory, createFile } = require('./factory');

const component = (name, { web, native }) => {
  createDirectory([web, native]);

  createFile(`${web}/${name}.jsx`, componentTemplate(name));
  createFile(`${native}/${name}.jsx`, componentTemplate(name, 'native'));
};

module.exports = component;
