import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Checkbox from '..';
import ThemeProvider from '../../ThemeProvider';

const data = {
  value: 'value',
  label: 'Checkbox Component',
  helper: 'Helper Text',
};

/* eslint-disable no-console */
const originalError = console.error;

beforeEach(() => {
  console.error = jest.fn();
});

afterEach(() => {
  console.error = originalError;
});

describe('<Checkbox />', () => {
  describe('Snapshots', () => {
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
          <Checkbox {...data} error />
        </ThemeProvider>,
      );
      expect(container).toMatchSnapshot();
    });

    it('should match snapshot with error and checked checkbox', () => {
      const { container } = render(
        <ThemeProvider>
          <Checkbox {...data} error checked />
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
