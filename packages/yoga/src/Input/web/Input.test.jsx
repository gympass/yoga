import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';

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

    it('should match with helper text, max length and hideMaxLength', () => {
      const { container } = render(
        <ThemeProvider>
          <Input helper="Helper text" maxLength={20} hideMaxLength />
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

    it('should match with a11yId', () => {
      const { container } = render(
        <ThemeProvider>
          <Input label="Label" a11yId="id" />
        </ThemeProvider>,
      );

      expect(container).toMatchSnapshot();
    });

    it('should match with a11yId and error', () => {
      const { container } = render(
        <ThemeProvider>
          <Input label="Label" a11yId="id" error="Error message" />
        </ThemeProvider>,
      );

      expect(container).toMatchSnapshot();
    });

    it('should match with includeAriaAttributes set to false', () => {
      const { container } = render(
        <ThemeProvider>
          <Input label="Label" includeAriaAttributes={false} />
        </ThemeProvider>,
      );

      expect(container).toMatchSnapshot();
    });
  });

  describe('Events', () => {
    it('should call onChange', () => {
      const onChangeMock = jest.fn();

      render(
        <ThemeProvider>
          <Input label="Input" onChange={onChangeMock} data-testid="input" />
        </ThemeProvider>,
      );

      fireEvent.change(screen.getByTestId('input'), {
        target: { value: 'foo' },
      });

      expect(onChangeMock).toHaveBeenCalled();
    });

    it('should call onFocus', () => {
      const onFocusMock = jest.fn();

      render(
        <ThemeProvider>
          <Input label="Input" data-testid="input" onFocus={onFocusMock} />
        </ThemeProvider>,
      );

      fireEvent.focus(screen.getByTestId('input'));

      expect(onFocusMock).toHaveBeenCalled();
    });

    it('should call onBlur', () => {
      const onBlurMock = jest.fn();

      render(
        <ThemeProvider>
          <Input label="Input" data-testid="input" onBlur={onBlurMock} />
        </ThemeProvider>,
      );

      fireEvent.focus(screen.getByTestId('input'));
      fireEvent.blur(screen.getByTestId('input'));

      expect(onBlurMock).toHaveBeenCalled();
    });
  });

  describe('maxLength', () => {
    it('should update maxLength counter when add character', () => {
      const { rerender } = render(
        <ThemeProvider>
          <Input label="Input" maxLength={10} />
        </ThemeProvider>,
      );

      expect(screen.getByText('0/10').textContent).toBe('0/10');

      rerender(
        <ThemeProvider>
          <Input label="Input" value="foo" maxLength={10} />
        </ThemeProvider>,
      );

      expect(screen.getByText('3/10').textContent).toBe('3/10');
    });
  });

  describe('clean button', () => {
    it('should call onClean when press clean button', () => {
      const onClean = jest.fn();

      render(
        <ThemeProvider>
          <Input label="Input" value="foo" onClean={onClean} />
        </ThemeProvider>,
      );

      fireEvent.click(screen.queryByRole('button'));

      expect(onClean).toHaveBeenCalled();
    });

    it('should test if clean button is present', () => {
      const { rerender, debug } = render(
        <ThemeProvider>
          <Input label="Input" ariaLabel="valor aria label" />
        </ThemeProvider>,
      );

      // closeButton
      expect(screen.queryByRole('button')).toBeNull();

      rerender(
        <ThemeProvider>
          <Input label="Input" value="foo" />
        </ThemeProvider>,
      );

      debug();

      expect(screen.queryByRole('button')).not.toBeNull();
    });

    it('should have aria-label', () => {
      const value = 'aria label value';
      const { debug, getByTestId } = render(
        <ThemeProvider>
          <Input label="Input" value="foo" ariaLabel={value} />
        </ThemeProvider>,
      );

      debug();

      const inputElement = getByTestId('input');

      expect(inputElement).toBeInTheDocument();

      expect(inputElement).toHaveAttribute('aria-label', value);
    });
    it('should have label value', () => {
      const value = 'label value';
      const { debug, getByTestId } = render(
        <ThemeProvider>
          <Input label={value} value="foo" />
        </ThemeProvider>,
      );

      debug();

      const inputElement = getByTestId('input');

      expect(inputElement).toBeInTheDocument();

      expect(inputElement).toHaveAttribute('aria-label', value);
    });
  });
});
