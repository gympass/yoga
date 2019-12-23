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
