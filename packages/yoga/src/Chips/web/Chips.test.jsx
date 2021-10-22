import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { MapPin, ChevronDown } from '@gympass/yoga-icons';

import { ThemeProvider, Chips } from '../..';

describe('<Chips />', () => {
  describe('Snapshots', () => {
    it('should match snapshot', () => {
      const { container } = render(
        <ThemeProvider>
          <Chips>Classes</Chips>
        </ThemeProvider>,
      );

      expect(container).toMatchSnapshot();
    });

    it('should match snapshot with disabled prop', () => {
      const { container } = render(
        <ThemeProvider>
          <Chips disabled>Classes</Chips>
        </ThemeProvider>,
      );

      expect(container).toMatchSnapshot();
    });

    it('should match snapshot with more than one Chip', () => {
      const { container } = render(
        <ThemeProvider>
          <Chips>Classes</Chips>
          <Chips>Gyms and studios</Chips>
          <Chips>Personal trainers</Chips>
        </ThemeProvider>,
      );

      expect(container).toMatchSnapshot();
    });

    it('should match snapshot with system props', () => {
      const { container } = render(
        <ThemeProvider>
          <Chips
            fs="16"
            bg="#D8385E"
            color="#ffffff"
            width={150}
            elevation="small"
          >
            Classes
          </Chips>
        </ThemeProvider>,
      );

      expect(container).toMatchSnapshot();
    });

    describe('selected', () => {
      it('should match snapshot', () => {
        const { container } = render(
          <ThemeProvider>
            <Chips selected>Classes</Chips>
          </ThemeProvider>,
        );

        expect(container).toMatchSnapshot();
      });

      it('should match snapshot with more than one Chip', () => {
        const { container } = render(
          <ThemeProvider>
            <Chips>Classes</Chips>
            <Chips selected>Gyms and studios</Chips>
            <Chips selected>Personal trainers</Chips>
          </ThemeProvider>,
        );

        expect(container).toMatchSnapshot();
      });
    });

    describe('counter', () => {
      it('should match snapshot', () => {
        const { container } = render(
          <ThemeProvider>
            <Chips counter={8}>Classes</Chips>
          </ThemeProvider>,
        );

        expect(container).toMatchSnapshot();
      });

      it('should match snapshot with more than one Chip', () => {
        const { container } = render(
          <ThemeProvider>
            <Chips counter={8}>Classes</Chips>
            <Chips counter={52} selected>
              Gyms and studios
            </Chips>
            <Chips counter={1732} selected>
              Personal trainers
            </Chips>
          </ThemeProvider>,
        );

        expect(container).toMatchSnapshot();
      });
    });

    describe('icon', () => {
      it('should match selected snapshot', () => {
        const { container } = render(
          <ThemeProvider>
            <Chips counter={8} icon={[MapPin]}>
              Location
            </Chips>
            <Chips counter={8} icon={[MapPin, ChevronDown]}>
              Classes
            </Chips>
            <Chips icon={[MapPin, ChevronDown]}>Gyms and studios</Chips>
            <Chips icon={[MapPin]}>Personal trainers</Chips>
            <Chips counter={8} selected icon={[MapPin]}>
              Activities
            </Chips>
            <Chips counter={8} selected icon={[MapPin, ChevronDown]}>
              Language
            </Chips>
            <Chips selected icon={[MapPin, ChevronDown]}>
              Categories
            </Chips>
            <Chips selected icon={[MapPin]}>
              Availability
            </Chips>
          </ThemeProvider>,
        );

        expect(container).toMatchSnapshot();
      });
    });
  });

  describe('Events', () => {
    it('should toggle', () => {
      const toggleMock = jest.fn();

      const { getByText } = render(
        <ThemeProvider>
          <Chips onClick={toggleMock}>Classes</Chips>
        </ThemeProvider>,
      );

      fireEvent.click(getByText('Classes'));

      expect(toggleMock).toHaveBeenCalled();
    });

    it('should toggle using onToggle', () => {
      const toggleMock = jest.fn();

      const { getByText } = render(
        <ThemeProvider>
          <Chips onToggle={toggleMock}>Classes</Chips>
        </ThemeProvider>,
      );

      fireEvent.click(getByText('Classes'));

      expect(toggleMock).toHaveBeenCalled();
    });
  });
});
