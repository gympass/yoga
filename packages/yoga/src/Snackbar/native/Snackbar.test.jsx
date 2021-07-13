import React from 'react';
import { render } from '@testing-library/react-native';

import { ThemeProvider, Snackbar } from '../..';

describe('<Snackbar />', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <ThemeProvider>
        <Snackbar />
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });
});
