const testTemplate = require('../templates/test');
const { createFile } = require('../utils');

const test = (name, { web, native }) => {
  createFile(`${web}/${name}.test.jsx`, testTemplate(name));
  createFile(`${native}/${name}.test.jsx`, testTemplate(name, 'native'));
};

module.exports = test;
