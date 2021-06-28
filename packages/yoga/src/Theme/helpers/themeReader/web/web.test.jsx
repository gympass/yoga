import React from 'react';

import styled, { css } from 'styled-components';
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

  it('should render with conditional', () => {
    const Component = styled.div`
      border: ${({ borders }) =>
        borders
          ? css`
              ${theme.borders.small}px solid
            `
          : 'none'};
    `;

    const { getByTestId, rerender } = render(
      <ThemeProvider>
        <Component borders={false} data-testid="component" />
      </ThemeProvider>,
    );

    expect(getByTestId('component')).toHaveStyleRule('border', 'none');

    rerender(
      <ThemeProvider>
        <Component borders data-testid="component" />
      </ThemeProvider>,
    );

    expect(getByTestId('component')).toHaveStyleRule('border', '1px solid');
  });
});
