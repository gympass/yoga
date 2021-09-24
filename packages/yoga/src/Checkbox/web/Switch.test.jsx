import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Checkbox from '..';
import ThemeProvider from '../../Theme';

describe('<Checkbox />', () => {
  describe('<Checkbox.Switch />', () => {
    describe('Snapshots', () => {
      it('should match snapshot with default switch', () => {
        const { container } = render(
          <ThemeProvider>
            <Checkbox.Switch />
          </ThemeProvider>,
        );

        expect(container).toMatchSnapshot();
      });

      it('should match snapshot with disabled switch', () => {
        const { container } = render(
          <ThemeProvider>
            <Checkbox.Switch disabled />
          </ThemeProvider>,
        );

        expect(container).toMatchSnapshot();
      });

      it('should match snapshot with checked switch', () => {
        const { container } = render(
          <ThemeProvider>
            <Checkbox.Switch checked />
          </ThemeProvider>,
        );

        expect(container).toMatchSnapshot();
      });

      it('should match snapshot with disabled and checked switch', () => {
        const { container } = render(
          <ThemeProvider>
            <Checkbox.Switch disabled checked />
          </ThemeProvider>,
        );

        expect(container).toMatchSnapshot();
      });

      it('should call onChange function when click on Checkbox.Switch', () => {
        const onChangeMock = jest.fn();
        const { getByRole } = render(
          <ThemeProvider>
            <Checkbox.Switch disabled checked onChange={onChangeMock} />
          </ThemeProvider>,
        );

        fireEvent.click(getByRole('switch', { hidden: true }));

        expect(onChangeMock).toHaveBeenCalled();
      });
    });
  });
});
