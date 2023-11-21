import React from 'react';
import { render } from '@testing-library/react';

import { ThemeProvider, Spinner } from '../..';

describe('<Spinner />', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <ThemeProvider>
        <Spinner size="xxxlarge" color="light" />
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });
});
