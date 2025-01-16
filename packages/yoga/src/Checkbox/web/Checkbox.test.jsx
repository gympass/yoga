/* eslint-disable no-console */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Checkbox from '..';
import ThemeProvider from '../../Theme';

const data = {
  label: 'Checkbox Component',
  helper: 'Helper Text',
};

const originalError = console.error;

beforeEach(() => {
  console.error = jest.fn();
});

afterEach(() => {
  console.error = originalError;
});

describe('<Checkbox />', () => {
  describe('Snapshots', () => {
    it('should match snapshot without props', () => {
      const { container } = render(
        <ThemeProvider>
          <Checkbox />
        </ThemeProvider>,
      );

      expect(container).toMatchSnapshot();
    });

    it('should match snapshot with default checkbox', () => {
      const { container } = render(
        <ThemeProvider>
          <Checkbox {...data} />
        </ThemeProvider>,
      );

      expect(container).toMatchSnapshot();
    });

    it('should match snapshot with disabled checkbox', () => {
      const { container } = render(
        <ThemeProvider>
          <Checkbox {...data} disabled />
        </ThemeProvider>,
      );

      expect(container).toMatchSnapshot();
    });

    it('should match snapshot with checked checkbox', () => {
      const { container } = render(
        <ThemeProvider>
          <Checkbox {...data} checked />
        </ThemeProvider>,
      );

      expect(container).toMatchSnapshot();
    });

    it('should match snapshot with disabled and checked checkbox', () => {
      const { container } = render(
        <ThemeProvider>
          <Checkbox {...data} disabled checked />
        </ThemeProvider>,
      );

      expect(container).toMatchSnapshot();
    });

    it('should match snapshot with error checkbox', () => {
      const { container } = render(
        <ThemeProvider>
          <Checkbox {...data} error="Error msg" />
        </ThemeProvider>,
      );

      expect(container).toMatchSnapshot();
    });

    it('should match snapshot with error and checked checkbox', () => {
      const { container } = render(
        <ThemeProvider>
          <Checkbox {...data} error="Error msg" checked />
        </ThemeProvider>,
      );

      expect(container).toMatchSnapshot();
    });

    it('should match snapshot with inverted', () => {
      const { container } = render(
        <ThemeProvider>
          <Checkbox {...data} inverted />
        </ThemeProvider>,
      );

      expect(container).toMatchSnapshot();
    });

    it('should match snapshot with inverted and checked', () => {
      const { container } = render(
        <ThemeProvider>
          <Checkbox {...data} inverted checked />
        </ThemeProvider>,
      );

      expect(container).toMatchSnapshot();
    });

    it('should match snapshot with inverted and checked and disabled', () => {
      const { container } = render(
        <ThemeProvider>
          <Checkbox {...data} inverted checked disabled />
        </ThemeProvider>,
      );

      expect(container).toMatchSnapshot();
    });

    it('should match snapshot with indeterminate', () => {
      const { container } = render(
        <ThemeProvider>
          <Checkbox indeterminate />
        </ThemeProvider>,
      );

      expect(container).toMatchSnapshot();
    });

    it('should match snapshot with indeterminate and disabled checkbox', () => {
      const { container } = render(
        <ThemeProvider>
          <Checkbox indeterminate disabled />
        </ThemeProvider>,
      );

      expect(container).toMatchSnapshot();
    });

    it('should match snapshot with error and indeterminate checkbox', () => {
      const { container } = render(
        <ThemeProvider>
          <Checkbox {...data} error="Error msg" indeterminate />
        </ThemeProvider>,
      );

      expect(container).toMatchSnapshot();
    });

    it('should match snapshot with inverted and indeterminate', () => {
      const { container } = render(
        <ThemeProvider>
          <Checkbox {...data} inverted indeterminate />
        </ThemeProvider>,
      );

      expect(container).toMatchSnapshot();
    });

    it('should match snapshot with a given value', () => {
      const { container } = render(
        <ThemeProvider>
          <Checkbox {...data} value="test_value" />
        </ThemeProvider>,
      );

      expect(container).toMatchSnapshot();
    });
  });

  describe('Events', () => {
    it('should call onChange and onClick functions when interacting with Checkbox', () => {
      const onChangeMock = jest.fn();
      const onClickMock = jest.fn();

      const { container } = render(
        <ThemeProvider>
          <Checkbox {...data} onChange={onChangeMock} onClick={onClickMock} />
        </ThemeProvider>,
      );

      const hiddenInput = container.querySelector('input[type="checkbox"]');

      fireEvent.click(hiddenInput);

      expect(onChangeMock).toHaveBeenCalled();
      expect(onClickMock).toHaveBeenCalled();
    });
  });
});
