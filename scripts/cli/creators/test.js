const { test } = require('../templates');
const { createFile } = require('../utils');

const createWebTest = (name, { web }) =>
  createFile(`${web}/${name}.test.jsx`, test(name));
const createNativeTest = (name, { native }) =>
  createFile(`${native}/${name}.test.jsx`, test(name, 'native'));

module.exports = { createWebTest, createNativeTest };
