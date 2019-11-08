import React from 'react';
import { render, fireEvent, toJSON } from '@testing-library/react-native';

import RadioGroup from '../';
import ThemeProvider from '../../ThemeProvider';
import RadioGroupContext from '../RadioGroupContext';

describe('<RadioGroup />', () => {
  describe('<RadioGroup.Button />', () => {
    describe('Snapshots', () => {
      it('should match snapshot with default radio button', () => {
        const { container } = render(
          <ThemeProvider>
            <RadioGroup.Button>Radio 1</RadioGroup.Button>
          </ThemeProvider>,
        );
        expect(toJSON(container)).toMatchSnapshot();
      });

      it('should match snapshot with small radio button', () => {
        const { container } = render(
          <RadioGroupContext.Provider value={{ small: true }}>
            <ThemeProvider>
              <RadioGroup.Button>Radio 1</RadioGroup.Button>
            </ThemeProvider>
          </RadioGroupContext.Provider>,
        );
        expect(toJSON(container)).toMatchSnapshot();
      });
    });

    describe('Props', () => {
      it('checked should be the selectedValue provided from Context', () => {
        const { getAllByText } = render(
          <RadioGroupContext.Provider value={{ selectedValue: 'Radio 2' }}>
            <ThemeProvider>
              <RadioGroup.Button>Radio 1</RadioGroup.Button>
              <RadioGroup.Button>Radio 2</RadioGroup.Button>
            </ThemeProvider>
          </RadioGroupContext.Provider>,
        );

        const [radio, radio2] = getAllByText(/^Radio/);

        expect(radio.props.checked).toBe(false);
        expect(radio2.props.checked).toBe(true);
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

        const radio = getByText(/^Radio/);

        fireEvent.press(radio);

        expect(onChangeMock).toHaveBeenCalled();
      });

      it('value should be as prop value', () => {
        const onChangeMock = jest.fn();
        const { getByText } = render(
          <RadioGroupContext.Provider value={{ onChange: onChangeMock }}>
            <ThemeProvider>
              <RadioGroup.Button value="radio1">Radio 1</RadioGroup.Button>
            </ThemeProvider>
          </RadioGroupContext.Provider>,
        );

        const radio = getByText(/^Radio/);

        fireEvent.press(radio);

        expect(onChangeMock).toHaveBeenCalledWith({
          value: 'radio1',
        });
      });

      it('value should be children if prop value is ommited', () => {
        const onChangeMock = jest.fn();
        const { getByText } = render(
          <RadioGroupContext.Provider value={{ onChange: onChangeMock }}>
            <ThemeProvider>
              <RadioGroup.Button>Radio 1</RadioGroup.Button>
            </ThemeProvider>
          </RadioGroupContext.Provider>,
        );

        const radio = getByText(/^Radio/);

        fireEvent.press(radio);

        expect(onChangeMock).toHaveBeenCalledWith({
          value: 'Radio 1',
        });
      });
    });
  });
});
