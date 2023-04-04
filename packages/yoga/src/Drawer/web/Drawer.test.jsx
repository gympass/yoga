import React from 'react';
import { screen, render, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { ThemeProvider, Button } from '../..';

import Drawer from '.';

describe('<Drawer />', () => {
  afterEach(cleanup);
  const onActionMock = jest.fn();

  it('should match snapshot', () => {
    const { baseElement } = render(
      <ThemeProvider>
        <Drawer isOpen>
          <Drawer.Header title="Title" />
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

  describe('<Drawer.Header />', () => {
    afterEach(cleanup);

    it('should render close bottom', () => {
      render(
        <ThemeProvider>
          <Drawer isOpen>
            <Drawer.Header title="Title" onClose={onActionMock} />
          </Drawer>
        </ThemeProvider>,
      );

      expect(screen.getByTestId('close-button-drawer')).toBeInTheDocument();
    });

    it('should render back bottom', () => {
      render(
        <ThemeProvider>
          <Drawer isOpen>
            <Drawer.Header title="Title" onBack={onActionMock} />
          </Drawer>
        </ThemeProvider>,
      );

      expect(screen.getByTestId('back-button-drawer')).toBeInTheDocument();
    });

    it('should render close and back bottons', () => {
      render(
        <ThemeProvider>
          <Drawer isOpen>
            <Drawer.Header
              title="Title"
              onClose={onActionMock}
              onBack={onActionMock}
            />
          </Drawer>
        </ThemeProvider>,
      );

      expect(screen.getByTestId('back-button-drawer')).toBeInTheDocument();
    });

    it('should render divider component', () => {
      render(
        <ThemeProvider>
          <Drawer isOpen>
            <Drawer.Header title="Title" divider />
          </Drawer>
        </ThemeProvider>,
      );

      expect(screen.getByTestId('divider-drawer')).toBeInTheDocument();
    });

    it('should render drawer without drawer.header', async () => {
      render(
        <ThemeProvider>
          <Drawer isOpen>
            <Drawer.Content>Subtitle</Drawer.Content>
            <Drawer.Footer>
              <Button onClick={onActionMock} secondary>
                Ok, got it
              </Button>
            </Drawer.Footer>
          </Drawer>
        </ThemeProvider>,
      );

      await userEvent
        .setup()
        .click(screen.getByRole('button', { name: /Ok, got it/i }));

      expect(screen.getByText('Subtitle')).toBeInTheDocument();
      expect(onActionMock).toHaveBeenCalledTimes(2);
    });

    it('should render all props', async () => {
      render(
        <ThemeProvider>
          <Drawer isOpen>
            <Drawer.Header
              title="Title"
              onClose={onActionMock}
              onBack={onActionMock}
              divider
            />
            <Drawer.Content>Subtitle</Drawer.Content>
            <Drawer.Footer>
              <Button onClick={onActionMock} secondary>
                Ok, got it
              </Button>
            </Drawer.Footer>
          </Drawer>
        </ThemeProvider>,
      );

      await userEvent
        .setup()
        .click(screen.getByRole('button', { name: /Ok, got it/i }));

      expect(onActionMock).toHaveBeenCalledTimes(3);
      expect(screen.getByText('Title')).toBeInTheDocument();
      expect(screen.getByText('Subtitle')).toBeInTheDocument();
      expect(screen.getByTestId('close-button-drawer')).toBeInTheDocument();
      expect(screen.getByTestId('divider-drawer')).toBeInTheDocument();
      expect(screen.getByTestId('back-button-drawer')).toBeInTheDocument();
    });
  });
});
