import React from 'react';
import { createGlobalStyle, withTheme } from 'styled-components';
import FontLoader from './FontLoader';

const Global = createGlobalStyle`
  ${({ fontFamily }) => `
    body {
      font-family: "${fontFamily}";
    }
  `}
`;

const GlobalStyle = ({
  theme: {
    yoga: {
      baseFont: { family },
    },
  },
}) => (
  <>
    <FontLoader />
    <Global fontFamily={family} />
  </>
);

export default withTheme(GlobalStyle);
