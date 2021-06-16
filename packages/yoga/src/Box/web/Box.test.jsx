import React from 'react';
import { render } from '@testing-library/react';

import { ThemeProvider, Box } from '../..';

describe('<Box />', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <ThemeProvider>
        <Box
          b="small"
          p="small"
          borderRadius="small"
          color="feedback.success.dark"
        >
          Making wellbeing universal
        </Box>
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });
});
