import React from 'react';
import { render } from '@testing-library/react-native';

import { ThemeProvider, Snackbar } from '../..';

describe('<Snackbar />', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.useFakeTimers();
  });

  it('should match snapshot', () => {
    const { container } = render(
      <ThemeProvider>
        <Snackbar message="Default snackbar" />
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });
});
