import React from 'react';
import { node, string, bool } from 'prop-types';

import * as YogaComponents from '@gympass/yoga';
import * as YogaIcons from '@gympass/yoga-icons';

import { ReactLive, PrismHighlight } from 'components';
import CodeBlockContext from './CodeBlockContext';

const CodeBlock = props => {
  const children = { props };
  const code = children.trim();

  const buildImportString = modules => {
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

  const imports = buildImportString([
    { name: YogaIcons, path: '@gympass/yoga-icons' },
    { name: YogaComponents, path: '@gympass/yoga' },
  ]);

  const codeblockData = {
    imports,
    code,
  };

  const getCodeBlockComponent = () => {
    const codeBlockComponents = [
      {
        type: 'reactLive',
        component: () => {
          return <div>as</div>;
        },
      },
    ];
  };

  return (
    <CodeBlockContext.Provider value={codeblockData}>
      {getCodeBlockComponent()}
    </CodeBlockContext.Provider>
  );
};

CodeBlock.propTypes = {
  children: node.isRequired,
  type: string,
  center: bool,
  state: string,
};

CodeBlock.defaultProps = {
  type: 'reactLive',
  center: false,
  state: undefined,
};

export default CodeBlock;
