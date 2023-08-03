import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ThemeProvider from '../../Theme';
import Slider from './Slider';

describe('<Slider />', () => {
  describe('Snapshots', () => {
    describe('With one marker', () => {
      it('should match snapshot with default Slider', () => {
        const { root, toJSON } = render(
          <ThemeProvider>
            <Slider />
          </ThemeProvider>,
        );

        expect(toJSON(root)).toMatchSnapshot();
      });

      it('should match snapshot with Slider with labels', () => {
        const { root, toJSON } = render(
          <ThemeProvider>
            <Slider minLabel={0} maxLabel={10} />
          </ThemeProvider>,
        );

        expect(toJSON(root)).toMatchSnapshot();
      });

      it('should match snapshot with Slider snapped', () => {
        const { root, toJSON } = render(
          <ThemeProvider>
            <Slider snapped />
          </ThemeProvider>,
        );

        expect(toJSON(root)).toMatchSnapshot();
      });
    });
    describe('With two markers', () => {
      it('should match snapshot', () => {
        const { root, toJSON } = render(
          <ThemeProvider>
            <Slider values={[3, 7]} />
          </ThemeProvider>,
        );

        expect(toJSON(root)).toMatchSnapshot();
      });

      it('should match snapshot with Slider snapped', () => {
        const { root, toJSON } = render(
          <ThemeProvider>
            <Slider values={[3, 7]} snapped />
          </ThemeProvider>,
        );

        expect(toJSON(root)).toMatchSnapshot();
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
      const { root, getByText, getByRole, toJSON } = render(
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

      fireEvent(getByRole('adjustable'), 'responderGrant', {
        touchHistory: { touchBank: {} },
      });

      expect(getByText('ribbon')).toBeTruthy();
      expect(getByText('title')).toBeTruthy();
      expect(getByText('description')).toBeTruthy();

      expect(toJSON(root)).toMatchSnapshot();
    });

    it('should render tooltip on a specific step', () => {
      const { root, getByText, getByRole, toJSON } = render(
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

      fireEvent(getByRole('adjustable'), 'responderGrant', {
        touchHistory: { touchBank: {} },
      });

      expect(getByText('ribbon')).toBeTruthy();
      expect(getByText('title')).toBeTruthy();
      expect(getByText('description')).toBeTruthy();

      expect(toJSON(root)).toMatchSnapshot();
    });
  });
});
