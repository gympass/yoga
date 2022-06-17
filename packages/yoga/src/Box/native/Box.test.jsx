import React from 'react';
import { render } from '@testing-library/react-native';

import { ThemeProvider, Box, Text } from '../..';

describe('<Box />', () => {
  it('should match snapshot', () => {
    const { toJSON } = render(
      <ThemeProvider>
        <Box
          b="small"
          p="small"
          borderRadius="small"
          color="feedback.success.dark"
        >
          <Text>Making wellbeing universal</Text>
        </Box>
      </ThemeProvider>,
    );

    expect(toJSON()).toMatchSnapshot();
  });
});
