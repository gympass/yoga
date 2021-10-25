import React from 'react';
import { render } from '@testing-library/react';

import { ThemeProvider, BottomSheet } from '../..';

describe('<BottomSheet />', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <ThemeProvider>
        <BottomSheet />
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });
});
