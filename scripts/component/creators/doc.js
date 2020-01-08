const { webTemplate, nativeTemplate } = require('../templates/doc');
const { createDirectory, createFile } = require('../utils');

const web = (name, webPath) => {
  const lowerCasedName = name.toLowerCase();

  createFile(`${webPath}/index.mdx`, webTemplate(name).index);
  createFile(`${webPath}/${lowerCasedName}-web.mdx`, webTemplate(name).web);
  createFile(
    `${webPath}/${lowerCasedName}-native.mdx`,
    webTemplate(name).native,
  );
};

const labNative = (name, nativePath) => {
  createFile(`${nativePath}/${name}.jsx`, nativeTemplate(name));
};

const doc = (name, { doc: { web: webPath, native: nativePath } }) => {
  createDirectory([webPath]);

  web(name, webPath);
  labNative(name, nativePath);
};

module.exports = doc;
