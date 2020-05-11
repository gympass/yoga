import React from 'react';

import styled from 'styled-components';
import { render } from '@testing-library/react';

import ThemeProvider, { theme } from '../../../index';

import '../base.test';

describe('themeReader - web specs', () => {
  it('should render', () => {
    const Component = styled.div`
      border: ${theme.borders.small}px solid;
    `;

    const { getByTestId } = render(
      <ThemeProvider>
        <Component data-testid="component" />
      </ThemeProvider>,
    );

    expect(getByTestId('component')).toHaveStyleRule('border', '1px solid');
  });
});
