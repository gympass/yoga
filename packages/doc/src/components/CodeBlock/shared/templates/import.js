const importStatement = (components, path, destruct = true) =>
  `import ${destruct ? '{' : ''} ${
    destruct ? components.join(', ') : components
  } ${destruct ? '}' : ''} from '${path}';`;

export default importStatement;
