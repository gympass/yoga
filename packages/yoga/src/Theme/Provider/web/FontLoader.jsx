import React from 'react';
import GoogleFontLoader from 'react-google-font-loader';
import { withTheme } from 'styled-components';

const FontLoader = ({
  theme: {
    yoga: {
      baseFont: { family, weight },
    },
  },
}) => {
  const weightValues = Object.values(weight);

  const uniqueWeights = [...new Set(weightValues)];

  return (
    <>
      {typeof window !== 'undefined' ? (
        <GoogleFontLoader fonts={[{ font: family, weights: uniqueWeights }]} />
      ) : (
        <link
          rel="stylesheet"
          href={`https://fonts.googleapis.com/css?family=${family}:${uniqueWeights.join()}`}
        />
      )}
    </>
  );
};

export default withTheme(FontLoader);
