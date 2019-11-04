import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import RadioGroup from '../';
import ThemeProvider from '../../ThemeProvider';
import RadioGroupContext from '../RadioGroupContext';

const originalError = console.error;

beforeEach(() => {
  console.error = jest.fn();
});

afterEach(() => {
  console.error = originalError;
});

describe('<RadioGroup />', () => {
  describe('<RadioGroup.Button />', () => {
    describe('Snapshots', () => {
      it('should match snapshot with default radio button', () => {
        const { container } = render(
          <ThemeProvider>
            <RadioGroup.Button>Radio 1</RadioGroup.Button>
          </ThemeProvider>,
        );
        expect(container).toMatchSnapshot();
      });

      it('should match snapshot with small radio button', () => {
        const { container } = render(
          <RadioGroupContext.Provider value={{ small: true }}>
            <ThemeProvider>
              <RadioGroup.Button>Radio 1</RadioGroup.Button>
            </ThemeProvider>
          </RadioGroupContext.Provider>,
        );
        expect(container).toMatchSnapshot();
      });
    });

    describe('Props', () => {
      it('should contains input type radio', () => {
        const { getByTestId } = render(
          <ThemeProvider>
            <RadioGroup.Button data-testid="radio">Radio 1</RadioGroup.Button>
          </ThemeProvider>,
        );

        expect(getByTestId('radio').type).toBe('radio');
      });

      it('value should be as prop value', () => {
        const { getByTestId } = render(
          <ThemeProvider>
            <RadioGroup.Button data-testid="radio" value="radio1">
              Radio 1
            </RadioGroup.Button>
          </ThemeProvider>,
        );

        expect(getByTestId('radio').value).toBe('radio1');
      });

      it('value should be children if prop value is ommited', () => {
        const { getByTestId, getByText } = render(
          <ThemeProvider>
            <RadioGroup.Button data-testid="radio">Radio 1</RadioGroup.Button>
          </ThemeProvider>,
        );

        const label = getByText('Radio 1');
        const radio = getByTestId('radio');

        expect(radio.value).toBe(label.textContent);
      });

      it('checked should be the selectedValue provided from Context', () => {
        const { getAllByTestId } = render(
          <RadioGroupContext.Provider value={{ selectedValue: 'Radio 2' }}>
            <ThemeProvider>
              <RadioGroup.Button data-testid="radio">Radio 1</RadioGroup.Button>
              <RadioGroup.Button data-testid="radio">Radio 2</RadioGroup.Button>
            </ThemeProvider>
          </RadioGroupContext.Provider>,
        );

        const [radio, radio2] = getAllByTestId('radio');

        expect(radio.checked).toBe(false);
        expect(radio2.checked).toBe(true);
      });

      it.only('name should the one provided by context', () => {
        const name = 'test';

        const { getAllByTestId } = render(
          <RadioGroupContext.Provider value={{ name }}>
            <ThemeProvider>
              <RadioGroup.Button data-testid="radio">Radio 1</RadioGroup.Button>
              <RadioGroup.Button data-testid="radio">Radio 2</RadioGroup.Button>
              <RadioGroup.Button data-testid="radio">Radio 3</RadioGroup.Button>
            </ThemeProvider>
          </RadioGroupContext.Provider>,
        );

        const radios = getAllByTestId('radio');
        radios.map(radio => {
          expect(radio.name).toBe(name);
        });
      });
    });

    describe('Events', () => {
      it('should call onchange from Context', () => {
        const onChangeMock = jest.fn();
        const { getByText } = render(
          <RadioGroupContext.Provider value={{ onChange: onChangeMock }}>
            <ThemeProvider>
              <RadioGroup.Button>Radio 1</RadioGroup.Button>
            </ThemeProvider>
          </RadioGroupContext.Provider>,
        );

        const radio = getByText('Radio 1');

        fireEvent.click(radio);

        expect(onChangeMock).toHaveBeenCalled();
      });
    });
  });
});
