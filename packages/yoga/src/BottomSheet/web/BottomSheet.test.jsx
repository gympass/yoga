import React from 'react';
import { screen, render, fireEvent, cleanup } from '@testing-library/react';

import { ThemeProvider, Button } from '../..';

import BottomSheet from '.';

describe('<BottomSheet />', () => {
  afterEach(cleanup);

  it('should match snapshot', () => {
    const { baseElement } = render(
      <ThemeProvider>
        <BottomSheet isOpen>
          <BottomSheet.Header>Title</BottomSheet.Header>
          <BottomSheet.Content>Subtitle</BottomSheet.Content>
          <BottomSheet.Footer>
            <Button secondary>Ok, got it</Button>
          </BottomSheet.Footer>
        </BottomSheet>
      </ThemeProvider>,
    );

    expect(baseElement).toMatchSnapshot();
  });

  it('should render a minimal bottom sheet', () => {
    const onActionMock = jest.fn();

    render(
      <ThemeProvider>
        <BottomSheet isOpen>
          <BottomSheet.Header>Title</BottomSheet.Header>
          <BottomSheet.Content>Subtitle</BottomSheet.Content>
          <BottomSheet.Footer>
            <Button onClick={onActionMock} secondary>
              Ok, got it
            </Button>
          </BottomSheet.Footer>
        </BottomSheet>
      </ThemeProvider>,
    );

    screen.getByText('Title');
    screen.getByText('Subtitle');

    const button = screen.getByRole('button', { name: /Ok, got it/i });

    fireEvent.click(button);

    expect(onActionMock).toHaveBeenCalledTimes(1);
  });
});
