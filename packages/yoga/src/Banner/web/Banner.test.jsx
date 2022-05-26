import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { CheckedFull } from '@gympass/yoga-icons';
import { ThemeProvider, Banner } from '../..';

describe('<Banner />', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <ThemeProvider>
        <Banner message="Feedback message." />
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });

  it('should match snapshot with custom variant', () => {
    const { container } = render(
      <ThemeProvider>
        <Banner variant="success" message="Success banner without button" />
        <Banner
          variant="informative"
          message="Informative banner without button"
        />
        <Banner variant="attention" message="Attention banner without button" />
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });

  it('should match snapshot with icon', () => {
    const { container } = render(
      <ThemeProvider>
        <Banner icon={CheckedFull} message="Banner with icon" />
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });

  it('should match snapshot with button', () => {
    const { container } = render(
      <ThemeProvider>
        <Banner
          message="Banner with button"
          primaryButton={{
            label: 'Action',
            action: () => {},
          }}
        />
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });

  it('should call button action function when the banner button is clicked', () => {
    const onButtonClickMock = jest.fn();
    const { getByRole } = render(
      <ThemeProvider>
        <Banner
          message="Banner with button"
          primaryButton={{
            label: 'Action',
            action: onButtonClickMock,
          }}
        />
      </ThemeProvider>,
    );

    fireEvent.click(getByRole('button', { name: 'Action' }));

    expect(onButtonClickMock).toHaveBeenCalled();
  });

  it('should match snapshot with two action buttons', () => {
    const { container } = render(
      <ThemeProvider>
        <Banner
          message="Banner with two action buttons"
          primaryButton={{
            label: 'Primary Action',
            action: () => {},
          }}
          secondaryButton={{
            label: 'Secondary Action',
            action: () => {},
          }}
        />
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });

  it('should call both buttons action function when each banner action button are clicked', () => {
    const onPrimaryButtonClickMock = jest.fn();
    const onSecondaryButtonClickMock = jest.fn();

    const { getByRole } = render(
      <ThemeProvider>
        <Banner
          message="Banner with button"
          primaryButton={{
            label: 'Primary Action',
            action: onPrimaryButtonClickMock,
          }}
          secondaryButton={{
            label: 'Secondary Action',
            action: onSecondaryButtonClickMock,
          }}
        />
      </ThemeProvider>,
    );

    fireEvent.click(getByRole('button', { name: 'Primary Action' }));
    expect(onPrimaryButtonClickMock).toHaveBeenCalled();

    fireEvent.click(getByRole('button', { name: 'Secondary Action' }));
    expect(onSecondaryButtonClickMock).toHaveBeenCalled();
  });
});
