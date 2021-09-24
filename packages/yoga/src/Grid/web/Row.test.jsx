import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from '../..';
import { Row } from '.';

describe('<Row />', () => {
  describe('Snapshots', () => {
    it('should match snapshot with default Row', () => {
      const { container } = render(
        <ThemeProvider>
          <Row />
        </ThemeProvider>,
      );

      expect(container).toMatchSnapshot();
    });
  });
});
