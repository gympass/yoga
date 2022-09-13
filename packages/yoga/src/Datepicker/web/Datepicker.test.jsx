import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { format } from 'date-fns';

import { ThemeProvider, Datepicker } from '../..';

describe('<Datepicker />', () => {
  const testDate = new Date(2022, 7, 3);

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
      const mockedDate = new Date(2022, 7, 3);

      jest.useFakeTimers('modern').setSystemTime(mockedDate);

      const { container } = render(
        <ThemeProvider>
          <Datepicker type="single" startDate={testDate} />
        </ThemeProvider>,
      );

      expect(container).toMatchSnapshot();
    });
    it('should match with default selected dates range Datepicker', () => {
      const mockedDate = new Date(2022, 7, 3);

      jest.useFakeTimers('modern').setSystemTime(mockedDate);

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
      expect(onSelectSingle).toHaveBeenCalledTimes(1);
      fireEvent.click(screen.getByRole('button'));

      const day10 = screen.queryAllByText('10')[0];

      fireEvent.click(day10);
      expect(onSelectSingle).toHaveBeenCalledTimes(2);
    });
    it('should call onSelectRange function on range Datepicker', () => {
      const onSelectRange = jest.fn();

      render(
        <ThemeProvider>
          <Datepicker type="range" onSelectRange={onSelectRange} />
        </ThemeProvider>,
      );
      expect(onSelectRange).toHaveBeenCalledTimes(1);
      fireEvent.click(screen.getByRole('button'));

      const day10 = screen.queryAllByText('10')[0];
      const day20 = screen.queryAllByText('20')[0];

      fireEvent.click(day10);
      expect(onSelectRange).toHaveBeenCalledTimes(2);

      fireEvent.click(day20);
      expect(onSelectRange).toHaveBeenCalledTimes(3);
    });
    it('should display default date on single Datepicker', () => {
      const currentDate = new Date();

      render(
        <ThemeProvider>
          <Datepicker type="single" startDate={currentDate} />
        </ThemeProvider>,
      );
      const formattedDate = format(currentDate, dateFormat);

      expect(screen.getByText(formattedDate)).toBeVisible();
    });
    it('should display default date range on range Datepicker', () => {
      const currentDate = new Date();
      const end = new Date();

      end.setDate(currentDate.getDate() + 15);

      const formattedStartDate = format(currentDate, dateFormat);
      const formattedEndDate = format(end, dateFormat);

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
    it('should be disabled', () => {
      render(
        <ThemeProvider>
          <Datepicker type="single" startDate={testDate} disabled />
        </ThemeProvider>,
      );
      const formattedDate = format(testDate, dateFormat);
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
});
