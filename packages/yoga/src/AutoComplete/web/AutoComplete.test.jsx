import React from 'react';
import { render } from '@testing-library/react';

import { ThemeProvider, AutoComplete } from '../..';

describe('<AutoComplete />', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <ThemeProvider>
        <AutoComplete />
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });
});
