import React from 'react';
import { render } from '@testing-library/react-native';

import { ThemeProvider, Icon } from '../..';

const Circle = props => (
  <svg {...props}>
    <circle cx="16" cy="16" r="16" />
  </svg>
);

describe('Snapshots', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <ThemeProvider>
        <Icon as={Circle} width="small" height="small" fill="stamina" />
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });

  it('should match snapshot with size prop', () => {
    const { container } = render(
      <ThemeProvider>
        <Icon as={Circle} size="small" fill="stamina" />
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });

  it('should match snapshot with system props', () => {
    const { container } = render(
      <ThemeProvider>
        <Icon
          as={Circle}
          size="small"
          fill="stamina"
          margin="medium"
          elevation="medium"
          borderRadius={2}
        />
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });
});
