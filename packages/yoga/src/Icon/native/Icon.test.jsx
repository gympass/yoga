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
    const { toJSON } = render(
      <ThemeProvider>
        <Icon as={Circle} width="small" height="small" fill="stamina" />
      </ThemeProvider>,
    );

    expect(toJSON()).toMatchSnapshot();
  });

  it('should match snapshot with size prop', () => {
    const { toJSON } = render(
      <ThemeProvider>
        <Icon as={Circle} size="small" fill="stamina" />
      </ThemeProvider>,
    );

    expect(toJSON()).toMatchSnapshot();
  });

  it('should match snapshot with system props', () => {
    const { toJSON } = render(
      <ThemeProvider>
        <Icon
          as={Circle}
          size="small"
          fill="stamina"
          margin="medium"
          elevation="medium"
        />
      </ThemeProvider>,
    );

    expect(toJSON()).toMatchSnapshot();
  });
});
