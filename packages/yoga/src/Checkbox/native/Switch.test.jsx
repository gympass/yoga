import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import Checkbox from '..';
import ThemeProvider from '../../Theme';

jest.useFakeTimers();

describe('<Checkbox />', () => {
  describe('<Checkbox.Switch />', () => {
    describe('Snapshots', () => {
      it('should match snapshot with default switch', () => {
        const { toJSON } = render(
          <ThemeProvider>
            <Checkbox.Switch />
          </ThemeProvider>,
        );

        expect(toJSON()).toMatchSnapshot();
      });

      it('should match snapshot with disabled switch', () => {
        const { toJSON } = render(
          <ThemeProvider>
            <Checkbox.Switch disabled />
          </ThemeProvider>,
        );

        expect(toJSON()).toMatchSnapshot();
      });

      it('should match snapshot with checked switch', () => {
        const { toJSON } = render(
          <ThemeProvider>
            <Checkbox.Switch checked />
          </ThemeProvider>,
        );

        expect(toJSON()).toMatchSnapshot();
      });

      it('should match snapshot with disabled and checked switch', () => {
        const { toJSON } = render(
          <ThemeProvider>
            <Checkbox.Switch disabled checked />
          </ThemeProvider>,
        );

        expect(toJSON()).toMatchSnapshot();
      });

      it('should call onChange function when click on Checkbox.Switch', () => {
        const onChangeMock = jest.fn();
        const { getByRole } = render(
          <ThemeProvider>
            <Checkbox.Switch
              onChange={onChangeMock}
              accessibilityRole="button"
            />
          </ThemeProvider>,
        );

        fireEvent.press(getByRole('button'));

        expect(onChangeMock).toHaveBeenCalled();
      });
    });
  });
});
