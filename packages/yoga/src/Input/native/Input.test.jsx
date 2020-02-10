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

    it('should match snapshot when input is focused', () => {
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
  });
});
