import React from 'react';
import { render } from '@testing-library/react-native';

import { ThemeProvider } from '../..';
import Avatar from './Avatar';

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
