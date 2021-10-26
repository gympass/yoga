import React from 'react';
import { render } from '@testing-library/react-native';

import { ThemeProvider, BottomSheet } from '../..';

describe('<BottomSheet />', () => {
  it.skip('should match snapshot', () => {
    const { container } = render(
      <ThemeProvider>
        <BottomSheet />
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });
});
