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
          <Text.SmallestException>Live the mission</Text.SmallestException>
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

    it('should match snapshot with truncated lines Text', () => {
      const { container } = render(
        <ThemeProvider>
          <Text numberOfLines={1}>
            Live the mission
            <br />
            even in one line
          </Text>
        </ThemeProvider>,
      );

      expect(container).toMatchSnapshot();
    });

    it('should match snapshot with border prop system', () => {
      const { container } = render(
        <ThemeProvider>
          <Text border="small" bRadius="small">
            Live the mission
          </Text>
        </ThemeProvider>,
      );

      expect(container).toMatchSnapshot();
    });

    it('should match snapshot with background color prop system', () => {
      const { container } = render(
        <ThemeProvider>
          <Text backgroundColor="vibin">Live the mission</Text>
        </ThemeProvider>,
      );

      expect(container).toMatchSnapshot();
    });

    it('should match snapshot with elevation prop system', () => {
      const { container } = render(
        <ThemeProvider>
          <Text elevation="medium">Live the mission</Text>
        </ThemeProvider>,
      );

      expect(container).toMatchSnapshot();
    });

    it('should match snapshot with spacing prop system', () => {
      const { container } = render(
        <ThemeProvider>
          <Text m="medium" paddingVertical="large" paddingHorizontal="small">
            Live the mission
          </Text>
        </ThemeProvider>,
      );

      expect(container).toMatchSnapshot();
    });

    it('should match snapshot with typography prop system', () => {
      const { container } = render(
        <ThemeProvider>
          <Text
            color="text.primary"
            fontSize="small"
            fontWeight="medium"
            lineHeight="small"
          >
            Live the mission
          </Text>
        </ThemeProvider>,
      );

      expect(container).toMatchSnapshot();
    });

    it('should match snapshot with display prop system', () => {
      const { container } = render(
        <ThemeProvider>
          <Text display="flex">Live the mission</Text>
        </ThemeProvider>,
      );

      expect(container).toMatchSnapshot();
    });

    it('should match snapshot with position prop system', () => {
      const { container } = render(
        <ThemeProvider>
          <Text position="absolute" top="small" left="small">
            Live the mission
          </Text>
        </ThemeProvider>,
      );

      expect(container).toMatchSnapshot();
    });

    it('should match snapshot with flexes prop system', () => {
      const { container } = render(
        <ThemeProvider>
          <Text display="flex" flexGrow={1}>
            Live the mission
          </Text>
        </ThemeProvider>,
      );

      expect(container).toMatchSnapshot();
    });

    it('should match snapshot with overflows prop system', () => {
      const { container } = render(
        <ThemeProvider>
          <Text overflow="scroll">Live the mission</Text>
        </ThemeProvider>,
      );

      expect(container).toMatchSnapshot();
    });
  });
});
