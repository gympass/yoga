import React from 'react';
import { render } from '@testing-library/react';

import { ThemeProvider, Icon } from '../..';

describe('Snapshots', () => {
  it('should match snapshot', () => {
    const Circle = props => (
      <svg {...props}>
        <circle cx="16" cy="16" r="16" />
      </svg>
    );
    const { container } = render(
      <ThemeProvider>
        <Icon as={Circle} width="small" height="small" fill="stamina" />
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });
});
