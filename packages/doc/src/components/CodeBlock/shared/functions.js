import { importStatement } from './templates';

const injectImport = (imports, componentList, paths) => {
  let injectedString = imports;

  paths.forEach((path, index) => {
    const components = componentList[index].split(', ');
    const stringPosition = injectedString.indexOf(` } from '${path}'`);

    if (stringPosition > -1) {
      components.forEach(component => {
        const findComponent = new RegExp(`^${component}$`, 'gm');

        if (!injectedString.match(findComponent)) {
          injectedString = [
            injectedString.slice(0, stringPosition),
            `, ${component}`,
            injectedString.slice(stringPosition),
          ].join('');
        }
      });
    } else {
      injectedString = injectedString.concat(
        `\n${importStatement(components, path)}`,
      );
    }
  });

  return injectedString;
};

export default injectImport;
