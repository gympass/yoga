import React from 'react';
import { render } from '@testing-library/react';

import { ThemeProvider, Divider, Box, Text } from '../..';

describe('<Divider />', () => {
  it('should create a divider component', () => {
    const { container } = render(
      <ThemeProvider>
        <Box flex={1} display="flex" flexDirection="column" minHeight={50}>
          <Text.Regular>First Content</Text.Regular>
          <Divider />
          <Text.Regular>Second Content</Text.Regular>
        </Box>
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });

  it('should create a vertical divider component', () => {
    const { container } = render(
      <ThemeProvider>
        <Box flex={1} display="flex" flexDirection="row" minHeight={50}>
          <Text.Regular>First Content</Text.Regular>
          <Divider vertical />
          <Text.Regular>Second Content</Text.Regular>
        </Box>
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });
});
