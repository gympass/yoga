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
          <Drawer.Header title="Title" />
          <Drawer.Content>Subtitle</Drawer.Content>
          <Drawer.Footer>
            <Button secondary>Ok, got it!</Button>
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
              Ok, got it!
            </Button>
          </Drawer.Footer>
        </Drawer>
      </ThemeProvider>,
    );

    const title = screen.getByText('Title');
    const subtitle = screen.getByText('Subtitle');

    const button = screen.getByRole('button', { name: /Ok, got it!/i });

    await userEvent.setup().click(button);

    expect(title).toBeVisible();
    expect(subtitle).toBeVisible();
    expect(onActionMock).toBeCalledTimes(1);
  });

  describe('<Drawer.Header />', () => {
    afterEach(cleanup);

    it('should render close bottom', () => {
      const onCloseActionMock = jest.fn();

      render(
        <ThemeProvider>
          <Drawer isOpen>
            <Drawer.Header title="Title" onClose={onCloseActionMock} />
          </Drawer>
        </ThemeProvider>,
      );

      const closeButton = screen.getByRole('button', {
        name: 'close-button-drawer',
      });

      expect(closeButton).toBeVisible();
    });

    it('should render back bottom', () => {
      const backHandleActionMock = jest.fn();

      render(
        <ThemeProvider>
          <Drawer isOpen>
            <Drawer.Header title="Title" backHandler={backHandleActionMock} />
          </Drawer>
        </ThemeProvider>,
      );

      const backButton = screen.getByRole('button', {
        name: 'back-button-drawer',
      });

      expect(backButton).toBeVisible();
    });

    it('should render close and back bottons', () => {
      const onCloseActionMock = jest.fn();
      const backHandleActionMock = jest.fn();

      render(
        <ThemeProvider>
          <Drawer isOpen>
            <Drawer.Header
              title="Title"
              onClose={onCloseActionMock}
              backHandler={backHandleActionMock}
            />
          </Drawer>
        </ThemeProvider>,
      );

      const backButton = screen.getByRole('button', {
        name: 'back-button-drawer',
      });
      const closeButton = screen.getByRole('button', {
        name: 'close-button-drawer',
      });

      expect(backButton).toBeVisible();
      expect(closeButton).toBeVisible();
    });

    it('should render divider component', () => {
      render(
        <ThemeProvider>
          <Drawer isOpen>
            <Drawer.Header title="Title" divider />
          </Drawer>
        </ThemeProvider>,
      );

      const divider = screen.getByRole('separator', { name: 'divider-drawer' });

      expect(divider).toBeInTheDocument();
    });

    it('should render drawer without drawer.header', async () => {
      const onButtonActionMock = jest.fn();

      render(
        <ThemeProvider>
          <Drawer isOpen>
            <Drawer.Content>Subtitle</Drawer.Content>
            <Drawer.Footer>
              <Button onClick={onButtonActionMock} secondary>
                Ok, got it!
              </Button>
            </Drawer.Footer>
          </Drawer>
        </ThemeProvider>,
      );

      const headerDrawer = screen.queryByRole('heading', {
        name: 'header-drawer',
      });

      const subtitle = screen.getByText('Subtitle');

      await userEvent
        .setup()
        .click(screen.getByRole('button', { name: /Ok, got it!/i }));

      expect(onButtonActionMock).toBeCalledTimes(1);

      expect(headerDrawer).not.toBeInTheDocument();
      expect(subtitle).toBeVisible();
    });

    it('should render onClose, backHandler and divider', async () => {
      const onCloseActionMock = jest.fn();
      const backHandleActionMock = jest.fn();

      render(
        <ThemeProvider>
          <Drawer isOpen>
            <Drawer.Header
              title="Title"
              onClose={onCloseActionMock}
              backHandler={backHandleActionMock}
              divider
            />
          </Drawer>
        </ThemeProvider>,
      );

      const closeButton = screen.getByRole('button', {
        name: 'close-button-drawer',
      });
      const backButton = screen.getByRole('button', {
        name: 'back-button-drawer',
      });

      const divider = screen.getByRole('separator', { name: 'divider-drawer' });

      expect(closeButton).toBeVisible();
      expect(backButton).toBeVisible();
      expect(divider).toBeVisible();
    });

    it('should call onClose function', async () => {
      const onCloseActionMock = jest.fn();

      render(
        <ThemeProvider>
          <Drawer isOpen>
            <Drawer.Header title="Title" onClose={onCloseActionMock} />
          </Drawer>
        </ThemeProvider>,
      );

      await userEvent
        .setup()
        .click(screen.getByRole('button', { name: 'close-button-drawer' }));

      expect(onCloseActionMock).toBeCalledTimes(1);
    });

    it('should call backHandler function', async () => {
      const backHandleActionMock = jest.fn();

      render(
        <ThemeProvider>
          <Drawer isOpen>
            <Drawer.Header title="Title" backHandler={backHandleActionMock} />
          </Drawer>
        </ThemeProvider>,
      );

      await userEvent
        .setup()
        .click(screen.getByRole('button', { name: 'back-button-drawer' }));

      expect(backHandleActionMock).toBeCalledTimes(1);
    });
  });
});
