import React from 'react';
import { render } from '@testing-library/react';

import { Upload2 } from '@gympass/yoga-icons/src';
import { ThemeProvider, Heading } from '../..';
import Title from './Title';
import BackButton from './BackButton';
import RightButton from './RightButton';

const onClick = () => {};

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
          <BackButton onClick={onClick} />
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
          <BackButton onClick={onClick} />
          <RightButton icon={Upload2} onClick={onClick} />
        </Heading>
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });

  it('should match snapshot with back button', () => {
    const { container } = render(
      <ThemeProvider>
        <Heading>
          <BackButton onClick={onClick} />
        </Heading>
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });

  it('should match snapshot no padding', () => {
    const { container } = render(
      <ThemeProvider>
        <Heading noPadding>
          <Title>Gympass</Title>
          <BackButton onClick={onClick} />
          <RightButton icon={Upload2} onClick={onClick} />
        </Heading>
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });

  it('should have aria-label', () => {
    const { getByLabelText } = render(
      <ThemeProvider>
        <Heading noPadding>
          <Title>Gympass</Title>
          <BackButton onClick={onClick} />
          <RightButton
            icon={Upload2}
            onClick={onClick}
            aria-label="labelAriaText"
          />
        </Heading>
      </ThemeProvider>,
    );

    expect(getByLabelText('labelAriaText')).toBeTruthy();
  });

  it('should override the background color', () => {
    const { container } = render(
      <ThemeProvider>
        <Heading bg="yoga">
          <Title>Gympass</Title>
        </Heading>
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });
});
