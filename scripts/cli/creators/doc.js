const { indexMdx, webMdx, nativeMdx, labNative } = require('../templates');
const { createDirectory, createFile } = require('../utils');

const newDoc = (name, { doc: { web, native } }) => {
  const lowerCasedName = name.toLowerCase();

  createDirectory([web]);

  createFile(`${web}/index.mdx`, indexMdx(name));
  createFile(`${web}/${lowerCasedName}-web.mdx`, webMdx(name));
  createFile(`${web}/${lowerCasedName}-native.mdx`, nativeMdx(name));

  createFile(`${native}/${name}.jsx`, labNative(name));
};

module.exports = newDoc;
