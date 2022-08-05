import React from 'react';
import { render } from '@testing-library/react';

import { ThemeProvider } from '../..';
import Calendar from './Calendar';

describe('<Calendar />', () => {
  const testDate = new Date(2022, 7, 3);

  describe('Snapshots', () => {
    it('should match with single Calendar', () => {
      const { container } = render(
        <ThemeProvider>
          <Calendar type="single" />
        </ThemeProvider>,
      );

      expect(container).toMatchSnapshot();
    });
    it('should match with range Calendar', () => {
      const { container } = render(
        <ThemeProvider>
          <Calendar type="range" />
        </ThemeProvider>,
      );

      expect(container).toMatchSnapshot();
    });
    it('should match with default selected date single Calendar', () => {
      const { container } = render(
        <ThemeProvider>
          <Calendar type="single" startDate={testDate} />
        </ThemeProvider>,
      );

      expect(container).toMatchSnapshot();
    });
    it('should match with default selected dates range Calendar', () => {
      const endDate = new Date();

      endDate.setDate(testDate.getDate() + 15);
      const { container } = render(
        <ThemeProvider>
          <Calendar type="range" startDate={testDate} endDate={endDate} />
        </ThemeProvider>,
      );

      expect(container).toMatchSnapshot();
    });
    it('should match with disabled past dates Calendar', () => {
      const { container } = render(
        <ThemeProvider>
          <Calendar type="single" disablePastDates />
        </ThemeProvider>,
      );

      expect(container).toMatchSnapshot();
    });
    it('should match with disabled future dates Calendar', () => {
      const { container } = render(
        <ThemeProvider>
          <Calendar type="single" disableFutureDates />
        </ThemeProvider>,
      );

      expect(container).toMatchSnapshot();
    });
  });
});
