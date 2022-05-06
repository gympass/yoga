import React from 'react';
import { render } from '@testing-library/react';

import { ThemeProvider, Menu } from '../..';

describe('<Menu />', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <ThemeProvider>
        <Menu />
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });
});
