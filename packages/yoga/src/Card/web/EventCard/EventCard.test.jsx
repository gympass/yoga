import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from '../../..';
import EventCard from '.';

const event = {
  name: 'Yoga Class',
  place: 'Gympass',
  time: '19 am',
};

const date = {
  day: '19',
  weekday: 'thu',
  month: 'dec',
};

describe('<Card />', () => {
  describe('Snapshots', () => {
    it('should match snapshot with default EventCard', () => {
      const { container } = render(
        <ThemeProvider>
          <EventCard event={event} date={date} />
        </ThemeProvider>,
      );

      expect(container).toMatchSnapshot();
    });
  });
});
