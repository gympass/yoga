import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from '../..';
import { Container } from '.';

describe('<Container />', () => {
  describe('Snapshots', () => {
    it('should match snapshot with default Container', () => {
      const { container } = render(
        <ThemeProvider>
          <Container />
        </ThemeProvider>,
      );
      expect(container).toMatchSnapshot();
    });
  });
});
