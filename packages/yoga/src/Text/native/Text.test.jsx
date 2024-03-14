import React from 'react';
import { render } from '@testing-library/react-native';
import { Text } from '.';
import { ThemeProvider } from '../..';

describe('<Text />', () => {
  describe('Snapshots', () => {
    it('should match snapshot with Text', () => {
      const { toJSON } = render(
        <ThemeProvider>
          <Text.Display1>Live the mission</Text.Display1>
          <Text.Display2>Live the mission</Text.Display2>
          <Text.Display3>Live the mission</Text.Display3>
          <Text.Display4>Live the mission</Text.Display4>
          <Text.DisplayNumber>Live the mission</Text.DisplayNumber>
          <Text.H1>Live the mission</Text.H1>
          <Text.H2>Live the mission</Text.H2>
          <Text.H3>Live the mission</Text.H3>
          <Text.H4>Live the mission</Text.H4>
          <Text.Body1>Live the mission</Text.Body1>
          <Text.Body2>Live the mission</Text.Body2>
          <Text.Caption>Live the mission</Text.Caption>
          <Text.Overline>Live the mission</Text.Overline>
          <Text.SectionTitle>Live the mission</Text.SectionTitle>
          <Text.SmallestException>Live the mission</Text.SmallestException>
          {/* deprecated, please don't use */}
          <Text>Live the mission</Text>
          <Text.Small>Live the mission</Text.Small>
          <Text.Tiny>Live the mission</Text.Tiny>
          <Text.Regular>Live the mission</Text.Regular>
          <Text.Medium>Live the mission</Text.Medium>
          <Text.Bold>Live the mission</Text.Bold>
          <Text.Black>Live the mission</Text.Black>
        </ThemeProvider>,
      );

      expect(toJSON()).toMatchSnapshot();
    });

    it('should match snapshot with Text when v3Theme is settled', () => {
      const { toJSON } = render(
        <ThemeProvider>
          <Text.Display1>Text Display1</Text.Display1>
          <Text.Display2>Text Display2</Text.Display2>
          <Text.Display3>Text Display3</Text.Display3>
          <Text.Display4>Text Display4</Text.Display4>
          <Text.DisplayNumber>Text DisplayNumber</Text.DisplayNumber>
          <Text.H1>Text H1</Text.H1>
          <Text.H2>Text H2</Text.H2>
          <Text.H3>Text H3</Text.H3>
          <Text.H4>Text H4</Text.H4>
          <Text.Body1>Text Body1</Text.Body1>
          <Text.Body2>Text Body2</Text.Body2>
          <Text.Caption>Text Caption</Text.Caption>
          <Text.Overline>Text Overline</Text.Overline>
          <Text.SectionTitle>Text SectionTitle</Text.SectionTitle>
          <Text.SmallestException>
            Text SmallestException
          </Text.SmallestException>
          {/* deprecated, please don't use */}
          <Text>Text</Text>
          <Text.Small>Text Small</Text.Small>
          <Text.Tiny>Text Tiny</Text.Tiny>
          <Text.Regular>Text Regular</Text.Regular>
          <Text.Medium>Text Medium</Text.Medium>
          <Text.Bold>Text Bold</Text.Bold>
          <Text.Black>Text Black</Text.Black>
        </ThemeProvider>,
      );

      expect(toJSON()).toMatchSnapshot();
    });

    it('should match snapshot with Text variant', () => {
      const { toJSON } = render(
        <ThemeProvider>
          <Text.H1 variant="primary">Live the mission</Text.H1>
          <Text.H2 variant="secondary">Live the mission</Text.H2>
          <Text.H3 variant="tertiary">Live the mission</Text.H3>
        </ThemeProvider>,
      );

      expect(toJSON()).toMatchSnapshot();
    });

    it('should match snapshot with Text light', () => {
      const { toJSON } = render(
        <ThemeProvider>
          <Text.H1 light>Live the mission</Text.H1>
          <Text.H2 light>Live the mission</Text.H2>
          <Text.H3 light>Live the mission</Text.H3>
        </ThemeProvider>,
      );

      expect(toJSON()).toMatchSnapshot();
    });

    it('should match snapshot with Text fontSize', () => {
      const { toJSON } = render(
        <ThemeProvider>
          <Text.Small fontSize="xsmall">Live the small mission</Text.Small>
          <Text.Tiny fontSize="medium">Live the medium mission</Text.Tiny>
          <Text.Regular fontSize="xlarge">Live the xlarge mission</Text.Regular>
          <Text.Medium fontSize="xxxlarge">
            Live the xxxlarge mission
          </Text.Medium>
        </ThemeProvider>,
      );

      expect(toJSON()).toMatchSnapshot();
    });

    it('should match snapshot with Text size', () => {
      const { toJSON } = render(
        <ThemeProvider>
          <Text.Small size="xsmall">Live the small mission</Text.Small>
          <Text.Tiny size="medium">Live the medium mission</Text.Tiny>
          <Text.Regular size="xlarge">Live the xlarge mission</Text.Regular>
          <Text.Medium size="xxxlarge">Live the xxxlarge mission</Text.Medium>
        </ThemeProvider>,
      );

      expect(toJSON()).toMatchSnapshot();
    });

    it('should match snapshot with inverted Text', () => {
      const { toJSON } = render(
        <ThemeProvider>
          <Text inverted>Live the mission</Text>
        </ThemeProvider>,
      );

      expect(toJSON()).toMatchSnapshot();
    });

    it('should match snapshot with truncated lines Text', () => {
      const { toJSON } = render(
        <ThemeProvider>
          <Text numberOfLines={1}>
            Live the mission
            <br />
            even in one line
          </Text>
        </ThemeProvider>,
      );

      expect(toJSON()).toMatchSnapshot();
    });

    it('should match snapshot with border prop system', () => {
      const { toJSON } = render(
        <ThemeProvider>
          <Text border="small" bRadius="small">
            Live the mission
          </Text>
        </ThemeProvider>,
      );

      expect(toJSON()).toMatchSnapshot();
    });

    it('should match snapshot with background color prop system', () => {
      const { toJSON } = render(
        <ThemeProvider>
          <Text backgroundColor="vibin">Live the mission</Text>
        </ThemeProvider>,
      );

      expect(toJSON()).toMatchSnapshot();
    });

    it('should match snapshot with elevation prop system', () => {
      const { toJSON } = render(
        <ThemeProvider>
          <Text elevation="medium">Live the mission</Text>
        </ThemeProvider>,
      );

      expect(toJSON()).toMatchSnapshot();
    });

    it('should match snapshot with spacing prop system', () => {
      const { toJSON } = render(
        <ThemeProvider>
          <Text m="medium" paddingVertical="large" paddingHorizontal="small">
            Live the mission
          </Text>
        </ThemeProvider>,
      );

      expect(toJSON()).toMatchSnapshot();
    });

    it('should match snapshot with typography prop system', () => {
      const { toJSON } = render(
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

      expect(toJSON()).toMatchSnapshot();
    });

    it('should match snapshot with display prop system', () => {
      const { toJSON } = render(
        <ThemeProvider>
          <Text display="flex">Live the mission</Text>
        </ThemeProvider>,
      );

      expect(toJSON()).toMatchSnapshot();
    });

    it('should match snapshot with position prop system', () => {
      const { toJSON } = render(
        <ThemeProvider>
          <Text position="absolute" top="small" left="small">
            Live the mission
          </Text>
        </ThemeProvider>,
      );

      expect(toJSON()).toMatchSnapshot();
    });

    it('should match snapshot with flexes prop system', () => {
      const { toJSON } = render(
        <ThemeProvider>
          <Text display="flex" flexGrow={1}>
            Live the mission
          </Text>
        </ThemeProvider>,
      );

      expect(toJSON()).toMatchSnapshot();
    });

    it('should match snapshot with overflows prop system', () => {
      const { toJSON } = render(
        <ThemeProvider>
          <Text overflow="scroll">Live the mission</Text>
        </ThemeProvider>,
      );

      expect(toJSON()).toMatchSnapshot();
    });

    it('should match snapshot with Text bold', () => {
      const { toJSON } = render(
        <ThemeProvider>
          <Text.H1 bold>Live the mission</Text.H1>
          <Text.H2 bold>Live the mission</Text.H2>
          <Text.H3 bold>Live the mission</Text.H3>
        </ThemeProvider>,
      );

      expect(toJSON()).toMatchSnapshot();
    });
  });
});
