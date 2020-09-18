import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { ThemeProvider, Input } from '../..';

describe('<Input.Password />', () => {
  describe('Snapshots', () => {
    it('should match with default input', () => {
      const { container } = render(
        <ThemeProvider>
          <Input.Password />
        </ThemeProvider>,
      );

      expect(container).toMatchSnapshot();
    });

    it('should match with disabled input', () => {
      const { container } = render(
        <ThemeProvider>
          <Input.Password disabled />
        </ThemeProvider>,
      );

      expect(container).toMatchSnapshot();
    });

    it('should match with full width', () => {
      const { container } = render(
        <ThemeProvider>
          <Input.Password label="Label" full />
        </ThemeProvider>,
      );

      expect(container).toMatchSnapshot();
    });
  });

  describe('Events', () => {
    it('should call onChange', () => {
      const onChangeMock = jest.fn();
      const { getByTestId } = render(
        <ThemeProvider>
          <Input.Password
            label="Input"
            data-testid="input"
            onChange={onChangeMock}
          />
        </ThemeProvider>,
      );

      fireEvent.change(getByTestId('input'), { target: { value: 'foo' } });

      expect(onChangeMock).toHaveBeenCalled();
    });

    it('should call onFocus', () => {
      const onFocusMock = jest.fn();
      const { getByTestId } = render(
        <ThemeProvider>
          <Input.Password
            label="Input"
            data-testid="input"
            onFocus={onFocusMock}
          />
        </ThemeProvider>,
      );

      fireEvent.focus(getByTestId('input'));

      expect(onFocusMock).toHaveBeenCalled();
    });

    it('should call onBlur', () => {
      const onBlurMock = jest.fn();

      const { getByTestId } = render(
        <ThemeProvider>
          <Input.Password
            label="Input"
            data-testid="input"
            onBlur={onBlurMock}
          />
        </ThemeProvider>,
      );

      fireEvent.focus(getByTestId('input'));
      fireEvent.blur(getByTestId('input'));

      expect(onBlurMock).toHaveBeenCalled();
    });

    it('should not stay focus at first render', () => {
      const { getByTestId } = render(
        <ThemeProvider>
          <Input.Password
            label="Input"
            data-testid="input"
          />
        </ThemeProvider>,
      );

     // expect(document.activeElement.tagName).toEqual('BODY');
    //  expect(document.activeElement).toEqual(getByTestId('input'));

    });

  });

  describe('visibility button', () => {
    it('should toggle password visibility when click visibility button', () => {
      const { getByRole, getByTestId } = render(
        <ThemeProvider>
          <Input.Password label="Input" data-testid="input" />
        </ThemeProvider>,
      );

      expect(getByTestId('input').type).toBe('password');

      fireEvent.click(getByRole('button'));

      expect(getByTestId('input').type).toBe('text');
    });
  });
});
