import React from 'react';
import GoogleFontLoader from 'react-google-font-loader';
import { withTheme } from 'styled-components';

const FontLoader = ({
  theme: {
    yoga: {
      baseFont: { family, weight },
    },
  },
}) => (
  <>
    {typeof window !== 'undefined' ? (
      <GoogleFontLoader fonts={[{ font: family, weights: weight }]} />
    ) : (
      <link
        rel="stylesheet"
        href={`https://fonts.googleapis.com/css?family=${family}:${weight.join()}`}
      />
    )}
  </>
);

export default withTheme(FontLoader);
