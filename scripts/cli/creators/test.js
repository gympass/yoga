const { test } = require('../templates');
const { createFile } = require('../utils');

const newTest = (name, { web, native }) => {
  createFile(`${web}/${name}.test.jsx`, test(name));
  createFile(`${native}/${name}.test.jsx`, test(name, 'native'));
};

module.exports = newTest;
