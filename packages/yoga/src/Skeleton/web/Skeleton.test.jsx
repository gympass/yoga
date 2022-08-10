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
});
