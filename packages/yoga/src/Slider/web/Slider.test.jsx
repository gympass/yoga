import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ThemeProvider from '../../Theme';
import Slider from './Slider';

describe('<Slider />', () => {
  describe('Snapshots', () => {
    describe('With one marker', () => {
      it('should match snapshot with default Slider', () => {
        const { container } = render(
          <ThemeProvider>
            <Slider />
          </ThemeProvider>,
        );
        expect(container).toMatchSnapshot();
      });

      it('should match snapshot with Slider with labels', () => {
        const { container } = render(
          <ThemeProvider>
            <Slider minLabel={0} maxLabel={10} />
          </ThemeProvider>,
        );
        expect(container).toMatchSnapshot();
      });

      it('should match snapshot with Slider snapped', () => {
        const { container } = render(
          <ThemeProvider>
            <Slider snapped />
          </ThemeProvider>,
        );
        expect(container).toMatchSnapshot();
      });
    });
    describe('With two markers', () => {
      it('should match snapshot', () => {
        const { container } = render(
          <ThemeProvider>
            <Slider values={[3, 7]} />
          </ThemeProvider>,
        );
        expect(container).toMatchSnapshot();
      });

      it('should match snapshot with Slider snapped', () => {
        const { container } = render(
          <ThemeProvider>
            <Slider values={[3, 7]} snapped />
          </ThemeProvider>,
        );
        expect(container).toMatchSnapshot();
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
      expect(getByText('max').textContent).toBe('max');
      expect(getByText('min').textContent).toBe('min');
    });
  });

  describe('Tooltip', () => {
    it('should render tooltips', () => {
      const { container, getByRole, getByText } = render(
        <ThemeProvider>
          <Slider
            values={[0]}
            tooltip={[
              {
                ribbon: 'ribbon',
                title: 'title',
                description: 'description',
                visible: true,
              },
            ]}
          />
        </ThemeProvider>,
      );

      fireEvent.mouseDown(getByRole('slider'));

      expect(getByText('ribbon')).toBeTruthy();
      expect(getByText('title')).toBeTruthy();
      expect(getByText('description')).toBeTruthy();
      expect(container).toMatchSnapshot();
    });

    it('should keep the tooltip rendered if alwaysShow is truthy', () => {
      const { container, getByText } = render(
        <ThemeProvider>
          <Slider
            values={[0]}
            tooltip={[
              {
                ribbon: 'ribbon',
                title: 'title',
                description: 'description',
                visible: true,
                alwaysShow: true,
              },
            ]}
          />
        </ThemeProvider>,
      );

      expect(getByText('ribbon')).toBeTruthy();
      expect(getByText('title')).toBeTruthy();
      expect(getByText('description')).toBeTruthy();
      expect(container).toMatchSnapshot();
    });
  });
});
