const fs = require('fs');

const getPaths = name => {
  const base = `${process.cwd()}/packages/yoga/src`;

  return {
    base,
    web: `${base}/${name}/web`,
    native: `${base}/${name}/native`,
    doc: {
      web: `${process.cwd()}/packages/doc/content/components/components/${name.toLowerCase()}`,
      native: `${process.cwd()}/packages/labnative/pages`,
    },
  };
};

const createDirectory = paths =>
  paths.forEach(path => {
    if (!fs.existsSync(path)) {
      fs.mkdirSync(path, { recursive: true }, err => err && console.error(err));
    }
  });

const createFile = (path, content) => {
  if (!fs.existsSync(path)) {
    fs.writeFile(path, content, err => err && console.error(err));
  }
};

module.exports = {
  getPaths,
  createDirectory,
  createFile,
};
