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
      const { container } = render(
        <ThemeProvider>
          <EventCard {...defaultProps} />
        </ThemeProvider>,
      );

      expect(container).toMatchSnapshot();
    });
    it('should match snapshot of small EventCard with event indicator disabled', () => {
      const { container } = render(
        <ThemeProvider>
          <EventCard {...defaultProps} event={false} small onPress={() => {}} />
        </ThemeProvider>,
      );

      expect(container).toMatchSnapshot();
    });
    it('should match snapshot of small EventCard with event indicator enabled', () => {
      const { container } = render(
        <ThemeProvider>
          <EventCard {...defaultProps} small onPress={() => {}} />
        </ThemeProvider>,
      );

      expect(container).toMatchSnapshot();
    });
    it('should match snapshot of small EventCard active', () => {
      const { container } = render(
        <ThemeProvider>
          <EventCard {...defaultProps} small active onPress={() => {}} />
        </ThemeProvider>,
      );

      expect(container).toMatchSnapshot();
    });
    it('should match snapshot of small EventCard with day of week and without indicator', () => {
      const { container } = render(
        <ThemeProvider>
          <EventCard {...defaultProps} small />
        </ThemeProvider>,
      );

      expect(container).toMatchSnapshot();
    });
  });
});
