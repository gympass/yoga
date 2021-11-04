import React from 'react';
import { render, screen, within, fireEvent } from '@testing-library/react';

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

  it('should make label visible when open dropdown', () => {
    const { getByRole } = render(
      <ThemeProvider>
        <Dropdown {...dropdownProps} />
      </ThemeProvider>,
    );

    fireEvent.click(getByRole('button'));

    const testId = screen.getByTestId('label');

    within(testId).getByText('Find an activity to love');
  });

  it('should make label visible when has a selected option', () => {
    const selectedOption = {
      label: 'Swimming',
      value: 'swimming',
      selected: true,
    };
    const props = dropdownProps;

    props.options.push(selectedOption);

    render(
      <ThemeProvider>
        <Dropdown {...props} />
      </ThemeProvider>,
    );

    const testId = screen.getByTestId('label');

    within(testId).getByText('Find an activity to love');
  });
});
