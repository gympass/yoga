import React from 'react';
import { render } from '@testing-library/react';
import tokens from '@gympass/yoga-tokens';
import theme from '../../theme';

import GlobalStyle from './GlobalStyle';
import ThemeProvider from './ThemeProvider';
import expectCSSMatches from './expectCssMatches';

const { baseFont } = theme(tokens);

describe('GlobalStyle component', () => {
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
