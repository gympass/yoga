import React from 'react';
import { render } from '@testing-library/react';

import { ThemeProvider, Chips } from '../..';

describe('<Chips />', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <ThemeProvider>
        <Chips />
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });
});
