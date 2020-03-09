/* eslint-disable no-console */

import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import RadioGroup from '../..';
import ThemeProvider from '../../../Theme';
import RadioGroupContext from '../../RadioGroupContext';

const originalError = console.error;

beforeEach(() => {
  console.error = jest.fn();
});

afterEach(() => {
  console.error = originalError;
});

describe('<RadioGroup />', () => {
  describe('<RadioGroup.Radio />', () => {
    describe('Snapshots', () => {
      it('should match snapshot with default radio', () => {
        const { container } = render(
          <ThemeProvider>
            <RadioGroup.Radio />
          </ThemeProvider>,
        );
        expect(container).toMatchSnapshot();
      });
    });

    describe('Props', () => {
      it('should contains input type radio', () => {
        const { getByTestId } = render(
          <ThemeProvider>
            <RadioGroup.Radio data-testid="radio" />
          </ThemeProvider>,
        );

        expect(getByTestId('radio').type).toBe('radio');
      });

      it('value should be as prop value', () => {
        const { getByTestId } = render(
          <ThemeProvider>
            <RadioGroup.Radio data-testid="radio" value="radio1" />
          </ThemeProvider>,
        );

        expect(getByTestId('radio').value).toBe('radio1');
      });

      it('checked should be the selectedValue provided from Context', () => {
        const { getAllByTestId } = render(
          <RadioGroupContext.Provider value={{ selectedValue: 'Radio 2' }}>
            <ThemeProvider>
              <RadioGroup.Radio data-testid="radio" value="Radio 1" />
              <RadioGroup.Radio data-testid="radio" value="Radio 2" />
            </ThemeProvider>
          </RadioGroupContext.Provider>,
        );

        const [radio, radio2] = getAllByTestId('radio');

        expect(radio.checked).toBe(false);
        expect(radio2.checked).toBe(true);
      });

      it('name should be the one provided by context', () => {
        const name = 'test';

        const { getAllByTestId } = render(
          <RadioGroupContext.Provider value={{ name }}>
            <ThemeProvider>
              <RadioGroup.Radio data-testid="radio" value="Radio 1" />
              <RadioGroup.Radio data-testid="radio" value="Radio 2" />
              <RadioGroup.Radio data-testid="radio" value="Radio 3" />
            </ThemeProvider>
          </RadioGroupContext.Provider>,
        );

        const radios = getAllByTestId('radio');
        radios.map(radio => expect(radio.name).toBe(name));
      });
    });

    describe('Events', () => {
      it('should call onchange from Context', () => {
        const onChangeMock = jest.fn();
        const { getByTestId } = render(
          <RadioGroupContext.Provider value={{ onChange: onChangeMock }}>
            <ThemeProvider>
              <RadioGroup.Radio data-testid="radio" value="Radio 1" />
            </ThemeProvider>
          </RadioGroupContext.Provider>,
        );

        const radio = getByTestId('radio');

        fireEvent.click(radio);

        expect(onChangeMock).toHaveBeenCalled();
      });
    });
  });
});
