import React from 'react';
import GoogleFontLoader from 'react-google-font-loader';
import { createGlobalStyle, withTheme } from 'styled-components';

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
      baseFont: { family, weight },
    },
  },
}) => (
  <>
    <GoogleFontLoader
      fonts={[
        {
          font: family,
          weights: [...weight],
        },
      ]}
    />
    <Global fontFamily={family} />
  </>
);

export default withTheme(GlobalStyle);
