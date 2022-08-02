import React from 'react';
import { render } from '@testing-library/react';

import { ThemeProvider, Datepicker } from '../..';

describe('<Datepicker />', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <ThemeProvider>
        <Datepicker />
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });
});
