import React from 'react';
import { render } from '@testing-library/react-native';
import { ThemeProvider } from '../../..';
import EventCard from '.';

const event = {
  name: 'Yoga Class',
  place: 'Gympass',
  day: '19',
  dayOfWeek: 'thu',
  month: 'dec',
  time: '19 am',
};

describe('<Card />', () => {
  describe('Snapshots', () => {
    it('should match snapshot with default EventCard', () => {
      const { container } = render(
        <ThemeProvider>
          <EventCard event={event} />
        </ThemeProvider>,
      );
      expect(container).toMatchSnapshot();
    });
    it('should match snapshot with variant primary EventCard', () => {
      const { container } = render(
        <ThemeProvider>
          <EventCard event={event} variant="primary" />
        </ThemeProvider>,
      );
      expect(container).toMatchSnapshot();
    });
    it('should match snapshot with variant secondary EventCard', () => {
      const { container } = render(
        <ThemeProvider>
          <EventCard event={event} variant="secondary" />
        </ThemeProvider>,
      );
      expect(container).toMatchSnapshot();
    });
    it('should match snapshot with variant tertiary EventCard', () => {
      const { container } = render(
        <ThemeProvider>
          <EventCard event={event} variant="tertiary" />
        </ThemeProvider>,
      );
      expect(container).toMatchSnapshot();
    });
  });
});
