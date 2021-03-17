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
  });

  describe('Events', () => {
    it('should call onChange function when press on Checkbox', () => {
      const onChangeMock = jest.fn();
      const { getByRole } = render(
        <ThemeProvider>
          <Checkbox {...data} onChange={onChangeMock} />
        </ThemeProvider>,
      );
      fireEvent.click(getByRole('checkbox', { hidden: true }));
      expect(onChangeMock).toHaveBeenCalled();
    });
  });
});
