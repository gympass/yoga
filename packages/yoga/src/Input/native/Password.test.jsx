import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

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

    it('should match when input is focused', () => {
      const { container, getByTestId } = render(
        <ThemeProvider>
          <Input.Password label="Input" testID="input" />
        </ThemeProvider>,
      );

      fireEvent.focus(getByTestId('input'));

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
    it('should call onChangeText', () => {
      const onChangeTextMock = jest.fn();
      const { getByTestId } = render(
        <ThemeProvider>
          <Input.Password
            label="Input"
            testID="input"
            onChangeText={onChangeTextMock}
          />
        </ThemeProvider>,
      );

      fireEvent.changeText(getByTestId('input'), 'foo');

      expect(onChangeTextMock).toHaveBeenCalled();
    });

    it('should not call onChangeText when input is readOnly', () => {
      const onChangeTextMock = jest.fn();
      const { getByTestId } = render(
        <ThemeProvider>
          <Input.Password
            label="Input"
            testID="input"
            onChangeText={onChangeTextMock}
            readOnly
          />
        </ThemeProvider>,
      );

      fireEvent.focus(getByTestId('input'));

      expect(onChangeTextMock).not.toHaveBeenCalled();
    });

    it('should not call onChangeText when input is disabled', () => {
      const onChangeTextMock = jest.fn();
      const { getByTestId } = render(
        <ThemeProvider>
          <Input.Password
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
          <Input.Password label="Input" testID="input" onFocus={onFocusMock} />
        </ThemeProvider>,
      );

      fireEvent.focus(getByTestId('input'));

      expect(onFocusMock).toHaveBeenCalled();
    });

    it('should call onBlur', () => {
      const onBlurMock = jest.fn();

      const { getByTestId } = render(
        <ThemeProvider>
          <Input.Password label="Input" testID="input" onBlur={onBlurMock} />
        </ThemeProvider>,
      );

      fireEvent.focus(getByTestId('input'));
      fireEvent.blur(getByTestId('input'));

      expect(onBlurMock).toHaveBeenCalled();
    });
  });

  describe('visibility button', () => {
    it('should toggle password visibility when press visibility button', () => {
      const { getByRole, getByTestId } = render(
        <ThemeProvider>
          <Input.Password label="Input" testID="input" />
        </ThemeProvider>,
      );

      expect(getByTestId('input').props.secureTextEntry).toBe(true);

      fireEvent.press(getByRole('button'));

      expect(getByTestId('input').props.secureTextEntry).toBe(false);
    });
  });
});
