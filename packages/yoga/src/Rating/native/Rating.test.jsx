import React from 'react';
import { render } from '@testing-library/react-native';
import Svg, { Circle } from 'react-native-svg';

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
          <Rating max={3} value={0} />
          <Rating max={3} value={0.5} />
          <Rating max={3} value={1} />
          <Rating max={3} value={1.5} />
          <Rating max={3} value={2} />
          <Rating max={3} value={2.5} />
          <Rating max={3} value={3} />
        </ThemeProvider>,
      );
      expect(container).toMatchSnapshot();
    });

    it('should match snapshot with different icon', () => {
      const CircleIcon = props => (
        <Svg {...props}>
          <Circle cx={6} cy={6} r={6} />
        </Svg>
      );

      const { container } = render(
        <ThemeProvider>
          <Rating icon={CircleIcon} value={0} />
          <Rating icon={CircleIcon} value={1} />
          <Rating icon={CircleIcon} value={2} />
        </ThemeProvider>,
      );
      expect(container).toMatchSnapshot();
    });
  });
});
