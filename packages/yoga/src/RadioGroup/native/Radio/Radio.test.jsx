import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import RadioGroup from '../..';
import ThemeProvider from '../../../Theme';
import RadioGroupContext from '../../RadioGroupContext';

describe('<RadioGroup />', () => {
  describe('<RadioGroup.Radio />', () => {
    describe('Snapshots', () => {
      it('should match snapshot with default radio', () => {
        const { container, toJSON } = render(
          <ThemeProvider>
            <RadioGroup.Radio />
          </ThemeProvider>,
        );

        expect(toJSON(container)).toMatchSnapshot();
      });

      it('should match snapshot with disabled radio', () => {
        const { container, toJSON } = render(
          <ThemeProvider>
            <RadioGroup.Radio disabled />
          </ThemeProvider>,
        );

        expect(toJSON(container)).toMatchSnapshot();
      });

      it('should match snapshot with default radio', () => {
        const { container, toJSON } = render(
          <ThemeProvider>
            <RadioGroup.Radio />
          </ThemeProvider>,
        );

        expect(toJSON(container)).toMatchSnapshot();
      });

      it('should match snapshot with default radio pressed', () => {
        const onChangeMock = jest.fn();
        const { container, getByTestId, toJSON } = render(
          <RadioGroupContext.Provider value={{ onChange: onChangeMock }}>
            <ThemeProvider>
              <RadioGroup.Radio testID="radio" />
            </ThemeProvider>
          </RadioGroupContext.Provider>,
        );

        const radio = getByTestId(/^radio/);

        fireEvent.press(radio);

        expect(toJSON(container)).toMatchSnapshot();
      });
    });

    describe('Props', () => {
      it('checked should be the selectedValue provided from Context', () => {
        const { getAllByTestId } = render(
          <RadioGroupContext.Provider value={{ selectedValue: 'Radio 2' }}>
            <ThemeProvider>
              <RadioGroup.Radio testID="radio" value="Radio 1" />
              <RadioGroup.Radio testID="radio" value="Radio 2" />
            </ThemeProvider>
          </RadioGroupContext.Provider>,
        );

        const [radio, radio2] = getAllByTestId(/^radio/);

        expect(radio.props.checked).toBe(false);
        expect(radio2.props.checked).toBe(true);
      });
    });

    describe('Events', () => {
      it('should call onchange from Context', () => {
        const onChangeMock = jest.fn();

        const { getByTestId } = render(
          <RadioGroupContext.Provider value={{ onChange: onChangeMock }}>
            <ThemeProvider>
              <RadioGroup.Radio testID="radio" />
            </ThemeProvider>
          </RadioGroupContext.Provider>,
        );

        const radio = getByTestId(/^radio/);

        fireEvent.press(radio);

        expect(onChangeMock).toHaveBeenCalled();
      });

      it('value should be as prop value', () => {
        const onChangeMock = jest.fn();
        const { getByTestId } = render(
          <RadioGroupContext.Provider value={{ onChange: onChangeMock }}>
            <ThemeProvider>
              <RadioGroup.Radio value="radio1" testID="radio" />
            </ThemeProvider>
          </RadioGroupContext.Provider>,
        );

        const radio = getByTestId(/^radio/);

        fireEvent.press(radio);

        expect(onChangeMock).toHaveBeenCalledWith({
          value: 'radio1',
        });
      });
    });
  });
});
