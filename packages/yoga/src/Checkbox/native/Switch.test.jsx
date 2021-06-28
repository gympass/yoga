import React from 'react';
import { render, fireEvent, toJSON } from '@testing-library/react-native';

import Checkbox from '..';
import ThemeProvider from '../../Theme';

jest.useFakeTimers();

describe('<Checkbox />', () => {
  describe('<Checkbox.Switch />', () => {
    describe('Snapshots', () => {
      it('should match snapshot with default switch', () => {
        const { container } = render(
          <ThemeProvider>
            <Checkbox.Switch />
          </ThemeProvider>,
        );
        expect(toJSON(container)).toMatchSnapshot();
      });

      it('should match snapshot with disabled switch', () => {
        const { container } = render(
          <ThemeProvider>
            <Checkbox.Switch disabled />
          </ThemeProvider>,
        );
        expect(toJSON(container)).toMatchSnapshot();
      });

      it('should match snapshot with checked switch', () => {
        const { container } = render(
          <ThemeProvider>
            <Checkbox.Switch checked />
          </ThemeProvider>,
        );
        expect(toJSON(container)).toMatchSnapshot();
      });

      it('should match snapshot with disabled and checked switch', () => {
        const { container } = render(
          <ThemeProvider>
            <Checkbox.Switch disabled checked />
          </ThemeProvider>,
        );
        expect(toJSON(container)).toMatchSnapshot();
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
