import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { ThemeProvider, Input } from '../..';

describe('<Input />', () => {
  describe('Snapshots', () => {
    it('should match with default input', () => {
      const { container } = render(
        <ThemeProvider>
          <Input />
        </ThemeProvider>,
      );

      expect(container).toMatchSnapshot();
    });

    it('should match with label', () => {
      const { container } = render(
        <ThemeProvider>
          <Input label="Input" />
        </ThemeProvider>,
      );

      expect(container).toMatchSnapshot();
    });

    it('should match with disabled input', () => {
      const { container } = render(
        <ThemeProvider>
          <Input disabled />
        </ThemeProvider>,
      );

      expect(container).toMatchSnapshot();
    });

    it('should match with error', () => {
      const { container } = render(
        <ThemeProvider>
          <Input error="Error message" />
        </ThemeProvider>,
      );

      expect(container).toMatchSnapshot();
    });

    it('should match with helper text and max length', () => {
      const { container } = render(
        <ThemeProvider>
          <Input helper="Helper text" maxLength={20} />
        </ThemeProvider>,
      );

      expect(container).toMatchSnapshot();
    });

    it('should match with full width', () => {
      const { container } = render(
        <ThemeProvider>
          <Input label="Label" full />
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
          <Input label="Input" data-testid="input" onChange={onChangeMock} />
        </ThemeProvider>,
      );

      fireEvent.change(getByTestId('input'), { target: { value: 'foo' } });

      expect(onChangeMock).toHaveBeenCalled();
    });

    it('should call onFocus', () => {
      const onFocusMock = jest.fn();
      const { getByTestId } = render(
        <ThemeProvider>
          <Input label="Input" data-testid="input" onFocus={onFocusMock} />
        </ThemeProvider>,
      );

      fireEvent.focus(getByTestId('input'));

      expect(onFocusMock).toHaveBeenCalled();
    });

    it('should call onBlur', () => {
      const onBlurMock = jest.fn();

      const { getByTestId } = render(
        <ThemeProvider>
          <Input label="Input" data-testid="input" onBlur={onBlurMock} />
        </ThemeProvider>,
      );

      fireEvent.focus(getByTestId('input'));
      fireEvent.blur(getByTestId('input'));

      expect(onBlurMock).toHaveBeenCalled();
    });
  });

  describe('maxLength', () => {
    it('should update maxLength counter when add character', () => {
      const { getByTestId, getByText } = render(
        <ThemeProvider>
          <Input label="Input" data-testid="input" maxLength={10} />
        </ThemeProvider>,
      );

      expect(getByText('0/10').textContent).toBe('0/10');

      fireEvent.change(getByTestId('input'), { target: { value: 'foo' } });

      expect(getByText('3/10').textContent).toBe('3/10');
    });
  });

  describe('clean button', () => {
    it('should call onClean when press clean button', () => {
      const onCleanMock = jest.fn();

      const { getByTestId, getByRole } = render(
        <ThemeProvider>
          <Input label="Input" onClean={onCleanMock} />
        </ThemeProvider>,
      );

      fireEvent.change(getByTestId('input'), { target: { value: 'foo' } });
      fireEvent.click(getByRole('button'));

      expect(onCleanMock).toHaveBeenCalledWith('');
    });
  });
});
