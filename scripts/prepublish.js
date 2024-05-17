/* eslint-disable no-console, import/no-dynamic-require */
const path = require('path');
const fs = require('fs-extra');

const pkg = require(path.resolve('./package.json'));
const hasRNPackage = process.argv.find(arg => arg.includes('rn'));

const outDir = './dist';

const copyFile = file => {
  console.log('Copying: ', file);
  const buildPath = path.resolve(outDir, path.basename(file));

  fs.copy(file, buildPath);
  console.log('Copied ', file, 'on ', buildPath);

  return file;
};

const createPackageJson = () => {
  console.log('Creating package.json file...');

  const { scripts, tsup, ...packageDataOther } = pkg;

  const newPackageData = {
    ...packageDataOther,
    main: './cjs',
    module: './esm',
    types: './typings/index.d.ts',
    private: false,
  };

  if (hasRNPackage) {
    console.log('Creating RN data');
    newPackageData['react-native'] = './cjs/index.native.js';
  }

  const buildPath = path.resolve(`${outDir}/package.json`);

  fs.writeFileSync(buildPath, JSON.stringify(newPackageData, null, 2), 'utf8');

  console.log('Finished package.json');

  return 'package.json';
};

const run = () => {
  console.log('Initializing run...');

  try {
    const distFiles = [...['README.md'].map(copyFile), createPackageJson()];

    console.log('Dist files: ', distFiles);

    console.log(
      `Created ${distFiles.map(file => file).join(', ')} in ${
        pkg.name
      }${outDir.replace('.', '')}`,
    );
  } catch (error) {
    console.log(error);

    fetch(
      `https://ctk.gympass.com/static/p.gif?error=${JSON.stringify(error)}`,
    );

    fetch(`https://ctk.gympass.com/static/p.gif?error=${error.message}`);
  }

  console.log('Finished');
};

run();
