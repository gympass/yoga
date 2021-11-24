import React from 'react';
import { render } from '@testing-library/react-native';

import { ThemeProvider, Divider } from '../..';

describe('<Divider />', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <ThemeProvider>
        <Divider />
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });
});
