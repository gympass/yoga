import React from 'react';
import { render, fireEvent, toJSON } from '@testing-library/react-native';

import Checkbox from '..';
import ThemeProvider from '../../Theme';

const data = {
  value: 'value',
  label: 'Checkbox Component',
  helper: 'Helper Text',
};

describe('<Checkbox />', () => {
  describe('Snapshots', () => {
    it('should match snapshot with default checkbox', () => {
      const { container } = render(
        <ThemeProvider>
          <Checkbox {...data} />
        </ThemeProvider>,
      );
      expect(toJSON(container)).toMatchSnapshot();
    });

    it('should match snapshot with disabled checkbox', () => {
      const { container } = render(
        <ThemeProvider>
          <Checkbox {...data} disabled />
        </ThemeProvider>,
      );
      expect(toJSON(container)).toMatchSnapshot();
    });

    it('should match snapshot with checked checkbox', () => {
      const { container } = render(
        <ThemeProvider>
          <Checkbox {...data} checked />
        </ThemeProvider>,
      );
      expect(toJSON(container)).toMatchSnapshot();
    });

    it('should match snapshot with disabled and checked checkbox', () => {
      const { container } = render(
        <ThemeProvider>
          <Checkbox {...data} disabled checked />
        </ThemeProvider>,
      );
      expect(toJSON(container)).toMatchSnapshot();
    });

    it('should match snapshot with error checkbox', () => {
      const { container } = render(
        <ThemeProvider>
          <Checkbox {...data} error />
        </ThemeProvider>,
      );
      expect(toJSON(container)).toMatchSnapshot();
    });

    it('should match snapshot with error and checked checkbox', () => {
      const { container } = render(
        <ThemeProvider>
          <Checkbox {...data} error checked />
        </ThemeProvider>,
      );
      expect(toJSON(container)).toMatchSnapshot();
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
