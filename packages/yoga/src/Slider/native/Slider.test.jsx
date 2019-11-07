import React from 'react';
import { render, toJSON } from '@testing-library/react-native';
import ThemeProvider from '../../ThemeProvider';
import Slider from './Slider';
import Tooltip from './Tooltip';

describe('<Slider />', () => {
  describe('Snapshots', () => {
    describe('With one marker', () => {
      it('should match snapshot with default Slider', () => {
        const { container } = render(
          <ThemeProvider>
            <Slider />
          </ThemeProvider>,
        );
        expect(toJSON(container)).toMatchSnapshot();
      });

      it('should match snapshot with Slider with labels', () => {
        const { container } = render(
          <ThemeProvider>
            <Slider minLabel={0} maxLabel={10} />
          </ThemeProvider>,
        );
        expect(toJSON(container)).toMatchSnapshot();
      });

      it('should match snapshot with Slider snapped', () => {
        const { container } = render(
          <ThemeProvider>
            <Slider snapped />
          </ThemeProvider>,
        );
        expect(toJSON(container)).toMatchSnapshot();
      });
    });
    describe('With two markers', () => {
      it('should match snapshot', () => {
        const { container } = render(
          <ThemeProvider>
            <Slider values={[3, 7]} />
          </ThemeProvider>,
        );
        expect(toJSON(container)).toMatchSnapshot();
      });

      it('should match snapshot with Slider snapped', () => {
        const { container } = render(
          <ThemeProvider>
            <Slider values={[3, 7]} snapped />
          </ThemeProvider>,
        );
        expect(toJSON(container)).toMatchSnapshot();
      });
    });
  });

  describe('Labels', () => {
    it('should render labels', () => {
      const { getByText } = render(
        <ThemeProvider>
          <Slider maxLabel="max" minLabel="min" />
        </ThemeProvider>,
      );
      expect(getByText('max')).toHaveTextContent('max');
      expect(getByText('min')).toHaveTextContent('min');
    });
  });

  describe('Tooltip', () => {
    it('should match snapshot', () => {
      const { container } = render(
        <ThemeProvider>
          <Tooltip ribbon="ribbon" title="title" description="description" />
        </ThemeProvider>,
      );

      expect(toJSON(container)).toMatchSnapshot();
    });
  });
});
