import React from 'react';
import { render } from '@testing-library/react-native';
import { Text } from 'react-native';
import ThemeProvider from '../../ThemeProvider';
import Card from '..';

describe('<Card />', () => {
  describe('Snapshots', () => {
    it('should match snapshot with default Card', () => {
      const { container } = render(
        <ThemeProvider>
          <Card>
            <Text>Hello World</Text>
          </Card>
        </ThemeProvider>,
      );
      expect(container).toMatchSnapshot();
    });
  });
});
