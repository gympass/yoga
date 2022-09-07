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
});
