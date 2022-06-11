import React from 'react';
import { render } from '@testing-library/react-native';
import { Text } from 'react-native';
import { ThemeProvider, Button } from '../../..';
import Card from '.';

describe('<Card />', () => {
  describe('Snapshots', () => {
    it('should match snapshot with default Card', () => {
      const { toJSON } = render(
        <ThemeProvider>
          <Card>
            <Card.Header>
              <Text>Hello World</Text>
            </Card.Header>
            <Card.Content>
              <Text>It&apos;s fine here</Text>
            </Card.Content>
            <Card.Actions>
              <Button>Action&apos;s children must be Button</Button>
            </Card.Actions>
          </Card>
        </ThemeProvider>,
      );

      expect(toJSON()).toMatchSnapshot();
    });
  });
});
