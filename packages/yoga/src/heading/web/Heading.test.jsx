import React from 'react';
import { render } from '@testing-library/react';

import { ThemeProvider, Heading } from '../..';

describe('<Heading />', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <ThemeProvider>
        <Heading />
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });
});
