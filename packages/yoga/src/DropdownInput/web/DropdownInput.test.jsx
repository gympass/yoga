import React from 'react';
import { render } from '@testing-library/react';

import { ThemeProvider, DropdownInput } from '../..';

describe('<DropdownInput />', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <ThemeProvider>
        <DropdownInput />
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });
});
