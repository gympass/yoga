import React from 'react';
import { render } from '@testing-library/react';

import { ThemeProvider, Avatar } from '../..';

describe('<Avatar />', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <ThemeProvider>
        <Avatar />
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });
});
