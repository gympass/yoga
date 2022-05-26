import React from 'react';
import { render } from '@testing-library/react';

import { Upload2 } from '@gympass/yoga-icons/src';
import { ThemeProvider, Heading } from '../..';
import Title from './Title';
import BackButton from './BackButton';
import RightButton from './RightButton';

describe('<Heading />', () => {
  it('should match snapshot with title', () => {
    const { container } = render(
      <ThemeProvider>
        <Heading>
          <Title>Gympass</Title>
        </Heading>
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });

  it('should match snapshot with title and back button', () => {
    const { container } = render(
      <ThemeProvider>
        <Heading>
          <Title>Gympass</Title>
          <BackButton />
        </Heading>
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });

  it('should match snapshot with all components', () => {
    const { container } = render(
      <ThemeProvider>
        <Heading>
          <Title>Gympass</Title>
          <BackButton />
          <RightButton icon={Upload2} />
        </Heading>
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });

  it('should match snapshot with back button', () => {
    const { container } = render(
      <ThemeProvider>
        <Heading>
          <BackButton />
        </Heading>
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });
});
