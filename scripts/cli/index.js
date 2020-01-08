const yargs = require('yargs');
const { getPaths, editIndexFiles } = require('./utils');
const {
  createWebComponent,
  createNativeComponent,
  createWebTest,
  createNativeTest,
  createWebDoc,
  createNativeDoc,
} = require('./creators');

const cli = ({ name, web, native }) => {
  const paths = getPaths(name);

  if (web) {
    createWebComponent(name, paths);
    createWebTest(name, paths);
    createWebDoc(name, paths, 'web');
    editIndexFiles(name, paths, 'web');
  }

  if (native) {
    createNativeComponent(name, paths);
    createNativeTest(name, paths);
    createNativeDoc(name, paths, 'native');
    editIndexFiles(name, paths, 'native');
  }

  if (!web && !native) {
    createWebComponent(name, paths);
    createWebTest(name, paths);
    createWebDoc(name, paths);
    createNativeComponent(name, paths);
    createNativeTest(name, paths);
    createNativeDoc(name, paths);
    editIndexFiles(name, paths);
  }
};

const init = () =>
  yargs
    .scriptName('new')
    .command(
      'component [name]',
      'creates a new component',
      yarg => {
        yarg.positional('name', {
          describe: 'component name',
          default: null,
        });
      },
      argv => {
        cli(argv);
      },
    )
    .option('web', {
      alias: 'w',
      type: 'boolean',
      description: 'Creates only web component.',
    })
    .option('native', {
      alias: 'n',
      type: 'boolean',
      description: 'Creates only native component.',
    }).argv;

init();
