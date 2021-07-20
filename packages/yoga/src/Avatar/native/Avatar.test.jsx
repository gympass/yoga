import React from 'react';
import { render } from '@testing-library/react-native';

import { UserFilled } from '@gympass/yoga-icons';
import { ThemeProvider } from '../..';
import Avatar from './Avatar';

describe('<Avatar />', () => {
  it('should match snapshot in default avatar', () => {
    const { container } = render(
      <ThemeProvider>
        <Avatar width={78} height={78} fill="black" />
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });
  it('should match snapshot in default avatar with placeholder prop', () => {
    const { container } = render(
      <ThemeProvider>
        <Avatar placeholder={UserFilled} />
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });
  it('should match snapshot in circle avatar', () => {
    const { container } = render(
      <ThemeProvider>
        <Avatar.Circle />
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });
  it('should match snapshot in circle avatar with placeholder prop', () => {
    const { container } = render(
      <ThemeProvider>
        <Avatar.Circle placeholder={UserFilled} />
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });
});
