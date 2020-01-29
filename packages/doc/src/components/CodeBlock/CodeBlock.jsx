import React from 'react';
import { node, bool, string } from 'prop-types';

import * as YogaComponents from '@gympass/yoga';
import * as YogaIcons from '@gympass/yoga-icons';

import { ReactLive, PrismHighlight, SnackEmbed } from '.';
import CodeBlockContext from './CodeBlockContext';

import { importStatement } from './shared/templates';

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
    const findComponents = /(?<=<)(\w*)(?=\s*?\/?>*)/gm;
    const sortModules = /(@gympass\/yoga*)/gm;
    const imports = [];

    modules
      .sort(a => (a.path.match(sortModules) ? -1 : 0))
      .forEach(({ name, path }) => {
        const moduleComponents = {
          components: [...new Set(code.match(findComponents))]
            .filter(importedComponent =>
              Object.keys(name).includes(importedComponent),
            )
            .filter(
              item => !imports.filter(c => c.components.includes(item)).length,
            ),
          path,
        };

        if (moduleComponents.components.length > 0) {
          imports.push(moduleComponents);
        }
      });

    return [
      ...imports.map(({ components, path }) =>
        importStatement(components, path),
      ),
    ].join('\n');
  };

  const NativeComponents = {
    View: undefined,
    Text: undefined,
  };

  const packages = [
    { name: YogaIcons, path: '@gympass/yoga-icons' },
    { name: YogaComponents, path: '@gympass/yoga' },
    { name: NativeComponents, path: 'react-native' },
  ];

  const imports = buildImportString(packages);
  const dependencies = Array.from(packages, ({ path }) => path);
  const codeblockData = {
    center,
    code,
    dependencies,
    imports,
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
