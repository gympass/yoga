import React from 'react';

import styled, { css } from 'styled-components';
import { render } from '@testing-library/react-native';

import ThemeProvider, { theme } from '../../../index.native';

import '../base.test';

describe('themeReader - web specs', () => {
  it('should render', () => {
    const Component = styled.View`
      border: ${theme.borders.small}px solid;
    `;

    const { toJSON } = render(
      <ThemeProvider>
        <Component testID="component">Teste</Component>
      </ThemeProvider>,
    );

    expect(toJSON().props.style).toEqual([
      { borderWidth: 1, borderColor: 'black', borderStyle: 'solid' },
    ]);
  });

  it('should render with conditional', () => {
    const Component = styled.View`
      border: ${({ borders }) =>
        borders
          ? css`
              ${theme.borders.small}px solid
            `
          : 'none'};
    `;

    const { toJSON, rerender } = render(
      <ThemeProvider>
        <Component borders={false} testID="component">
          Teste
        </Component>
      </ThemeProvider>,
    );

    expect(toJSON().props.style).toEqual([
      { borderWidth: 0, borderColor: 'black', borderStyle: 'solid' },
    ]);

    rerender(
      <ThemeProvider>
        <Component borders data-testid="component" />
      </ThemeProvider>,
    );

    expect(toJSON().props.style).toEqual([
      { borderWidth: 1, borderColor: 'black', borderStyle: 'solid' },
    ]);
  });
});
