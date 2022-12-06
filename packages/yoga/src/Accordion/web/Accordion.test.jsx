import React from 'react';
import { render, cleanup } from '@testing-library/react';
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
});
