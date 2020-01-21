import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider, Tag } from '../..';

describe('<Tag />', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <ThemeProvider>
        <Tag />
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });
});
