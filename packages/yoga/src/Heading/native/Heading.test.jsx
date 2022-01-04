import React from 'react';
import { render } from '@testing-library/react-native';

import { AddBooking, Favorite } from '@gympass/yoga-icons';
import { ThemeProvider } from '../..';
import Heading from './Heading';

describe('<Heading />', () => {
  it('should create a complete heading', () => {
    const { container } = render(
      <ThemeProvider>
        <Heading
          backButton={{
            onPress: jest.fn(),
          }}
          rightIcons={[
            {
              icon: AddBooking,
              key: 'AddBooking',
              onPress: jest.fn(),
            },
            {
              icon: Favorite,
              key: 'Favorite',
              onPress: jest.fn(),
            },
          ]}
          pageTitle="Page Title"
          title="Title"
          subtitle="Subtitle"
          avatar=""
        />
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });
  it('should create a heading without title', () => {
    const { container } = render(
      <ThemeProvider>
        <Heading
          backButton={{
            onPress: jest.fn(),
          }}
          rightIcons={[
            {
              icon: AddBooking,
              key: 'AddBooking',
              onPress: jest.fn(),
            },
            {
              icon: Favorite,
              key: 'Favorite',
              onPress: jest.fn(),
            },
          ]}
          pageTitle="Page Title"
        />
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });
});
