import React from 'react';
import { render } from '@testing-library/react-native';
import { ThemeProvider } from '../../..';
import EventCard from '.';

const defaultProps = {
  event: {
    name: 'Yoga Class',
    place: 'Gympass',
    time: '19 am',
  },
  date: {
    day: '19',
    dayOfWeek: 'thu',
    month: 'dec',
  },
};

describe('<EventCard />', () => {
  describe('Snapshots', () => {
    it('should match snapshot with full EventCard', () => {
      const { toJSON } = render(
        <ThemeProvider>
          <EventCard {...defaultProps} />
        </ThemeProvider>,
      );

      expect(toJSON()).toMatchSnapshot();
    });
    it('should match snapshot of small EventCard with event indicator disabled', () => {
      const { toJSON } = render(
        <ThemeProvider>
          <EventCard {...defaultProps} event={false} small onPress={() => {}} />
        </ThemeProvider>,
      );

      expect(toJSON()).toMatchSnapshot();
    });
    it('should match snapshot of small EventCard with event indicator enabled', () => {
      const { toJSON } = render(
        <ThemeProvider>
          <EventCard {...defaultProps} small onPress={() => {}} />
        </ThemeProvider>,
      );

      expect(toJSON()).toMatchSnapshot();
    });
    it('should match snapshot of small EventCard active', () => {
      const { toJSON } = render(
        <ThemeProvider>
          <EventCard {...defaultProps} small active onPress={() => {}} />
        </ThemeProvider>,
      );

      expect(toJSON()).toMatchSnapshot();
    });
    it('should match snapshot of small EventCard with day of week and without indicator', () => {
      const { toJSON } = render(
        <ThemeProvider>
          <EventCard {...defaultProps} small />
        </ThemeProvider>,
      );

      expect(toJSON()).toMatchSnapshot();
    });
  });
});
