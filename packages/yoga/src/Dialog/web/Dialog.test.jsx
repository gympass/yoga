import React from 'react';
import { render } from '@testing-library/react';

import { ThemeProvider, Dialog } from '../..';

describe('<Dialog />', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <ThemeProvider>
        <Dialog />
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });
});
