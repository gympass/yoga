import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { screen, render, fireEvent } from '@testing-library/react';

import { ThemeProvider, Button } from '../..';

import BottomSheet from '.';

describe('<BottomSheet />', () => {
  jest.useRealTimers();

  beforeAll(() => {
    ReactDOM.createPortal = jest.fn(element => {
      return element;
    });
  });

  afterEach(() => {
    ReactDOM.createPortal.mockClear();
  });

  it('should match snapshot', () => {
    const container = renderer.create(
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

    expect(container.toJSON()).toMatchSnapshot();
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
