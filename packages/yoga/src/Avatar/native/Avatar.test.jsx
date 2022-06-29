import React from 'react';
import { render } from '@testing-library/react-native';

import { UserFilled } from '@gympass/yoga-icons';
import { ThemeProvider } from '../..';
import Avatar from './Avatar';
import Text from '../../Text';

describe('<Avatar />', () => {
  it('should match snapshot in default avatar', () => {
    const { toJSON } = render(
      <ThemeProvider>
        <Avatar width={78} height={78} fill="black" />
      </ThemeProvider>,
    );

    expect(toJSON()).toMatchSnapshot();
  });
  it('should match snapshot in default avatar with placeholder prop', () => {
    const { toJSON } = render(
      <ThemeProvider>
        <Avatar placeholder={UserFilled} />
      </ThemeProvider>,
    );

    expect(toJSON()).toMatchSnapshot();
  });
  it('should match snapshot in circle avatar', () => {
    const { toJSON } = render(
      <ThemeProvider>
        <Avatar.Circle />
      </ThemeProvider>,
    );

    expect(toJSON()).toMatchSnapshot();
  });
  it('should match snapshot in circle avatar with placeholder prop', () => {
    const { toJSON } = render(
      <ThemeProvider>
        <Avatar.Circle placeholder={UserFilled} />
      </ThemeProvider>,
    );

    expect(toJSON()).toMatchSnapshot();
  });
  it('should match snapshot in avatar with children prop', () => {
    const { toJSON } = render(
      <ThemeProvider>
        <Avatar>
          <Text>AL</Text>
        </Avatar>
      </ThemeProvider>,
    );

    expect(toJSON()).toMatchSnapshot();
  });
});
