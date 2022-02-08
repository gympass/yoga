import React from 'react';
import { screen, render } from '@testing-library/react';

import { ThemeProvider, Header } from '../..';

describe('<Header />', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <ThemeProvider>
        <Header />
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });

  it('should have link', () => {
    const gympassLink = 'https://site.gympass.com/br';

    render(
      <ThemeProvider>
        <Header link={gympassLink} />
      </ThemeProvider>,
    );

    screen.getByRole('link', { href: gympassLink });
  });

  it('should show children', () => {
    render(
      <ThemeProvider>
        <Header>
          <p>Make wellbeing universal</p>
        </Header>
      </ThemeProvider>,
    );

    screen.getByText('Make wellbeing universal');
  });
});
