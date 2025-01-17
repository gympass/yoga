import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import { ThemeProvider, Snackbar } from '../..';

describe('<Snackbar />', () => {
  jest.useRealTimers();

  it('should match snapshot', () => {
    const { container } = render(
      <ThemeProvider>
        <Snackbar open message="Make wellbeing universal" onClose={jest.fn()} />
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });

  it('should render with custom dataTestId', () => {
    render(
      <ThemeProvider>
        <Snackbar
          open
          message="Make wellbeing universal"
          onClose={jest.fn()}
          data-testid="custom-snackbar"
        />
      </ThemeProvider>,
    );

    expect(screen.getByTestId('custom-snackbar')).toBeInTheDocument();
  });

  it('should render a minimal snackbar', () => {
    render(
      <ThemeProvider>
        <Snackbar
          open
          message="Make wellbeing universal"
          onClose={jest.fn()}
          data-testid="custom-snackbar"
        />
      </ThemeProvider>,
    );

    screen.getByRole('alert');
    screen.getByTestId('custom-snackbar');
    screen.getByLabelText('success');
    screen.getByText('Make wellbeing universal');
  });

  it('should not render an icon', () => {
    render(
      <ThemeProvider>
        <Snackbar
          open
          message="Make wellbeing universal"
          onClose={jest.fn()}
          hideIcon
        />
      </ThemeProvider>,
    );

    expect(screen.queryByRole('img')).toBeNull();
  });

  it('should render a custom action button', () => {
    const onActionMock = jest.fn();

    render(
      <ThemeProvider>
        <Snackbar
          open
          message="Make wellbeing universal"
          onAction={onActionMock}
          onClose={jest.fn()}
          actionLabel="Let's go"
        />
      </ThemeProvider>,
    );

    const button = screen.getByRole('button', { name: /let's go/i });

    fireEvent.click(button);

    expect(onActionMock).toHaveBeenCalledTimes(1);
  });

  it('should render a close button', () => {
    const onCloseMock = jest.fn();

    render(
      <ThemeProvider>
        <Snackbar
          open
          message="Make wellbeing universal"
          onClose={onCloseMock}
        />
      </ThemeProvider>,
    );

    const button = screen.getByRole('button');

    fireEvent.click(button);

    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  it('should close after timeout', async () => {
    jest.useFakeTimers();

    const onCloseMock = jest.fn();

    render(
      <ThemeProvider>
        <Snackbar
          open
          duration={1000}
          message="Make wellbeing universal"
          onClose={onCloseMock}
          hideCloseButton
        />
      </ThemeProvider>,
    );

    expect(screen.queryByRole('button')).toBeNull();

    jest.runAllTimers();

    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  it('should close with timeout set up', async () => {
    const onCloseMock = jest.fn();

    render(
      <ThemeProvider>
        <Snackbar
          open
          duration={1000}
          message="Make wellbeing universal"
          onClose={onCloseMock}
        />
      </ThemeProvider>,
    );

    const button = screen.getByRole('button');

    fireEvent.click(button);

    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });
});
