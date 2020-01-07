const fs = require('fs');

const { getPaths } = require('./factory');
const newComponent = require('./component');
const newTest = require('./test');
const newDoc = require('./doc');

const component = () => {
  const [name] = process.argv.splice(2);
  const paths = getPaths(name);

  newComponent(name, paths);
  newTest(name, paths);
  newDoc(name, paths);

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

component();
