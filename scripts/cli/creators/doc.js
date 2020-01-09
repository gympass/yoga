const { indexMdx, webMdx, nativeMdx, labNative } = require('../templates');
const { createDirectory, createFile } = require('../utils');

const createWebDoc = (name, { doc: { web } }, platform) => {
  const lowerCasedName = name.toLowerCase();

  createDirectory([web]);

  createFile(`${web}/index.mdx`, indexMdx(name, platform));
  if (!platform) {
    createFile(`${web}/${lowerCasedName}-web.mdx`, webMdx(name));
  }
};

const createNativeDoc = (name, { doc: { web, native } }, platform) => {
  const lowerCasedName = name.toLowerCase();

  createDirectory([web]);

  createFile(`${web}/index.mdx`, indexMdx(name, platform));
  if (!platform) {
    createFile(`${web}/${lowerCasedName}-native.mdx`, nativeMdx(name));
  }

  createFile(`${native}/${name}.jsx`, labNative(name));
};

module.exports = { createWebDoc, createNativeDoc };
