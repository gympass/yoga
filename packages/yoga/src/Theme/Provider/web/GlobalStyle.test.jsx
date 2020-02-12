import React from 'react';
import { render } from '@testing-library/react';
import tokens from '@gympass/yoga-tokens';
import theme from '../../themes';

import GlobalStyle from './GlobalStyle';
import ThemeProvider from './ThemeProvider';
import expectCSSMatches from './expectCssMatches';

const { baseFont } = theme(tokens);

describe('GlobalStyle component', () => {
  it('Should create standard font link', () => {
    render(
      <ThemeProvider>
        <GlobalStyle />
      </ThemeProvider>,
    );
    const link = document.getElementsByTagName('link').item(0).outerHTML;
    expect(link).toContain(
      '<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,400i,600i,700i">',
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
        font-family: "${baseFont.family}";
      }`,
    );
  });
});
