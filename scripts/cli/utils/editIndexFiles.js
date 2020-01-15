const fs = require('fs');

const editIndexFiles = (name, paths, platform) => {
  const indexPath = `${paths.base}/index.js`;
  const indexNativePath = `${paths.base}/index.native.js`;
  const indexLabnativePath = `${paths.doc.native}/index.js`;

  const indexes = [
    (platform === 'web' || !platform) && {
      path: indexPath,
      content: fs.readFileSync(indexPath, 'utf-8'),
    },
    (platform === 'native' || !platform) && {
      path: indexNativePath,
      content: fs.readFileSync(indexNativePath, 'utf-8'),
    },
    (platform === 'native' || !platform) && {
      path: indexLabnativePath,
      content: fs.readFileSync(indexLabnativePath, 'utf-8'),
    },
  ];

  indexes
    .filter(index => index)
    .forEach(({ path, content }) => {
      const newContent = content
        .replace(/(import.*;\n$)/m, `$1import ${name} from './${name}';\n`)
        .replace(/};$/m, `  ${name},\n };`);

      fs.writeFileSync(path, newContent, () => {});
    });
};

module.exports = editIndexFiles;
