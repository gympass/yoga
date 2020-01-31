import React from 'react';
import { node, bool, oneOf } from 'prop-types';
import CodeBlockContext from './CodeBlockContext';
import { ReactLive, PrismHighlight, SnackEmbed } from '.';
import { importStatement } from './shared/templates';
import { YogaComponents, YogaIcons, NativeComponents } from './shared/modules';

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
  type: oneOf(['reactLive', 'highlight', 'expo']),
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
