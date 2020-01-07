const fs = require('fs');

const { getPaths } = require('./factory');
const newComponent = require('./component');
const newTest = require('./test');
const newDoc = require('./doc');

const component = () => {
  const [name] = process.argv.splice(2);
  const paths = getPaths(name);

  // newComponent(name, paths);
  // newTest(name, paths);
  // newDoc(name, paths);

  const indexes = [
    fs.readFileSync(`${paths.base}/index.js`, 'utf-8'),
    fs.readFileSync(`${paths.base}/index.native.js`, 'utf-8'),
  ];

  const replaceIndex = fs.writeFileSync(
    `${paths.base}/index.js`,
    currentIndex
      .replace(/(import.*;\n$)/m, `$1import ${name} from './${name}';\n`)
      .replace(/};$/m, `  ${name},\n };`),
    () => {},
  );
};

component();
