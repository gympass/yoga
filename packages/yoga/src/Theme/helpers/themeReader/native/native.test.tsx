import React from 'react';

import styled, { css } from 'styled-components';
import { render } from '@testing-library/react-native';

import ThemeProvider, { theme } from '../../../index.native';

import '../base.test';

describe('themeReader - native specs', () => {
  it('should render', () => {
    const Component = styled.View<{
      testID: string;
      children: React.ReactNode;
    }>`
      border: ${theme.borders.small}px solid;
    `;

    const { toJSON } = render(
      <ThemeProvider>
        <Component testID="component">Teste</Component>
      </ThemeProvider>,
    );

    expect((toJSON() as unknown as { props: { style } }).props.style).toEqual([
      { borderWidth: 1, borderColor: 'black', borderStyle: 'solid' },
    ]);
  });

  it('should render with conditional', () => {
    const Component = styled.View<{
      borders: boolean;
      testID: string;
      children?: React.ReactNode;
    }>`
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

    expect((toJSON() as unknown as { props: { style } }).props.style).toEqual([
      { borderWidth: 0, borderColor: 'black', borderStyle: 'solid' },
    ]);

    rerender(
      <ThemeProvider>
        <Component borders testID="component" />
      </ThemeProvider>,
    );

    expect((toJSON() as unknown as { props: { style } }).props.style).toEqual([
      { borderWidth: 1, borderColor: 'black', borderStyle: 'solid' },
    ]);
  });
});
