import React from 'react';
import { render, fireEvent, toJSON } from '@testing-library/react-native';

import RadioGroup from '..';
import ThemeProvider from '../../Theme';

describe('<RadioGroup />', () => {
  describe('Snapshots', () => {
    it('should match snapshot with radio button as children', () => {
      const { container, getAllByText } = render(
        <ThemeProvider>
          <RadioGroup>
            <RadioGroup.Button>Option 1</RadioGroup.Button>
            <RadioGroup.Button>Option 2</RadioGroup.Button>
            <RadioGroup.Button>Option 3</RadioGroup.Button>
          </RadioGroup>
        </ThemeProvider>,
      );
      expect(toJSON(container)).toMatchSnapshot();
      expect(getAllByText(/^Option/)).toHaveLength(3);
    });

    it('should match snapshot with small radios', () => {
      const { container } = render(
        <ThemeProvider>
          <RadioGroup small>
            <RadioGroup.Button>Option 1</RadioGroup.Button>
            <RadioGroup.Button>Option 2</RadioGroup.Button>
            <RadioGroup.Button>Option 3</RadioGroup.Button>
          </RadioGroup>
        </ThemeProvider>,
      );
      expect(toJSON(container)).toMatchSnapshot();
    });

    it('should has setted the selected value', () => {
      const { container, getByText } = render(
        <ThemeProvider>
          <RadioGroup selectedValue="Option 2">
            <RadioGroup.Button>Option 1</RadioGroup.Button>
            <RadioGroup.Button>Option 2</RadioGroup.Button>
            <RadioGroup.Button>Option 3</RadioGroup.Button>
          </RadioGroup>
        </ThemeProvider>,
      );
      expect(container).toMatchSnapshot();
      expect(getByText('Option 2').props.checked).toBe(true);
    });
  });
});

describe('Events', () => {
  it('should set the onchange for its children', () => {
    const onChangeMock = jest.fn();

    const { getByText } = render(
      <ThemeProvider>
        <RadioGroup onChange={onChangeMock}>
          <RadioGroup.Button>Option 1</RadioGroup.Button>
          <RadioGroup.Button>Option 2</RadioGroup.Button>
          <RadioGroup.Button>Option 3</RadioGroup.Button>
        </RadioGroup>
      </ThemeProvider>,
    );

    const firstOption = getByText('Option 1');

    fireEvent.press(firstOption);

    expect(onChangeMock).toHaveBeenCalled();
  });
});
