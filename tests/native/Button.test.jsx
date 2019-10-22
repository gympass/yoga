import React from 'react';
import { render, toJSON } from '@testing-library/react-native';
import { ThemeProvider, Button } from '@gympass/design-system';

describe('<Button />', () => {
  describe('Snapshots', () => {
    describe('Without props', () => {
      it('should match snapshot with default Button', () => {
        const { container } = render(
          <ThemeProvider>
            <Button>Foo</Button>
          </ThemeProvider>,
        );
        expect(toJSON(container)).toMatchSnapshot();
      });
    });
  });
});
