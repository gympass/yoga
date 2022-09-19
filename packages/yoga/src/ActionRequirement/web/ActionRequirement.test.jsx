import React from 'react';
import { render } from '@testing-library/react';

import { ThemeProvider } from '../..';
import ActionRequirement from './ActionRequirement';

describe('<ActionRequirement />', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <ThemeProvider>
        <ActionRequirement />
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });
});
