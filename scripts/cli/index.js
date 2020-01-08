const { getPaths, editIndexFiles } = require('./utils');
const { newComponent, newTest, newDoc } = require('./creators');

const cli = () => {
  const [name] = process.argv.splice(2);
  const paths = getPaths(name);

  newComponent(name, paths);
  newTest(name, paths);
  newDoc(name, paths);
  editIndexFiles(name, paths);
};

cli();
