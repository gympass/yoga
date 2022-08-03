import React from 'react';
import { render } from '@testing-library/react';

import { ThemeProvider, Datepicker } from '../..';

describe('<Datepicker />', () => {
  describe('Snapshots', () => {
    it('should match with single Datepicker', () => {
      const { container } = render(
        <ThemeProvider>
          <Datepicker type="single" />
        </ThemeProvider>,
      );

      expect(container).toMatchSnapshot();
    });
    it('should match with range Datepicker', () => {
      const { container } = render(
        <ThemeProvider>
          <Datepicker type="range" />
        </ThemeProvider>,
      );

      expect(container).toMatchSnapshot();
    });
    it('should match with default selected date single Datepicker', () => {
      const { container } = render(
        <ThemeProvider>
          <Datepicker type="single" startDate={new Date()} />
        </ThemeProvider>,
      );

      expect(container).toMatchSnapshot();
    });
    it('should match with default selected dates range Datepicker', () => {
      const startDate = new Date();
      const endDate = new Date();

      endDate.setDate(endDate.getDate() + 15);
      const { container } = render(
        <ThemeProvider>
          <Datepicker type="range" startDate={startDate} endDate={endDate} />
        </ThemeProvider>,
      );

      expect(container).toMatchSnapshot();
    });
    it('should match with custom placeholder single Datepicker', () => {
      const { container } = render(
        <ThemeProvider>
          <Datepicker
            type="single"
            placeholder="This is a custom placeholder :)"
          />
        </ThemeProvider>,
      );

      expect(container).toMatchSnapshot();
    });
    it('should match with disabled past dates Datepicker', () => {
      const { container } = render(
        <ThemeProvider>
          <Datepicker type="single" disablePastDates />
        </ThemeProvider>,
      );

      expect(container).toMatchSnapshot();
    });
    it('should match with disabled future dates Datepicker', () => {
      const { container } = render(
        <ThemeProvider>
          <Datepicker type="single" disableFutureDates />
        </ThemeProvider>,
      );

      expect(container).toMatchSnapshot();
    });
    it('should match with disabled Datepicker', () => {
      const { container } = render(
        <ThemeProvider>
          <Datepicker type="single" disabled />
        </ThemeProvider>,
      );

      expect(container).toMatchSnapshot();
    });
    it('should match with error Datepicker', () => {
      const { container } = render(
        <ThemeProvider>
          <Datepicker type="single" error="This is an error" />
        </ThemeProvider>,
      );

      expect(container).toMatchSnapshot();
    });
  });
  describe('Unit', () => {
    it('should display default date on single Datepicker', () => {});
    it('should display default date range on range Datepicker', () => {});
    it('should display custom placeholder', () => {});
    it('should disable past dates', () => {});
    it('should disable future dates', () => {});
    it('should be disabled', () => {});
    it('should display an error', () => {});
  });
});
