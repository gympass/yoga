import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import Checkbox from '..';
import ThemeProvider from '../../Theme';

const data = {
  label: 'Checkbox Component',
  helper: 'Helper Text',
};

describe('<Checkbox />', () => {
  describe('Snapshots', () => {
    it('should match snapshot without label', () => {
      const { toJSON } = render(
        <ThemeProvider>
          <Checkbox />
        </ThemeProvider>,
      );

      expect(toJSON()).toMatchSnapshot();
    });

    it('should match snapshot without label', () => {
      const { toJSON } = render(
        <ThemeProvider>
          <Checkbox />
        </ThemeProvider>,
      );

      expect(toJSON()).toMatchSnapshot();
    });

    it('should match snapshot with default checkbox', () => {
      const { toJSON } = render(
        <ThemeProvider>
          <Checkbox {...data} />
        </ThemeProvider>,
      );

      expect(toJSON()).toMatchSnapshot();
    });

    it('should match snapshot with disabled checkbox', () => {
      const { toJSON } = render(
        <ThemeProvider>
          <Checkbox {...data} disabled />
        </ThemeProvider>,
      );

      expect(toJSON()).toMatchSnapshot();
    });

    it('should match snapshot with checked checkbox', () => {
      const { toJSON } = render(
        <ThemeProvider>
          <Checkbox {...data} checked />
        </ThemeProvider>,
      );

      expect(toJSON()).toMatchSnapshot();
    });

    it('should match snapshot with disabled and checked checkbox', () => {
      const { toJSON } = render(
        <ThemeProvider>
          <Checkbox {...data} disabled checked />
        </ThemeProvider>,
      );

      expect(toJSON()).toMatchSnapshot();
    });

    it('should match snapshot with error checkbox', () => {
      const { toJSON } = render(
        <ThemeProvider>
          <Checkbox {...data} error="Error text" />
        </ThemeProvider>,
      );

      expect(toJSON()).toMatchSnapshot();
    });

    it('should match snapshot with error and checked checkbox', () => {
      const { toJSON } = render(
        <ThemeProvider>
          <Checkbox {...data} error="Error text" checked />
        </ThemeProvider>,
      );

      expect(toJSON()).toMatchSnapshot();
    });

    it('should match snapshot with inverted', () => {
      const { toJSON } = render(
        <ThemeProvider>
          <Checkbox {...data} inverted />
        </ThemeProvider>,
      );

      expect(toJSON()).toMatchSnapshot();
    });

    it('should match snapshot with inverted and checked', () => {
      const { toJSON } = render(
        <ThemeProvider>
          <Checkbox {...data} inverted checked />
        </ThemeProvider>,
      );

      expect(toJSON()).toMatchSnapshot();
    });

    it('should match snapshot with inverted and checked and disabled', () => {
      const { toJSON } = render(
        <ThemeProvider>
          <Checkbox {...data} inverted checked disabled />
        </ThemeProvider>,
      );

      expect(toJSON()).toMatchSnapshot();
    });
  });

  describe('Events', () => {
    it('should call onChange function when press on Checkbox', () => {
      const onChangeMock = jest.fn();
      const { getByTestId } = render(
        <ThemeProvider>
          <Checkbox {...data} onPress={onChangeMock} testID="checkbox" />
        </ThemeProvider>,
      );

      fireEvent.press(getByTestId('checkbox'));
      expect(onChangeMock).toHaveBeenCalled();
    });
  });
});
