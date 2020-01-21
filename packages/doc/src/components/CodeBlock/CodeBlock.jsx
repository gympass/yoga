import React from 'react';
import { node, string, bool } from 'prop-types';

import * as YogaComponents from '@gympass/yoga';
import * as YogaIcons from '@gympass/yoga-icons';

import { ReactLive, PrismHighlight } from 'components';

const CodeBlock = ({ reactLive, children, ...props }) => {
  const normalizedCodeExample = children.trim();

  const findImports = dependencies => {
    const importsRegex = /(?:<)([A-Z][A-Za-z]+)/g;
    const components = [];

    dependencies.forEach(module => {
      components.push(
        [...new Set(normalizedCodeExample.match(importsRegex))]
          .filter(
            importedComponent => {
              Object.entries(module).forEach(([key, value]) => {
                if (key === 'dependency') {
                  return Object.keys(value).includes(
                    importedComponent.replace(/</g, ''),
                  );
                }
              });
            },
            //
          )
          .join(', ')
          .replace(/</g, ''),
      );
    });

    return components;
  };

  const importsComponents = findImports([
    { dependency: YogaComponents, path: '@gympass/yoga' },
    { dependency: YogaIcons, path: '@gympass/yoga-icons' },
  ]);

  console.log(importsComponents);

  // const importsIcons = findImports(YogaIcons);

  return reactLive ? (
    <div>asd</div>
  ) : (
    // <ReactLive
    //   code={normalizedCodeExample}
    //   importsComponents={importsComponents}
    //   importsIcons={importsIcons}
    //   {...props}
    // >
    //   {children}
    // </ReactLive>
    <PrismHighlight code={normalizedCodeExample} liveEditor={false} />
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
