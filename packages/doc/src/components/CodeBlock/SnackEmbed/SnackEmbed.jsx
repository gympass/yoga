import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import { string, bool } from 'prop-types';

import CodeBlockContext from '../CodeBlockContext';
import { getTemplate } from '../shared';

const Snack = styled.div`
  overflow: hidden;
  background: #fafafa;
  border: 1px solid rgba(0, 0, 0, 0.16);
  border-radius: 4px;
  height: 505px;
  width: 100%;
`;

const addProperties = (properties, to, prefix = '') => {
  const filled = to;

  Object.entries(properties).forEach(([key, value]) => {
    if (to instanceof window.HTMLElement) {
      to.setAttribute(`${prefix}${key}`, `${value}`);
    } else {
      filled[`${prefix}${key}`] = `${value}`;
    }
  });

  return filled;
};

const SnackEmbed = ({ id, ...props }) => {
  const { imports, code, dependencies } = useContext(CodeBlockContext);

  const snackProps = addProperties(
    {
      ...props,
      code: getTemplate('native', imports, code),
      dependencies: dependencies.join(','),
    },
    {},
    'data-snack-',
  );

  useEffect(() => {
    const { ExpoSnack } = window;

    if (!ExpoSnack) {
      const script = document.createElement('script');
      script.addEventListener('load', () => window.ExpoSnack.initialize());

      addProperties(
        {
          id,
          src: 'https://snack.expo.io/embed.js',
          async: true,
        },
        script,
      );

      document.body.appendChild(script);
    } else {
      ExpoSnack.initialize();
    }
  });

  return <Snack {...snackProps} />;
};

SnackEmbed.propTypes = {
  description: string,
  id: string,
  name: string,
  platform: string,
  preview: bool,
  theme: string,
};

SnackEmbed.defaultProps = {
  description: 'A yoga component native code sample',
  id: 'yoga-component-snack',
  name: 'yoga-component',
  platform: 'web',
  preview: true,
  theme: 'light',
};

export default SnackEmbed;
