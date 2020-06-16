import React from 'react';
import { render, toJSON, fireEvent } from '@testing-library/react-native';
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
    it('should render tooltip', () => {
      const { container, getByText, getByRole } = render(
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

      fireEvent.responderGrant(getByRole('adjustable'), {
        touchHistory: { touchBank: {} },
      });

      expect(getByText('ribbon')).toBeTruthy();
      expect(getByText('title')).toBeTruthy();
      expect(getByText('description')).toBeTruthy();

      expect(toJSON(container)).toMatchSnapshot();
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

      expect(toJSON(container)).toMatchSnapshot();
    });

    it('should render tooltip on a specific step', () => {
      const { container, getByText, getByRole } = render(
        <ThemeProvider>
          <Slider
            values={[2]}
            tooltip={[
              {
                ribbon: 'ribbon',
                title: 'title',
                description: 'description',
                visible: true,
                step: 2,
              },
            ]}
          />
        </ThemeProvider>,
      );

      fireEvent.responderGrant(getByRole('adjustable'), {
        touchHistory: { touchBank: {} },
      });

      expect(getByText('ribbon')).toBeTruthy();
      expect(getByText('title')).toBeTruthy();
      expect(getByText('description')).toBeTruthy();

      expect(toJSON(container)).toMatchSnapshot();
    });
  });
});
