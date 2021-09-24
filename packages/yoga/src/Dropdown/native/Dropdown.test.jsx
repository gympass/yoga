import React from 'react';
import { render } from '@testing-library/react-native';
import { ThemeProvider, Dropdown } from '../..';

jest.useFakeTimers();

const dropdownProps = {
  label: 'Find an activity to love',
  options: [
    { label: 'Yoga', value: 'yoga' },
    { label: 'Crossfit', value: 'crossfit' },
    { label: 'Tenis', value: 'tenis' },
    { label: 'Soccer', value: 'soccer' },
    { label: 'Pilates', value: 'pilates' },
    { label: 'Run', value: 'running' },
  ],
};

describe('<Dropdown />', () => {
  describe('Snapshots', () => {
    it('should match snapshot', () => {
      const { container } = render(
        <ThemeProvider>
          <Dropdown {...dropdownProps} />
        </ThemeProvider>,
      );

      expect(container).toMatchSnapshot();
    });

    it('should match snapshot when disabled', () => {
      const { container } = render(
        <ThemeProvider>
          <Dropdown disabled {...dropdownProps} />
        </ThemeProvider>,
      );

      expect(container).toMatchSnapshot();
    });

    it('should match snapshot when full', () => {
      const { container } = render(
        <ThemeProvider>
          <Dropdown full {...dropdownProps} />
        </ThemeProvider>,
      );

      expect(container).toMatchSnapshot();
    });

    it('should match snapshot when has a selected value', () => {
      const selectedOption = {
        label: 'Swimming',
        value: 'swimming',
        selected: true,
      };
      const props = dropdownProps;

      props.options.push(selectedOption);

      const { container } = render(
        <ThemeProvider>
          <Dropdown disabled {...props} />
        </ThemeProvider>,
      );

      expect(container).toMatchSnapshot();
    });

    it('should match snapshot with error', () => {
      const { container } = render(
        <ThemeProvider>
          <Dropdown {...dropdownProps} error="Please, select one activity" />
        </ThemeProvider>,
      );

      expect(container).toMatchSnapshot();
    });
  });
});
