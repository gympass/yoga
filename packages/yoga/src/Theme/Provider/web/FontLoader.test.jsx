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
      `<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,400i,600i,700i">`,
    );
  });
});
