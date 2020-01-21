import React, { useEffect } from 'react';
import styled from 'styled-components';

const addProperties = (props, to, prefix = '') => {
  const filled = to;

  Object.entries(props).forEach(([key, value]) => {
    if (to instanceof window.HTMLElement) {
      to.setAttribute(`${prefix}${key}`, `${value}`);
    } else {
      filled[`${prefix}${key}`] = `${value}`;
    }
  });

  return filled;
};

const Snack = styled.div`
  overflow: hidden;
  background: #fafafa;
  border: 1px solid rgba(0, 0, 0, 0.16);
  border-radius: 4px;
  height: 505px;
  width: 100%;
`;

const SnackEmbed = props => {
  useEffect(() => {
    const { ExpoSnack } = window;

    if (!ExpoSnack) {
      const script = document.createElement('script');
      script.addEventListener('load', () => window.ExpoSnack.initialize());

      addProperties(
        {
          id: 'snack',
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

  const snackProps = addProperties(props, {}, 'data-snack-');

  return <Snack {...snackProps} />;
};

export default SnackEmbed;
