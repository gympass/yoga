const importStatement = (components, path) =>
  `import { ${components.join(', ')} } from '${path}';`;

export default importStatement;
