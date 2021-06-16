import React from 'react';
import { render } from '@testing-library/react-native';

import { ThemeProvider, Box, Text } from '../..';

describe('<Box />', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <ThemeProvider>
        <Box
          b="small"
          p="small"
          borderRadius="small"
          color="feedback.success.dark"
          as={Text}
        >
          Making wellbeing universal
        </Box>
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });
});
