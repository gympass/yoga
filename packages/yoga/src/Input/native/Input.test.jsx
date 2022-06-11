import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import { ThemeProvider, Input } from '../..';

describe('<Input />', () => {
  describe('Snapshots', () => {
    it('should match with default input', () => {
      const { toJSON } = render(
        <ThemeProvider>
          <Input />
        </ThemeProvider>,
      );

      expect(toJSON()).toMatchSnapshot();
    });

    it('should match with label', () => {
      const { toJSON } = render(
        <ThemeProvider>
          <Input label="Input" />
        </ThemeProvider>,
      );

      expect(toJSON()).toMatchSnapshot();
    });

    it('should match when input is focused', () => {
      const { toJSON, getByTestId } = render(
        <ThemeProvider>
          <Input label="Input" testID="input" />
        </ThemeProvider>,
      );

      fireEvent(getByTestId('input'), 'focus');

      expect(toJSON()).toMatchSnapshot();
    });

    it('should match with disabled input', () => {
      const { toJSON } = render(
        <ThemeProvider>
          <Input disabled />
        </ThemeProvider>,
      );

      expect(toJSON()).toMatchSnapshot();
    });

    it('should match with error', () => {
      const { toJSON } = render(
        <ThemeProvider>
          <Input error="Error message" />
        </ThemeProvider>,
      );

      expect(toJSON()).toMatchSnapshot();
    });

    it('should match with helper text and max length', () => {
      const { toJSON } = render(
        <ThemeProvider>
          <Input helper="Helper text" maxLength={20} />
        </ThemeProvider>,
      );

      expect(toJSON()).toMatchSnapshot();
    });

    it('should match with helper text, max length and hideMaxLength', () => {
      const { toJSON } = render(
        <ThemeProvider>
          <Input helper="Helper text" maxLength={20} hideMaxLength />
        </ThemeProvider>,
      );

      expect(toJSON()).toMatchSnapshot();
    });

    it('should match with full width', () => {
      const { toJSON } = render(
        <ThemeProvider>
          <Input label="Label" full />
        </ThemeProvider>,
      );

      expect(toJSON()).toMatchSnapshot();
    });
  });

  describe('Events', () => {
    it('should call onChangeText', () => {
      const onChangeTextMock = jest.fn();
      const { getByTestId } = render(
        <ThemeProvider>
          <Input label="Input" testID="input" onChangeText={onChangeTextMock} />
        </ThemeProvider>,
      );

      fireEvent.changeText(getByTestId('input'), 'foo');

      expect(onChangeTextMock).toHaveBeenCalled();
    });

    it('should not call onChangeText when input is disabled', () => {
      const onChangeTextMock = jest.fn();
      const { getByTestId } = render(
        <ThemeProvider>
          <Input
            label="Input"
            testID="input"
            onChangeText={onChangeTextMock}
            disabled
          />
        </ThemeProvider>,
      );

      fireEvent(getByTestId('input'), 'focus');

      expect(onChangeTextMock).not.toHaveBeenCalled();
    });

    it('should call onFocus', () => {
      const onFocusMock = jest.fn();
      const { getByTestId } = render(
        <ThemeProvider>
          <Input label="Input" testID="input" onFocus={onFocusMock} />
        </ThemeProvider>,
      );

      fireEvent(getByTestId('input'), 'focus');

      expect(onFocusMock).toHaveBeenCalled();
    });

    it('should call onBlur', () => {
      const onBlurMock = jest.fn();

      const { getByTestId } = render(
        <ThemeProvider>
          <Input label="Input" testID="input" onBlur={onBlurMock} />
        </ThemeProvider>,
      );

      fireEvent(getByTestId('input'), 'focus');
      fireEvent(getByTestId('input'), 'blur');

      expect(onBlurMock).toHaveBeenCalled();
    });
  });

  describe('maxLength', () => {
    it('should update maxLength counter when add character', () => {
      const { getByText, rerender } = render(
        <ThemeProvider>
          <Input label="Input" testID="input" maxLength={10} />
        </ThemeProvider>,
      );

      expect(getByText('0/10')).toBeTruthy();

      rerender(
        <ThemeProvider>
          <Input label="Input" value="foo" maxLength={10} />
        </ThemeProvider>,
      );

      expect(getByText('3/10')).toBeTruthy();
    });
  });

  describe('clean button', () => {
    it('should call onClean when press clean button', () => {
      const onCleanMock = jest.fn();

      const { getByRole } = render(
        <ThemeProvider>
          <Input label="Input" value="foo" onClean={onCleanMock} />
        </ThemeProvider>,
      );

      fireEvent.press(getByRole('button'));

      expect(onCleanMock).toHaveBeenCalledWith('');
    });

    it('should test if clean button is present', () => {
      const { rerender, queryByRole } = render(
        <ThemeProvider>
          <Input label="Input" />
        </ThemeProvider>,
      );

      // closeButton
      expect(queryByRole('button')).toBeNull();

      rerender(
        <ThemeProvider>
          <Input label="Input" value="foo" />
        </ThemeProvider>,
      );

      expect(queryByRole('button')).not.toBeNull();
    });
  });
});
