import React from 'react';
import { node, bool, oneOf } from 'prop-types';
import CodeBlockContext from './CodeBlockContext';
import { ReactLive, PrismHighlight, SnackEmbed } from '.';
import { importStatement } from './shared/templates';
import {
  YogaComponents,
  YogaIcons,
  YogaHelpers,
  NativeComponents,
} from './shared/modules';

const buildImportString = (code, modules) => {
  const findComponents = /(?:<|{)(\w*)(?=\s*?\/?>*)/gm;
  const findStyledComponents = /styled\(\w*/gm;
  const sortModules = /(@gympass\/yoga*)/gm;
  const imports = [];
  const foundComponents = code.match(findComponents) || [];
  const foundStyledComponents = code.match(findStyledComponents) || [];

  modules
    .sort(a => (a.path.match(sortModules) ? -1 : 0))
    .forEach(({ name, path }) => {
      const moduleComponents = {
        components: [
          ...new Set(
            foundComponents.map(c => c.replace(/<|{/, '')).filter(c => c),
          ),
          ...new Set(
            foundStyledComponents
              .map(c => c.replace(/styled\(/, ''))
              .filter(c => c),
          ),
        ]
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
    ...imports.map(({ components, path }) => importStatement(components, path)),
  ].join('\n');
};

const packages = [
  { name: YogaIcons, path: '@gympass/yoga-icons' },
  { name: YogaHelpers, path: '@gympass/yoga-helpers' },
  { name: YogaComponents, path: '@gympass/yoga' },
  { name: NativeComponents, path: 'react-native' },
];

const peerDependencies = [
  { path: 'styled-components' },
  { path: 'react-native-svg' },
  { path: 'react-is' },
];

const CodeBlock = ({ children: sampleCode, center, state, type }) => {
  const code = sampleCode.trim();

  const imports = type === 'highlight' ? [] : buildImportString(code, packages);
  const dependencies = Array.from(
    [...packages, ...peerDependencies],
    ({ path }) => path,
  );

  const codeblockData = {
    center,
    code,
    dependencies,
    imports,
    state,
  };

  const CodeBlockComponent = {
    reactLive: ReactLive,
    highlight: PrismHighlight,
    expo: SnackEmbed,
  }[type];

  return (
    <CodeBlockContext.Provider value={codeblockData}>
      <CodeBlockComponent />
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
