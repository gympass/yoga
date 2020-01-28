const injectImport = (imports, component) => {
  const index = imports.indexOf(` } from '@gympass/yoga'`);
  const importsWithComponent = [
    imports.slice(0, index),
    `, ${component}`,
    imports.slice(index),
  ].join('');

  return importsWithComponent;
};

export default injectImport;
