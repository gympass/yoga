import React from 'react';
import { render } from '@testing-library/react';

import { ThemeProvider, Input } from '../..';

describe('<Input />', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <ThemeProvider>
        <Input />
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });
});
