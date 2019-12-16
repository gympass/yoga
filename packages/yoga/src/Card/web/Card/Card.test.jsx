import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider, Button } from '../../..';
import Card from '.';

describe('<Card />', () => {
  describe('Snapshots', () => {
    it('should match snapshot with default Card', () => {
      const { container } = render(
        <ThemeProvider>
          <Card>
            <Card.Header>Hello World</Card.Header>
            <Card.Content>It&apos;s fine here</Card.Content>
            <Card.Actions>
              <Button>Action&apos;s children must be Button</Button>
            </Card.Actions>
          </Card>
        </ThemeProvider>,
      );
      expect(container).toMatchSnapshot();
    });

    it('should match snapshot with variant Card', () => {
      const { container } = render(
        <ThemeProvider>
          <Card variant="primary">
            <Card.Header>Hello World</Card.Header>
            <Card.Content>It&apos;s fine here</Card.Content>
            <Card.Actions>
              <Button>Action&apos;s children must be Button</Button>
            </Card.Actions>
          </Card>
          <Card variant="secondary">
            <Card.Header>Hello World</Card.Header>
            <Card.Content>It&apos;s fine here</Card.Content>
            <Card.Actions>
              <Button>Action&apos;s children must be Button</Button>
            </Card.Actions>
          </Card>
          <Card variant="tertiary">
            <Card.Header>Hello World</Card.Header>
            <Card.Content>It&apos;s fine here</Card.Content>
            <Card.Actions>
              <Button>Action&apos;s children must be Button</Button>
            </Card.Actions>
          </Card>
        </ThemeProvider>,
      );
      expect(container).toMatchSnapshot();
    });
  });
});
