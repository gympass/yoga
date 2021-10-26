import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import { ThemeProvider, BottomSheet } from '../..';

describe('<BottomSheet />', () => {
  it('should match snapshot', () => {
    const onActionMock = jest.fn();

    const { container } = render(
      <ThemeProvider>
        <BottomSheet
          open
          title="We couldn't confirm your account"
          subTitle="Double check your info"
          actionLabel="Ok, I understand"
          onAction={onActionMock}
        />
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });

  it('should render a minimal bottomSheet', () => {
    const onActionMock = jest.fn();

    render(
      <ThemeProvider>
        <BottomSheet
          open
          title="We couldn't confirm your account"
          actionLabel="Ok, I understand"
          onAction={onActionMock}
        />
      </ThemeProvider>,
    );

    screen.getByTestId('title');
    screen.getByTestId('button-action');
    screen.getByText("We couldn't confirm your account");
  });

  it('should render a custom action button', () => {
    const onActionMock = jest.fn();

    render(
      <ThemeProvider>
        <BottomSheet
          open
          title="We couldn't confirm your account"
          subTitle="Double check your info"
          actionLabel="Ok, I understand"
          onAction={onActionMock}
        />
      </ThemeProvider>,
    );

    const button = screen.getByRole('button', { name: /Ok, I understand/i });

    fireEvent.click(button);

    expect(onActionMock).toHaveBeenCalledTimes(1);
  });

  it('should render a cancel button', () => {
    const onActionMock = jest.fn();
    const onCancelMock = jest.fn();

    render(
      <ThemeProvider>
        <BottomSheet
          open
          title="We couldn't confirm your account"
          subTitle="Double check your info"
          actionLabel="Ok, I understand"
          onAction={onActionMock}
          onCancel={onCancelMock}
        />
      </ThemeProvider>,
    );

    const button = screen.getByTestId('button-cancel');

    fireEvent.click(button);

    expect(onCancelMock).toHaveBeenCalledTimes(1);
  });

  it('should hide cancel button', () => {
    const onActionMock = jest.fn();

    render(
      <ThemeProvider>
        <BottomSheet
          open
          title="We couldn't confirm your account"
          subTitle="Double check your info"
          actionLabel="Ok, I understand"
          onAction={onActionMock}
        />
      </ThemeProvider>,
    );

    expect(screen.queryByRole('button-cancel')).toBeNull();
  });

  it('should hide subtitle', () => {
    const onActionMock = jest.fn();

    render(
      <ThemeProvider>
        <BottomSheet
          open
          title="We couldn't confirm your account"
          actionLabel="Ok, I understand"
          onAction={onActionMock}
        />
      </ThemeProvider>,
    );

    expect(screen.queryByRole('subtitle')).toBeNull();
  });
});
