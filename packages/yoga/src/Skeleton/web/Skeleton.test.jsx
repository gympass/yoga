import React from 'react';
import { render } from '@testing-library/react';

import { ThemeProvider, Skeleton } from '../..';

describe('<Skeleton />', () => {
  it('should render the circular skeleton', () => {
    const { container } = render(
      <ThemeProvider>
        <Skeleton type="circular" width={64} height={64} />
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });

  it('should render the rectangular skeleton', () => {
    const { container } = render(
      <ThemeProvider>
        <Skeleton type="rectangular" width={400} height={200} />
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });

  it('should render the text skeleton', () => {
    const { container } = render(
      <ThemeProvider>
        <Skeleton type="text" variant="body1" width={61} />
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });

  it('should render all text skeleton variants correctly', () => {
    const { container } = render(
      <ThemeProvider>
        <Skeleton type="text" variant="h1" width="100" />
        <Skeleton type="text" variant="h2" width="100" />
        <Skeleton type="text" variant="h3" width="100" />
        <Skeleton type="text" variant="h4" width="100" />
        <Skeleton type="text" variant="h5" width="100" />
        <Skeleton type="text" variant="body1" width="100" />
        <Skeleton type="text" variant="body2" width="100" />
        <Skeleton type="text" variant="overline" width="100" />
        <Skeleton type="text" variant="exception" width="100" />
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });

  it('should render all background color variants correctly', () => {
    const { container } = render(
      <ThemeProvider>
        <Skeleton type="text" variant="body1" width="100" />
        <Skeleton type="text" variant="body1" width="100" color="secondary" />
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });
});
