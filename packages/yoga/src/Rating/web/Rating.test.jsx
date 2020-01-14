import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from '../..';
import Rating from '.';

describe('<Rating />', () => {
  describe('Snapshots', () => {
    it('should match snapshot with Rating', () => {
      const { container } = render(
        <ThemeProvider>
          <Rating />
        </ThemeProvider>,
      );
      expect(container).toMatchSnapshot();
    });

    it('should match snapshot with different values', () => {
      const { container } = render(
        <ThemeProvider>
          <Rating value={0} />
          <Rating value={0.5} />

          <Rating value={1} />
          <Rating value={1.1} />
          <Rating value={1.2} />
          <Rating value={1.3} />
          <Rating value={1.4} />
          <Rating value={1.5} />
          <Rating value={1.6} />
          <Rating value={1.7} />
          <Rating value={1.8} />
          <Rating value={1.9} />

          <Rating value={2} />
          <Rating value={2.5} />
          <Rating value={3} />
          <Rating value={3.5} />
          <Rating value={4} />
          <Rating value={4.5} />
        </ThemeProvider>,
      );
      expect(container).toMatchSnapshot();
    });

    it('should match snapshot with different icon quantity', () => {
      const { container } = render(
        <ThemeProvider>
          <Rating iconQuantity={3} value={0} />
          <Rating iconQuantity={3} value={0.5} />
          <Rating iconQuantity={3} value={1} />
          <Rating iconQuantity={3} value={1.5} />
          <Rating iconQuantity={3} value={2} />
          <Rating iconQuantity={3} value={2.5} />
          <Rating iconQuantity={3} value={3} />
        </ThemeProvider>,
      );
      expect(container).toMatchSnapshot();
    });

    it('should match snapshot with different icon', () => {
      const Circle = props => (
        <svg {...props}>
          <circle cx="6" cy="6" r="6" />
        </svg>
      );

      const { container } = render(
        <ThemeProvider>
          <Rating icon={Circle} value={0} />
          <Rating icon={Circle} value={1} />
          <Rating icon={Circle} value={2} />
        </ThemeProvider>,
      );
      expect(container).toMatchSnapshot();
    });
  });
});
