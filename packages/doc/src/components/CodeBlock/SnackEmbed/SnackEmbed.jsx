import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import { string, bool } from 'prop-types';

import CodeBlockContext from '../CodeBlockContext';
import { native } from '../shared/templates';
import { injectImport } from '../shared/functions';

const Snack = styled.div`
  overflow: hidden;
  background: #fafafa;
  border: 1px solid rgba(0, 0, 0, 0.16);
  border-radius: 4px;
  height: 585px;
  width: 100%;
`;

const addProperties = (properties, to, prefix = '') => {
  const filled = to;

  Object.entries(properties).forEach(([key, value]) => {
    if (typeof window !== 'undefined' && to instanceof window.HTMLElement) {
      to.setAttribute(`${prefix}${key}`, `${value}`);
    } else {
      filled[`${prefix}${key}`] = `${value}`;
    }
  });

  return filled;
};

const SnackEmbed = ({ id, ...props }) => {
  const { imports, code, dependencies, state } = useContext(CodeBlockContext);

  const sanitizedCode = encodeURI(code);

  const snackProps = addProperties(
    {
      ...props,
      code: state
        ? `${injectImport(
            imports,
            ['React', 'StyleSheet'],
            ['react', 'react-native'],
            false,
          )}\n\n${sanitizedCode}`
        : native(imports, sanitizedCode),
      dependencies: dependencies.join(','),
    },
    {},
    'data-snack-',
  );

  useEffect(() => {
    if (typeof window !== 'undefined' && !window.ExpoSnack) {
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
      window.ExpoSnack.initialize();
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
  platform: 'ios',
  preview: true,
  theme: 'light',
};

export default SnackEmbed;
