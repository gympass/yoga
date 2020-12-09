import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

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

    it('should match when input is focused', () => {
      const { container, getByTestId } = render(
        <ThemeProvider>
          <Input label="Input" testID="input" />
        </ThemeProvider>,
      );

      fireEvent.focus(getByTestId('input'));

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

    it('should match with helper text, max length and hiddenMaxLength', () => {
      const { container } = render(
        <ThemeProvider>
          <Input helper="Helper text" maxLength={20} hiddenMaxLength={false} />
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

      fireEvent.changeText(getByTestId('input'), 'foo');

      expect(onChangeTextMock).not.toHaveBeenCalled();
    });

    it('should call onFocus', () => {
      const onFocusMock = jest.fn();
      const { getByTestId } = render(
        <ThemeProvider>
          <Input label="Input" testID="input" onFocus={onFocusMock} />
        </ThemeProvider>,
      );

      fireEvent.focus(getByTestId('input'));

      expect(onFocusMock).toHaveBeenCalled();
    });

    it('should call onBlur', () => {
      const onBlurMock = jest.fn();

      const { getByTestId } = render(
        <ThemeProvider>
          <Input label="Input" testID="input" onBlur={onBlurMock} />
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
          <Input label="Input" testID="input" maxLength={10} />
        </ThemeProvider>,
      );

      expect(getByText('0/10').children.join('')).toBe('0/10');

      fireEvent.changeText(getByTestId('input'), 'foo');

      expect(getByText('3/10').children.join('')).toBe('3/10');
    });
  });

  describe('clean button', () => {
    it('should call onClean when press clean button', () => {
      const onCleanMock = jest.fn();

      const { getByRole, getByTestId } = render(
        <ThemeProvider>
          <Input label="Input" testID="input" onClean={onCleanMock} />
        </ThemeProvider>,
      );

      fireEvent.changeText(getByTestId('input'), 'foo');
      fireEvent.press(getByRole('button'));

      expect(onCleanMock).toHaveBeenCalledWith('');
    });
  });
});
