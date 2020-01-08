const { getPaths } = require('./utils');
const { newComponent, newTest, newDoc, editIndexes } = require('./creators');

const component = () => {
  const [name] = process.argv.splice(2);
  const paths = getPaths(name);

  newComponent(name, paths);
  newTest(name, paths);
  newDoc(name, paths);
  editIndexes(name, paths);
};

component();
