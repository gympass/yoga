import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from '../..';
import { Col } from '.';

describe('<Col />', () => {
  describe('Snapshots', () => {
    it('should match snapshot with default Col', () => {
      const { container } = render(
        <ThemeProvider>
          <Col />
        </ThemeProvider>,
      );
      expect(container).toMatchSnapshot();
    });

    it('should match snapshot with different Col size', () => {
      const { container } = render(
        <ThemeProvider>
          <Col xxs={6} />
        </ThemeProvider>,
      );
      expect(container).toMatchSnapshot();
    });

    it('should be the same column size from medium to xxxl', () => {
      const { container } = render(
        <ThemeProvider>
          <Col md={6} />
        </ThemeProvider>,
      );
      expect(container).toMatchSnapshot();
    });

    it('should set column offsets', () => {
      const { container } = render(
        <ThemeProvider>
          <Col md-start={3} md={6} />
        </ThemeProvider>,
      );
      expect(container).toMatchSnapshot();
    });

    it('should hide Col in a xs and xm breakpoints', () => {
      const { container } = render(
        <ThemeProvider>
          <Col hide={['xs', 'sm']} md={6} />
        </ThemeProvider>,
      );

      expect(container).toMatchSnapshot();
    });
  });
});
