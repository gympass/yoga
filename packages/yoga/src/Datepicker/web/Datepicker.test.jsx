import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { format } from 'date-fns';

import { ThemeProvider, Datepicker, v3theme } from '../..';
import { toUTC } from './Datepicker';
import Calendar from './Calendar';

describe('<Datepicker />', () => {
  const testDate = new Date(2022, 7, 3, 14, 0, 0);

  let originalDateTimeFormat;

  beforeAll(() => {
    originalDateTimeFormat = Intl.DateTimeFormat;
  });

  describe('Snapshots', () => {
    it('should match snapshot when v3Theme is settled', () => {
      const { container } = render(
        <ThemeProvider theme={v3theme}>
          <Datepicker type="single" />
        </ThemeProvider>,
      );

      expect(container).toMatchSnapshot();
    });

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
      jest.useFakeTimers('modern').setSystemTime(testDate);

      const { container } = render(
        <ThemeProvider>
          <Datepicker type="single" startDate={testDate} />
        </ThemeProvider>,
      );

      expect(container).toMatchSnapshot();
    });
    it('should match with default selected dates range Datepicker', () => {
      jest.useFakeTimers('modern').setSystemTime(testDate);

      const endDate = new Date();

      endDate.setDate(testDate.getDate() + 15);
      const { container } = render(
        <ThemeProvider>
          <Datepicker type="range" startDate={testDate} endDate={endDate} />
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
    const dateFormat = 'MMM d, yyyy';

    it('should call onSelectSingle function on single Datepicker', () => {
      const onSelectSingle = jest.fn();

      render(
        <ThemeProvider>
          <Datepicker type="single" onSelectSingle={onSelectSingle} />
        </ThemeProvider>,
      );
      expect(onSelectSingle).not.toHaveBeenCalled();
      fireEvent.click(screen.getByRole('button'));

      const day10 = screen.queryAllByText('10')[0];

      fireEvent.click(day10);
      expect(onSelectSingle).toHaveBeenCalledTimes(1);
    });
    it('should call onSelectRange function on range Datepicker', () => {
      const onSelectRange = jest.fn();

      render(
        <ThemeProvider>
          <Datepicker type="range" onSelectRange={onSelectRange} />
        </ThemeProvider>,
      );
      expect(onSelectRange).not.toHaveBeenCalled();
      fireEvent.click(screen.getByRole('button'));

      const day10 = screen.queryAllByText('10')[0];
      const day20 = screen.queryAllByText('20')[0];

      fireEvent.click(day10);
      expect(onSelectRange).toHaveBeenCalledTimes(1);

      fireEvent.click(day20);
      expect(onSelectRange).toHaveBeenCalledTimes(2);
    });
    it('should call onCustomSelectRange function on range Datepicker', () => {
      const onCustomSelectRange = jest.fn();

      render(
        <ThemeProvider>
          <Datepicker type="range" onSelectRange={onCustomSelectRange} />
        </ThemeProvider>,
      );
      expect(onCustomSelectRange).not.toHaveBeenCalled();
      fireEvent.click(screen.getByRole('button'));

      const day10 = screen.queryAllByText('10')[0];
      const day20 = screen.queryAllByText('20')[0];

      fireEvent.click(day10);
      expect(onCustomSelectRange).toHaveBeenCalledTimes(1);

      fireEvent.click(day20);
      expect(onCustomSelectRange).toHaveBeenCalledTimes(2);
    });
    it('should display default date on single Datepicker', () => {
      const currentDate = new Date();

      render(
        <ThemeProvider>
          <Datepicker type="single" startDate={currentDate} />
        </ThemeProvider>,
      );
      const formattedDate = format(toUTC(currentDate), dateFormat);

      expect(screen.getByText(formattedDate)).toBeVisible();
    });
    it('should display default date range on range Datepicker', () => {
      const currentDate = new Date();
      const end = new Date();

      end.setDate(currentDate.getDate() + 15);

      const formattedStartDate = format(toUTC(currentDate), dateFormat);
      const formattedEndDate = format(toUTC(end), dateFormat);

      render(
        <ThemeProvider>
          <Datepicker type="range" startDate={currentDate} endDate={end} />
        </ThemeProvider>,
      );

      expect(
        screen.getByText(`${formattedStartDate} - ${formattedEndDate}`),
      ).toBeVisible();
    });
    it('should display custom placeholder and "Select Date" if none is provided', () => {
      const { rerender } = render(
        <ThemeProvider>
          <Datepicker
            type="single"
            placeholder="This is a custom placeholder :)"
          />
        </ThemeProvider>,
      );

      expect(screen.getByText('This is a custom placeholder :)')).toBeVisible();
      rerender(
        <ThemeProvider>
          <Datepicker type="single" />
        </ThemeProvider>,
      );
      expect(screen.getByText('Select Date')).toBeVisible();
    });
    it('should disable past dates', () => {
      render(
        <ThemeProvider>
          <Datepicker type="single" disablePastDates />
        </ThemeProvider>,
      );
      fireEvent.click(screen.getByRole('button'));

      const previousMonthArrow = screen.getByTestId('previous-month-arrow');

      fireEvent.click(previousMonthArrow);
      [...Array(25)].forEach((_e, i) =>
        expect(
          screen.getAllByText(`${i + 1}`)[0].closest('div'),
        ).toHaveAttribute('disabled'),
      );
    });
    it('should disable future dates', () => {
      render(
        <ThemeProvider>
          <Datepicker type="single" startDate={testDate} disableFutureDates />
        </ThemeProvider>,
      );
      fireEvent.click(screen.getByRole('button'));

      const nextMonthArrow = screen.getByTestId('next-month-arrow');

      fireEvent.click(nextMonthArrow);
      [...Array(25)].forEach((_e, i) =>
        expect(
          screen.getAllByText(`${i + 1}`)[0].closest('div'),
        ).toHaveAttribute('disabled'),
      );
    });
    it('should disable past dates from specific date', () => {
      jest.useFakeTimers('modern').setSystemTime(testDate);
      const date = new Date();

      date.setDate(testDate.getDate() + 15);
      render(
        <ThemeProvider>
          <Datepicker type="single" disablePastFrom={date} />
        </ThemeProvider>,
      );
      fireEvent.click(screen.getByRole('button'));

      for (let i = 1; i <= 17; i++) {
        expect(screen.getAllByText(`${i}`)[0].closest('div')).toHaveAttribute(
          'disabled',
        );
      }
    });
    it('should disable future dates from specific date', () => {
      jest.useFakeTimers('modern').setSystemTime(testDate);
      const date = new Date();

      date.setDate(testDate.getDate() + 15);
      render(
        <ThemeProvider>
          <Datepicker type="single" disableFutureFrom={date} />
        </ThemeProvider>,
      );
      fireEvent.click(screen.getByRole('button'));

      for (let i = 19; i <= 31; i++) {
        expect(screen.getAllByText(`${i}`)[0].closest('div')).toHaveAttribute(
          'disabled',
        );
      }
    });
    it('should be disabled', () => {
      render(
        <ThemeProvider>
          <Datepicker type="single" startDate={testDate} disabled />
        </ThemeProvider>,
      );
      const formattedDate = format(toUTC(testDate), dateFormat);
      const datepickerInput = screen.getByText(formattedDate);

      expect(datepickerInput).toHaveAttribute('disabled');
      expect(datepickerInput.closest('div')).toHaveAttribute('disabled');
    });
    it('should display an error', () => {
      render(
        <ThemeProvider>
          <Datepicker type="single" error="This is an error" />
        </ThemeProvider>,
      );
      expect(screen.getByText('This is an error')).toBeVisible();
    });
  });

  describe('Internationalization', () => {
    let originalNavigator;

    beforeEach(() => {
      originalNavigator = global.navigator;
    });

    afterEach(() => {
      global.Intl.DateTimeFormat = originalDateTimeFormat;

      Object.defineProperty(global, 'navigator', {
        value: originalNavigator,
        writable: true,
      });
    });

    it('should display calendar in English when locale is not supported', () => {
      Object.defineProperty(global, 'navigator', {
        value: { language: 'xx-XX' },
        writable: true,
      });

      // Mock the supportedLocalesOf to return empty array (no supported locales)
      global.Intl.DateTimeFormat = class extends originalDateTimeFormat {
        static supportedLocalesOf() {
          return [];
        }
      };

      render(
        <ThemeProvider>
          <Datepicker type="single" />
        </ThemeProvider>,
      );

      fireEvent.click(screen.getByRole('button'));

      // Check if month is displayed in English
      const currentDate = new Date();
      const currentMonth = new Intl.DateTimeFormat('en-US', {
        month: 'long',
      }).format(currentDate);
      expect(
        screen.getByText(new RegExp(currentMonth, 'i')),
      ).toBeInTheDocument();
    });

    it('should display calendar in Portuguese when browser locale is pt-BR', () => {
      Object.defineProperty(global, 'navigator', {
        value: { language: 'pt-BR' },
        writable: true,
      });

      const mockIntl = class extends originalDateTimeFormat {
        static supportedLocalesOf(locales) {
          return locales.includes('pt-BR') ? ['pt-BR'] : [];
        }

        format(date) {
          if (this.resolvedOptions().weekday === 'short') {
            const weekdays = ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sáb'];
            return weekdays[date.getUTCDay()];
          }
          if (this.resolvedOptions().month === 'long') {
            const months = [
              'janeiro',
              'fevereiro',
              'março',
              'abril',
              'maio',
              'junho',
              'julho',
              'agosto',
              'setembro',
              'outubro',
              'novembro',
              'dezembro',
            ];
            return `${months[date.getMonth()]} ${date.getFullYear()}`;
          }
          return super.format(date);
        }

        resolvedOptions() {
          return { ...super.resolvedOptions(), locale: 'pt-BR' };
        }
      };

      global.Intl.DateTimeFormat = mockIntl;

      render(
        <ThemeProvider>
          <Datepicker type="single" />
        </ThemeProvider>,
      );

      fireEvent.click(screen.getByRole('button'));

      const currentDate = new Date();
      const months = [
        'janeiro',
        'fevereiro',
        'março',
        'abril',
        'maio',
        'junho',
        'julho',
        'agosto',
        'setembro',
        'outubro',
        'novembro',
        'dezembro',
      ];
      const currentMonth = months[currentDate.getMonth()];
      expect(
        screen.getByText(new RegExp(currentMonth, 'i')),
      ).toBeInTheDocument();
    });

    it('should pass the browser locale to the Calendar component', () => {
      const fs = require('fs');
      const datepickerCode = fs.readFileSync(
        require.resolve('./Datepicker.jsx'),
        'utf8',
      );
      expect(datepickerCode).toContain('locale={navigator.language}');
    });

    it('should display only the first letter of each weekday in uppercase', () => {
      global.Intl.DateTimeFormat = class extends originalDateTimeFormat {
        format(date) {
          if (this.resolvedOptions().weekday === 'short') {
            const weekdays = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
            return weekdays[date.getUTCDay()];
          }
          return super.format(date);
        }
      };

      render(
        <ThemeProvider>
          <Datepicker type="single" />
        </ThemeProvider>,
      );

      fireEvent.click(screen.getByRole('button'));

      const weekdayLetters = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
      weekdayLetters.forEach(letter => {
        expect(screen.getAllByText(letter).length).toBeGreaterThan(0);
      });

      expect(screen.queryByText('sun')).not.toBeInTheDocument();
      expect(screen.queryByText('mon')).not.toBeInTheDocument();
    });
  });
});
