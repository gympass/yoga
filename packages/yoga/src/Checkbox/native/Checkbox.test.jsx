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
    it('should match snapshot without label', () => {
      const { container } = render(
        <ThemeProvider>
          <Checkbox />
        </ThemeProvider>,
      );
      expect(toJSON(container)).toMatchSnapshot();
    });

    it('should match snapshot with variants', () => {
      const { container } = render(
        <ThemeProvider>
          <Checkbox variant="primary" />
          <Checkbox variant="secondary" />
          <Checkbox variant="tertiary" />

          <Checkbox variant="primary" checked />
          <Checkbox variant="secondary" checked />
          <Checkbox variant="tertiary" checked />
        </ThemeProvider>,
      );
      expect(toJSON(container)).toMatchSnapshot();
    });

    it('should match snapshot without label', () => {
      const { container } = render(
        <ThemeProvider>
          <Checkbox />
        </ThemeProvider>,
      );
      expect(toJSON(container)).toMatchSnapshot();
    });

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
          <Checkbox {...data} error="Error text" />
        </ThemeProvider>,
      );
      expect(toJSON(container)).toMatchSnapshot();
    });

    it('should match snapshot with error and checked checkbox', () => {
      const { container } = render(
        <ThemeProvider>
          <Checkbox {...data} error="Error text" checked />
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
