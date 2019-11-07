import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import RadioGroup from '../';
import ThemeProvider from '../../ThemeProvider';

describe('<RadioGroup />', () => {
  describe('Snapshots', () => {
    it('should match snapshot with default radiogroup', () => {
      const { container } = render(
        <ThemeProvider>
          <RadioGroup />
        </ThemeProvider>,
      );
      expect(container).toMatchSnapshot();
    });

    it('should match snapshot with full radiogroup', () => {
      const { container } = render(
        <ThemeProvider>
          <RadioGroup full />
        </ThemeProvider>,
      );
      expect(container).toMatchSnapshot();
    });

    it('should match snapshot with radios as children', () => {
      const { container, getAllByText } = render(
        <ThemeProvider>
          <RadioGroup>
            <RadioGroup.Button>Option 1</RadioGroup.Button>
            <RadioGroup.Button>Option 2</RadioGroup.Button>
            <RadioGroup.Button>Option 3</RadioGroup.Button>
          </RadioGroup>
        </ThemeProvider>,
      );
      expect(container).toMatchSnapshot();
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
      expect(container).toMatchSnapshot();
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
      expect(getByText('Option 2').checked).toBe(true);
    });

    it('should set the name for all children', () => {
      const groupName = 'test';

      const { container, getAllByTestId } = render(
        <ThemeProvider>
          <RadioGroup name={groupName}>
            <RadioGroup.Button data-testid="Option 1">
              Option 1
            </RadioGroup.Button>
            <RadioGroup.Button data-testid="Option 2">
              Option 2
            </RadioGroup.Button>
            <RadioGroup.Button data-testid="Option 3">
              Option 3
            </RadioGroup.Button>
          </RadioGroup>
        </ThemeProvider>,
      );
      expect(container).toMatchSnapshot();

      // use testid to get the input[type=radio] instead of label
      getAllByTestId(/^Option/).map(radio => {
        expect(radio.name).toBe(groupName);
      });
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

    fireEvent.click(firstOption);

    expect(onChangeMock).toHaveBeenCalled();
  });
});
