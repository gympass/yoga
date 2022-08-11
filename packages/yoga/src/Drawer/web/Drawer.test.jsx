import React from 'react';
import { screen, render, fireEvent, cleanup } from '@testing-library/react';

import { ThemeProvider, Button } from '../..';

import Drawer from '.';

describe('<Drawer />', () => {
  afterEach(cleanup);

  it('should match snapshot', () => {
    const { baseElement } = render(
      <ThemeProvider>
        <Drawer isOpen>
          <Drawer.Header>Title</Drawer.Header>
          <Drawer.Content>Subtitle</Drawer.Content>
          <Drawer.Footer>
            <Button secondary>Ok, got it</Button>
          </Drawer.Footer>
        </Drawer>
      </ThemeProvider>,
    );

    expect(baseElement).toMatchSnapshot();
  });

  it('should render a minimal drawer', () => {
    const onActionMock = jest.fn();

    render(
      <ThemeProvider>
        <Drawer isOpen>
          <Drawer.Header>Title</Drawer.Header>
          <Drawer.Content>Subtitle</Drawer.Content>
          <Drawer.Footer>
            <Button onClick={onActionMock} secondary>
              Ok, got it
            </Button>
          </Drawer.Footer>
        </Drawer>
      </ThemeProvider>,
    );

    screen.getByText('Title');
    screen.getByText('Subtitle');

    const button = screen.getByRole('button', { name: /Ok, got it/i });

    fireEvent.click(button);

    expect(onActionMock).toHaveBeenCalledTimes(1);
  });
});
