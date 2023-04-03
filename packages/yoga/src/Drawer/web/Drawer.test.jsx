import React from 'react';
import { screen, render, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

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

  it('should render a minimal drawer', async () => {
    const onActionMock = jest.fn();

    render(
      <ThemeProvider>
        <Drawer isOpen>
          <Drawer.Header title="Title" />
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

    await userEvent
      .setup()
      .click(screen.getByRole('button', { name: /Ok, got it/i }));

    expect(onActionMock).toHaveBeenCalledTimes(1);
  });
});
