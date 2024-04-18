/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');

const themeFiles = [];
const yogaPath = path.join(__dirname, '../packages/yoga/src');
const removeExt = /\.theme\.(js|ts)$/;

function findThemeFiles(directory) {
  const files = fs.readdirSync(directory);

  files.forEach(file => {
    const filePath = path.join(directory, file);
    const stats = fs.statSync(filePath);

    if (stats.isDirectory()) {
      findThemeFiles(filePath);
    }

    if (file.endsWith('.theme.js') || file.endsWith('.theme.ts')) {
      themeFiles.push(filePath);
    }
  });
}

function toCamelCase(name) {
  return name.replace(/[-_.](.)/g, (_, afterDot) => afterDot.toUpperCase());
}

function adjustPath(name) {
  return name.replace('packages/yoga/src', '..');
}

findThemeFiles(yogaPath);

const importStatements = themeFiles.map(filePath => {
  const componentName = toCamelCase(
    path.basename(filePath).replace(removeExt, ''),
  );
  const componentPath = adjustPath(path.relative(__dirname, filePath));

  return `import ${componentName} from '${componentPath}';`;
});

const exportStatements = themeFiles.map(filePath => {
  const componentName = toCamelCase(
    path.basename(filePath).replace(removeExt, ''),
  );

  return `  ${componentName},`;
});

console.log(importStatements.join('\n'));
console.log('\nconst componentThemes = {');
console.log(exportStatements.join('\n'));
console.log('};');
console.log('\nexport default componentThemes;');
