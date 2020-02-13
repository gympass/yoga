import React from 'react';
import { render } from '@testing-library/react';

import { ThemeProvider, Dropdown } from '../..';

describe('<Dropdown />', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <ThemeProvider>
        <Dropdown />
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });
});
