/* eslint-disable jsx-a11y/mouse-events-have-key-events */

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ThemeProvider } from '../..';
import Rating from '.';

describe('<Rating />', () => {
  const originalOffsetWidth = Object.getOwnPropertyDescriptor(
    HTMLElement.prototype,
    'offsetWidth',
  );

  beforeAll(() => {
    Object.defineProperty(HTMLElement.prototype, 'offsetWidth', {
      configurable: true,
      value: 76, // 5 stars (5 * 12px + 4 * 4px gutter)
    });
  });

  afterAll(() => {
    Object.defineProperty(
      HTMLElement.prototype,
      'offsetWidth',
      originalOffsetWidth,
    );
  });

  describe('Snapshots', () => {
    it('should match snapshot with Rating', () => {
      const { container } = render(
        <ThemeProvider>
          <Rating />
        </ThemeProvider>,
      );
      expect(container).toMatchSnapshot();
    });

    it('should match snapshot with different values', () => {
      const { container } = render(
        <ThemeProvider>
          <Rating value={0} />
          <Rating value={0.5} />

          <Rating value={1} />
          <Rating value={1.1} />
          <Rating value={1.2} />
          <Rating value={1.3} />
          <Rating value={1.4} />
          <Rating value={1.5} />
          <Rating value={1.6} />
          <Rating value={1.7} />
          <Rating value={1.8} />
          <Rating value={1.9} />

          <Rating value={2} />
          <Rating value={2.5} />
          <Rating value={3} />
          <Rating value={3.5} />
          <Rating value={4} />
          <Rating value={4.5} />
        </ThemeProvider>,
      );
      expect(container).toMatchSnapshot();
    });

    it('should match snapshot with different icon quantity', () => {
      const { container } = render(
        <ThemeProvider>
          <Rating max={3} value={0} />
          <Rating max={3} value={0.5} />
          <Rating max={3} value={1} />
          <Rating max={3} value={1.5} />
          <Rating max={3} value={2} />
          <Rating max={3} value={2.5} />
          <Rating max={3} value={3} />
        </ThemeProvider>,
      );
      expect(container).toMatchSnapshot();
    });

    it('should match snapshot with different icon', () => {
      const Circle = props => (
        <svg {...props}>
          <circle cx="12" cy="12" r="12" />
        </svg>
      );

      const { container } = render(
        <ThemeProvider>
          <Rating icon={{ type: Circle }} value={0} />
          <Rating icon={{ type: Circle }} value={1} />
          <Rating icon={{ type: Circle }} value={2} />
        </ThemeProvider>,
      );
      expect(container).toMatchSnapshot();
    });

    it('should match snapshot when mouse over', () => {
      const { container } = render(
        <ThemeProvider>
          <Rating readOnly={false} />
        </ThemeProvider>,
      );

      const { firstChild } = container;

      fireEvent.mouseMove(firstChild, {
        /** Each star has 12px. Gutter is 4px.
         * For the third star, we should set clentX > 32px and < 48px */
        clientX: 40,
      });

      expect(container).toMatchSnapshot();
    });
  });

  describe('Events', () => {
    it('should call onRate when clicking', () => {
      const onRateMock = jest.fn();

      const { container } = render(
        <ThemeProvider>
          <Rating onRate={onRateMock} readOnly={false} />
        </ThemeProvider>,
      );

      const { firstChild } = container;

      fireEvent.mouseMove(firstChild, {
        clientX: 40, // third star position
      });

      fireEvent.click(firstChild);

      expect(onRateMock).toHaveBeenCalled();
      expect(onRateMock).toHaveBeenCalledWith(3);
    });

    it('should call onMouseOver callback', () => {
      const onMouseOverMock = jest.fn();

      const { container } = render(
        <ThemeProvider>
          <Rating onMouseOver={onMouseOverMock} readOnly={false} />
        </ThemeProvider>,
      );

      const { firstChild } = container;

      fireEvent.mouseOver(firstChild);

      expect(onMouseOverMock).toHaveBeenCalled();
    });

    it('should call onMouseLeave callback', () => {
      const onMouseLeaveMock = jest.fn();

      const { container } = render(
        <ThemeProvider>
          <Rating onMouseLeave={onMouseLeaveMock} readOnly={false} />
        </ThemeProvider>,
      );

      const { firstChild } = container;

      fireEvent.mouseLeave(firstChild);

      expect(onMouseLeaveMock).toHaveBeenCalled();
    });
  });
});
