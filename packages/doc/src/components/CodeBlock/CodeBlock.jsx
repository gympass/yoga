import React from 'react';
import { node, bool, oneOf } from 'prop-types';
import yogaPkg from '@gympass/yoga/package.json';
import iconsPkg from '@gympass/yoga-icons/package.json';
import illustrationsPkg from '@gympass/yoga-illustrations/package.json';
import systemPkg from '@gympass/yoga-system/package.json';

import CodeBlockContext from './CodeBlockContext';
import { ReactLive, PrismHighlight, SnackEmbed } from '.';
import { importStatement } from './shared/templates';
import {
  YogaComponents,
  YogaSystem,
  YogaIcons,
  YogaIllustrations,
  YogaHelpers,
  NativeComponents,
} from './shared/modules';

const buildImportString = (code, modules) => {
  const findComponents = /(?:<|: |{)(\w*)(?=\s*?\/?>*)/gm;
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
            foundComponents.map(c => c.replace(/<|: |{/, '')).filter(c => c),
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
  { name: YogaSystem, path: '@gympass/yoga-system' },
  { name: NativeComponents, path: 'react-native' },
  { name: YogaIllustrations, path: '@gympass/yoga-illustrations' },
];

const peerDependencies = Object.keys({
  ...yogaPkg.peerDependencies,
  ...iconsPkg.peerDependencies,
  ...illustrationsPkg.peerDependencies,
  ...systemPkg.peerDependencies,
  'react-is': '*',
}).map(pkg => ({ path: pkg }));

const CodeBlock = ({
  children: sampleCode,
  center = true,
  state = false,
  type = 'reactLive',
}) => {
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

export default CodeBlock;
