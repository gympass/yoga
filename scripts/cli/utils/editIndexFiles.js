const fs = require('fs');

const editIndexFiles = (name, paths) => {
  const indexPath = `${paths.base}/index.js`;
  const indexNativePath = `${paths.base}/index.native.js`;
  const indexLabnativePath = `${paths.doc.native}/index.js`;

  const indexes = [
    {
      path: indexPath,
      content: fs.readFileSync(indexPath, 'utf-8'),
    },
    {
      path: indexNativePath,
      content: fs.readFileSync(indexNativePath, 'utf-8'),
    },
    {
      path: indexLabnativePath,
      content: fs.readFileSync(indexLabnativePath, 'utf-8'),
    },
  ];

  indexes.forEach(({ path, content }) => {
    const newContent = content
      .replace(/(import.*;\n$)/m, `$1import ${name} from './${name}';\n`)
      .replace(/};$/m, `  ${name},\n };`);

    fs.writeFileSync(path, newContent, () => {});
  });
};

module.exports = editIndexFiles;
