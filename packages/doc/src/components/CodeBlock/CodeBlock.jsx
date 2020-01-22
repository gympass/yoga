import React from 'react';
import { node, string, bool } from 'prop-types';

import * as YogaComponents from '@gympass/yoga';
import * as YogaIcons from '@gympass/yoga-icons';

import { ReactLive, PrismHighlight } from 'components';

const CodeBlock = ({ reactLive, children, ...props }) => {
  const code = children.trim();

  const buildImports = modules => {
    const findComponents = /(?<=<)(\w*)(?=\s*?\/?>)/gm;
    const imports = [];

    modules.forEach(({ name, path }) => {
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
    { name: YogaComponents, path: '@gympass/yoga' },
    { name: YogaIcons, path: '@gympass/yoga-icons' },
  ]);

  return reactLive ? (
    <ReactLive imports={imports} code={code} {...props}>
      {children}
    </ReactLive>
  ) : (
    <PrismHighlight code={code} liveEditor={false} />
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
