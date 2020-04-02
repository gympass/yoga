const { theme } = require('../templates');
const { createFile } = require('../utils');

const createComponentTheme = (name, { base }) =>
  createFile(`${base}/${name}/${name}.theme.js`, theme(name));

module.exports = { createComponentTheme };
