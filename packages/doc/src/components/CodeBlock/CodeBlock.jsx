import React from 'react';
import { node, string, bool } from 'prop-types';

import * as YogaComponents from '@gympass/yoga';
import * as YogaIcons from '@gympass/yoga-icons';

import { ReactLive, PrismHighlight } from 'components';
import CodeBlockContext from './CodeBlockContext';

const CodeBlock = ({ reactLive, children, ...props }) => {
  const code = children.trim();

  const buildImports = modules => {
    const findComponents = /(?<=<)(\w*)(?=\s*?\/?>)/gm;
    const sortModules = /(@gympass\/yoga*)/gm;
    const imports = [];

    modules
      .sort(a => (a.path.match(sortModules) ? -1 : 0))
      .forEach(({ name, path }) => {
        const componentsInCode = [...new Set(code.match(findComponents))]
          .filter(importedComponent =>
            Object.keys(name).includes(importedComponent.replace(/</g, '')),
          )
          .join(', ')
          .replace(/</g, '');

        imports.push(`import { ${componentsInCode} } from '${path}';`);
      });

    return imports.join('\n');
  };

  const imports = buildImports([
    { name: YogaIcons, path: '@gympass/yoga-icons' },
    { name: YogaComponents, path: '@gympass/yoga' },
  ]);

  const codeblockData = {
    imports,
    code,
  };

  return (
    <CodeBlockContext.Provider value={codeblockData}>
      {reactLive ? (
        <ReactLive {...props}>{children}</ReactLive>
      ) : (
        <PrismHighlight code={code} />
      )}
    </CodeBlockContext.Provider>
  );
};

CodeBlock.propTypes = {
  children: node.isRequired,
  hasIcon: string,
  hasComponent: string,
  reactLive: bool,
  center: string,
  state: string,
};

CodeBlock.defaultProps = {
  reactLive: false,
  hasIcon: 'false',
  hasComponent: 'true',
  center: 'false',
  state: undefined,
};

export default CodeBlock;
