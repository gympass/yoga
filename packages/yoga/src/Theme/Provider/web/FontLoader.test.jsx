import React from 'react';
import { render } from '@testing-library/react';
import FontLoader from './FontLoader';

import ThemeProvider from './ThemeProvider';

describe('FontLoader component', () => {
  it('Should create standard font link', () => {
    render(
      <ThemeProvider>
        <FontLoader />
      </ThemeProvider>,
    );
    const link = document.getElementsByTagName('link').item(0).outerHTML;

    expect(link).toContain(
      `<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Rubik:300,400,500,700,900,300i,400i,500i,700i,900i">`,
    );
  });
});
