import React from 'react';
import { Text } from 'react-native';
import { render, toJSON } from '@testing-library/react-native';
import ThemeProvider from '../../Theme';
import Stepper from '..';

describe('<Stepper />', () => {
  describe('Snapshots', () => {
    it('should match snapshot with first step active', () => {
      const { container } = render(
        <ThemeProvider>
          <Stepper activeStep={0}>
            <Stepper.Step label="step one">
              <Text>step one content</Text>
            </Stepper.Step>
            <Stepper.Step label="step two">
              <Text>step two content</Text>
            </Stepper.Step>
            <Stepper.Step label="step three">
              <Text>step three content</Text>
            </Stepper.Step>
          </Stepper>
        </ThemeProvider>,
      );
      expect(toJSON(container)).toMatchSnapshot();
    });

    it('should match snapshot with second step active', () => {
      const { container } = render(
        <ThemeProvider>
          <Stepper activeStep={1}>
            <Stepper.Step label="step one">
              <Text>step one content</Text>
            </Stepper.Step>
            <Stepper.Step label="step two">
              <Text>step two content</Text>
            </Stepper.Step>
            <Stepper.Step label="step three">
              <Text>step three content</Text>
            </Stepper.Step>
          </Stepper>
        </ThemeProvider>,
      );
      expect(toJSON(container)).toMatchSnapshot();
    });
  });

  describe('Steps', () => {
    it('should change the active step', () => {
      const { queryByText, rerender } = render(
        <ThemeProvider>
          <Stepper activeStep={0}>
            <Stepper.Step label="step one">
              <Text>step one content</Text>
            </Stepper.Step>
            <Stepper.Step label="step two">
              <Text>step two content</Text>
            </Stepper.Step>
            <Stepper.Step label="step three">
              <Text>step three content</Text>
            </Stepper.Step>
          </Stepper>
        </ThemeProvider>,
      );

      expect(queryByText('step one content')).toBeTruthy();
      expect(queryByText('step two content')).toBeFalsy();
      expect(queryByText('step three content')).toBeFalsy();

      rerender(
        <ThemeProvider>
          <Stepper activeStep={1}>
            <Stepper.Step label="step one">
              <Text>step one content</Text>
            </Stepper.Step>
            <Stepper.Step label="step two">
              <Text>step two content</Text>
            </Stepper.Step>
            <Stepper.Step label="step three">
              <Text>step three content</Text>
            </Stepper.Step>
          </Stepper>
        </ThemeProvider>,
      );

      expect(queryByText('step one content')).toBeFalsy();
      expect(queryByText('step two content')).toBeTruthy();
      expect(queryByText('step three content')).toBeFalsy();
    });
  });
});
