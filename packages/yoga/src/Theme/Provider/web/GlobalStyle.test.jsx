import React from 'react';
import { render } from '@testing-library/react';
import tokens from '@gympass/yoga-tokens';
import theme from '../../themes';

import GlobalStyle from './GlobalStyle';
import ThemeProvider from './ThemeProvider';
import expectCSSMatches from './expectCssMatches';

const { baseFontFamily } = theme(tokens);

describe('GlobalStyle component', () => {
  it('Should add standart font via @import', () => {
    render(
      <ThemeProvider>
        <GlobalStyle />
      </ThemeProvider>,
    );

    expectCSSMatches(
      `@import url(https://fonts.googleapis.com/css?family=${baseFontFamily}:400,600,700,400i,600i,700i&display=swap);`,
    );
  });
  it('Should use standard font in the body', () => {
    render(
      <ThemeProvider>
        <GlobalStyle />
      </ThemeProvider>,
    );

    expectCSSMatches(
      `body {
        font-family: ${baseFontFamily};
      }`,
    );
  });
});
