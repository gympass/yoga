import React from 'react';
import { node, bool, string } from 'prop-types';

import * as YogaComponents from '@gympass/yoga';
import * as YogaIcons from '@gympass/yoga-icons';

import { ReactLive, PrismHighlight, SnackEmbed } from '.';
import CodeBlockContext from './CodeBlockContext';

const CodeBlockComponent = ({ type }) =>
  [
    {
      type: 'reactLive',
      component: () => <ReactLive />,
    },
    {
      type: 'highlight',
      component: () => <PrismHighlight />,
    },
    {
      type: 'expo',
      component: () => <SnackEmbed />,
    },
  ]
    .find(({ type: blockType }) => blockType === type)
    .component();

const CodeBlock = ({ children: sampleCode, center, state, type }) => {
  const code = sampleCode.trim();

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

        if (componentsInCode) {
          imports.push(`import { ${componentsInCode} } from '${path}';`);
        }
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
    center,
    state,
  };

  return (
    <CodeBlockContext.Provider value={codeblockData}>
      <CodeBlockComponent type={type} />
    </CodeBlockContext.Provider>
  );
};

CodeBlock.propTypes = {
  type: string,
  children: node.isRequired,
  center: bool,
  state: bool,
};

CodeBlock.defaultProps = {
  type: 'reactLive',
  center: true,
  state: false,
};

export default CodeBlock;
