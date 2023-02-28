import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import { Text, Button } from '@gympass/yoga';
import { ThemeProvider } from '../..';

import Accordion from '.';

describe('<Accordion />', () => {
  afterEach(cleanup);

  it('should match snapshot', () => {
    const { baseElement } = render(
      <ThemeProvider>
        <Accordion title="Title">
          <Accordion.Content>
            <Text>Content</Text>

            <Button small inverted>
              Small button
            </Button>
          </Accordion.Content>
        </Accordion>
      </ThemeProvider>,
    );

    expect(baseElement).toMatchSnapshot();
  });

  it('should have className when passed as props', () => {
    render(
      <ThemeProvider>
        <Accordion title="Title">
          <Accordion.Content
            className="className-as-props"
            data-testid="accordion-content"
          >
            <Text>Content</Text>

            <Button small inverted>
              Small button
            </Button>
          </Accordion.Content>
        </Accordion>
      </ThemeProvider>,
    );

    expect(screen.getByTestId('accordion-content')).toHaveClass(
      'className-as-props',
    );
  });
});
