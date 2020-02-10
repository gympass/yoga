import React from 'react';
import { render } from '@testing-library/react-native';

import { ThemeProvider, Progress } from '../..';

describe('<Progress />', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <ThemeProvider>
        <Progress />
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });
});
