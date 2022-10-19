import React from 'react';
import { render } from '@testing-library/react-native';

import { ThemeProvider, Skeleton } from '../..';

describe('<Skeleton />', () => {
  it('should render the circular skeleton', () => {
    const { toJSON } = render(
      <ThemeProvider>
        <Skeleton type="circular" width={64} height={64} />
      </ThemeProvider>,
    );

    expect(toJSON()).toMatchSnapshot();
  });

  it('should render the rectangular skeleton', () => {
    const { toJSON } = render(
      <ThemeProvider>
        <Skeleton type="rectangular" width={400} height={200} />
      </ThemeProvider>,
    );

    expect(toJSON()).toMatchSnapshot();
  });

  it('should render the text skeleton', () => {
    const { toJSON } = render(
      <ThemeProvider>
        <Skeleton type="text" variant="body1" width={61} height={32} />
      </ThemeProvider>,
    );

    expect(toJSON()).toMatchSnapshot();
  });

  it('should render all text skeleton variants correctly', () => {
    const { toJSON } = render(
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

    expect(toJSON()).toMatchSnapshot();
  });
});
