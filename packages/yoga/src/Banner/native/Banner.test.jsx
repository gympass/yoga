import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

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

  it('should call button action function when the banner button is pressed', () => {
    const onButtonPressMock = jest.fn();
    const { getByText } = render(
      <ThemeProvider>
        <Banner
          message="Banner with button"
          primaryButton={{
            label: 'Action',
            action: onButtonPressMock,
          }}
        />
      </ThemeProvider>,
    );

    fireEvent.press(getByText('Action'));

    expect(onButtonPressMock).toHaveBeenCalled();
  });
});
