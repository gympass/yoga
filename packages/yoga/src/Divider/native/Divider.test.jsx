import React from 'react';
import { render } from '@testing-library/react-native';

import { ThemeProvider, Divider, Box, Text } from '../..';

describe('<Divider />', () => {
  it('should create a divider component', () => {
    const { container } = render(
      <ThemeProvider>
        <Box
          display="flex"
          flexDirection="column"
          minWidth={300}
          justifyContent="space-between"
        >
          <Text.H4>First Content</Text.H4>
          <Divider />
          <Text.H4>Second Content</Text.H4>
        </Box>
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });

  it('should create vertical divider component', () => {
    const { container } = render(
      <ThemeProvider>
        <Box
          display="flex"
          flexDirection="row"
          minWidth={300}
          justifyContent="space-between"
        >
          <Text.H4>First Content</Text.H4>
          <Divider vertical />
          <Text.H4>Second Content</Text.H4>
        </Box>
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });
});
