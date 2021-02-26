import React from 'react';
import { render } from '@testing-library/react-native';
import { ThemeProvider } from '../..';
import { Text } from '.';

describe('<Text />', () => {
  describe('Snapshots', () => {
    it('should match snapshot with Text', () => {
      const { container } = render(
        <ThemeProvider>
          <Text.H1>Live the mission</Text.H1>
          <Text.H2>Live the mission</Text.H2>
          <Text.H3>Live the mission</Text.H3>
          <Text.H4>Live the mission</Text.H4>
          <Text>Live the mission</Text>
          <Text.Small>Live the mission</Text.Small>
          <Text.Tiny>Live the mission</Text.Tiny>
          <Text.Regular>Live the mission</Text.Regular>
          <Text.Medium>Live the mission</Text.Medium>
          <Text.Bold>Live the mission</Text.Bold>
          <Text.Black>Live the mission</Text.Black>
          <Text.SectionTitle>Live the mission</Text.SectionTitle>
        </ThemeProvider>,
      );
      expect(container).toMatchSnapshot();
    });

    it('should match snapshot with Text variant', () => {
      const { container } = render(
        <ThemeProvider>
          <Text.H1 variant="primary">Live the mission</Text.H1>
          <Text.H2 variant="secondary">Live the mission</Text.H2>
          <Text.H3 variant="tertiary">Live the mission</Text.H3>
        </ThemeProvider>,
      );
      expect(container).toMatchSnapshot();
    });

    it('should match snapshot with Text light', () => {
      const { container } = render(
        <ThemeProvider>
          <Text.H1 light>Live the mission</Text.H1>
          <Text.H2 light>Live the mission</Text.H2>
          <Text.H3 light>Live the mission</Text.H3>
        </ThemeProvider>,
      );
      expect(container).toMatchSnapshot();
    });

    it('should match snapshot with Text size', () => {
      const { container } = render(
        <ThemeProvider>
          <Text.Small size="xsmall">Live the small mission</Text.Small>
          <Text.Tiny size="medium">Live the medium mission</Text.Tiny>
          <Text.Regular size="xlarge">Live the xlarge mission</Text.Regular>
          <Text.Medium size="xxxlarge">Live the xxxlarge mission</Text.Medium>
        </ThemeProvider>,
      );
      expect(container).toMatchSnapshot();
    });

    it('should match snapshot with inverted Text', () => {
      const { container } = render(
        <ThemeProvider>
          <Text inverted>Live the mission</Text>
        </ThemeProvider>,
      );
      expect(container).toMatchSnapshot();
    });
  });
});
