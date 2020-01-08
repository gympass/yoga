const fs = require('fs');

const editIndexes = (name, paths) => {
  const indexes = [
    {
      path: `${paths.base}/index.js`,
      content: fs.readFileSync(`${paths.base}/index.js`, 'utf-8'),
    },
    {
      path: `${paths.base}/index.native.js`,
      content: fs.readFileSync(`${paths.base}/index.native.js`, 'utf-8'),
    },
    {
      path: `${paths.doc.native}/index.js`,
      content: fs.readFileSync(`${paths.doc.native}/index.js`, 'utf-8'),
    },
  ];

  indexes.forEach(({ path, content }) => {
    const newContent = content
      .replace(/(import.*;\n$)/m, `$1import ${name} from './${name}';\n`)
      .replace(/};$/m, `  ${name},\n };`);

    fs.writeFileSync(path, newContent, () => {});
  });
};

module.exports = editIndexes;
