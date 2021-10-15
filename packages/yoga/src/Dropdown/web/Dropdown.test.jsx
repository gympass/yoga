import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ThemeProvider, Dropdown } from '../..';

const dropdownProps = {
  label: 'Find an activity to love',
  options: [
    { label: 'Yoga', value: 'yoga' },
    { label: 'Crossfit', value: 'crossfit' },
    { label: 'Tenis', value: 'tenis' },
    { label: 'Soccer', value: 'soccer' },
    { label: 'Pilates', value: 'pilates' },
    { label: 'Run', value: 'running' },
  ],
};

describe('<Dropdown />', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <ThemeProvider>
        <Dropdown {...dropdownProps} />
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });

  it('should match snapshot when disabled', () => {
    const { container } = render(
      <ThemeProvider>
        <Dropdown {...dropdownProps} disabled />
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });

  it('should match snapshot when full', () => {
    const { container } = render(
      <ThemeProvider>
        <Dropdown {...dropdownProps} full />
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });

  it('should match snapshot when has a selected value', () => {
    const selectedOption = {
      label: 'Swimming',
      value: 'swimming',
      selected: true,
    };
    const props = dropdownProps;

    props.options.push(selectedOption);

    const { container } = render(
      <ThemeProvider>
        <Dropdown {...props} disabled />
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });

  it('should match snapshot with error', () => {
    const { container } = render(
      <ThemeProvider>
        <Dropdown {...dropdownProps} error="Please, select one activity" />
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });

  describe('when receive a click', () => {
    let wrapper;

    beforeEach(() => {
      const options = dropdownProps.options.map(option => ({
        ...option,
        selected: option.value === 'tenis',
      }));

      wrapper = render(
        <ThemeProvider>
          <Dropdown {...dropdownProps} options={options} />
        </ThemeProvider>,
      );

      fireEvent.click(wrapper.getByRole('button'));
    });

    it('shows all options', () => {
      expect(wrapper.queryAllByRole('option')).toHaveLength(7);
    });

    describe('then select the same option selected', () => {
      beforeEach(() => {
        fireEvent.click(wrapper.queryByRole('option', { name: /tenis/i }));
      });

      it('do not show options', () => {
        expect(wrapper.queryAllByRole('option')).toHaveLength(0);
      });
    });
  });
});
