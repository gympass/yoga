import React from 'react';
import { render } from '@testing-library/react';
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

  it('should match snapshot in default avatar with src and alt prop', () => {
    const { container } = render(
      <ThemeProvider>
        <Avatar src="https://github.com/Gympass.png" alt="Gympass brand logo" />
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });

  it('should match snapshot in default avatar with placeholder prop', () => {
    const { container } = render(
      <ThemeProvider>
        <Avatar icon={UserFilled} />
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
        <Avatar.Circle icon={UserFilled} />
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });

  it('should match snapshot in circle avatar with src and alt prop', () => {
    const { container } = render(
      <ThemeProvider>
        <Avatar.Circle
          src="https://github.com/Gympass.png"
          alt="Gympass brand logo"
        />
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });
  it('should match snapshot in avatar with children prop', () => {
    const { container } = render(
      <ThemeProvider>
        <Avatar>
          <p>LC</p>
        </Avatar>
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });
});
