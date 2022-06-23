import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import { ThemeProvider, Input } from '../..';

describe('<Input.Password />', () => {
  describe('Snapshots', () => {
    it('should match with default input', () => {
      const { toJSON } = render(
        <ThemeProvider>
          <Input.Password />
        </ThemeProvider>,
      );

      expect(toJSON()).toMatchSnapshot();
    });

    it('should match when input is focused', () => {
      const { toJSON, getByTestId } = render(
        <ThemeProvider>
          <Input.Password label="Input" testID="input" />
        </ThemeProvider>,
      );

      fireEvent(getByTestId('input'), 'focus');

      expect(toJSON()).toMatchSnapshot();
    });

    it('should match with disabled input', () => {
      const { toJSON } = render(
        <ThemeProvider>
          <Input.Password disabled />
        </ThemeProvider>,
      );

      expect(toJSON()).toMatchSnapshot();
    });

    it('should match with full width', () => {
      const { toJSON } = render(
        <ThemeProvider>
          <Input.Password label="Label" full />
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

      fireEvent(getByTestId('input'), 'focus');

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

      fireEvent(getByTestId('input'), 'focus');

      expect(onChangeTextMock).not.toHaveBeenCalled();
    });

    it('should call onFocus', () => {
      const onFocusMock = jest.fn();
      const { getByTestId } = render(
        <ThemeProvider>
          <Input.Password label="Input" testID="input" onFocus={onFocusMock} />
        </ThemeProvider>,
      );

      fireEvent(getByTestId('input'), 'focus');

      expect(onFocusMock).toHaveBeenCalled();
    });

    it('should call onBlur', () => {
      const onBlurMock = jest.fn();

      const { getByTestId } = render(
        <ThemeProvider>
          <Input.Password label="Input" testID="input" onBlur={onBlurMock} />
        </ThemeProvider>,
      );

      fireEvent(getByTestId('input'), 'focus');
      fireEvent(getByTestId('input'), 'blur');

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
