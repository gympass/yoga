import React from 'react';
import GoogleFontLoader from 'react-google-font-loader';
import { createGlobalStyle, withTheme } from 'styled-components';

const Global = createGlobalStyle`
  ${({
    theme: {
      yoga: { baseFontFamily },
    },
  }) => `
    body {
      font-family: "${baseFontFamily}";
    }
  `}
`;

const GlobalStyle = ({
  theme: {
    yoga: { baseFontFamily, fontWeights },
  },
}) => (
  <>
    <GoogleFontLoader
      fonts={[
        {
          font: baseFontFamily,
          weights: [...fontWeights],
        },
      ]}
    />
    <Global />
  </>
);

export default withTheme(GlobalStyle);
