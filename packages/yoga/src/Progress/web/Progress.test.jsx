import React from 'react';
import { render } from '@testing-library/react';

import { ThemeProvider, Progress } from '../..';

describe('<Progress />', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <ThemeProvider>
        <Progress />
        <Progress max="100" />
        <Progress max="100" value="60" />
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });

  it('should match snapshot with label string', () => {
    const { container } = render(
      <ThemeProvider>
        <Progress max="100" label={{ value: 'Some decription here' }} />
        <Progress
          max="100"
          value="65"
          label={{ value: 'Some decription here', placement: 'right' }}
        />
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });

  it('should match snapshot with label number', () => {
    const { container } = render(
      <ThemeProvider>
        <Progress max="100" value="20" label={{ value: 20 }} />
        <Progress
          max="100"
          value="65"
          label={{ value: 65, placement: 'right' }}
        />
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });
});
