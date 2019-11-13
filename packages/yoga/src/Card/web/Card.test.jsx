import React from 'react';
import { render } from '@testing-library/react';
import ThemeProvider from '../../ThemeProvider';
import Card from './Card';

describe('<Card />', () => {
  describe('Snapshots', () => {
    it('should match snapshot with default Card', () => {
      const { container } = render(
        <ThemeProvider>
          <Card>
            <h1>Hello World</h1>
          </Card>
        </ThemeProvider>,
      );
      expect(container).toMatchSnapshot();
    });
  });
});
