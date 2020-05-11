import React from 'react';

import styled from 'styled-components';
import { render } from '@testing-library/react-native';

import ThemeProvider, { theme } from '../../../index.native';

import '../base.test';

describe('themeReader - web specs', () => {
  it('should render', () => {
    const Component = styled.View`
      border: ${theme.borders.small}px solid;
    `;

    const { asJSON } = render(
      <ThemeProvider>
        <Component testID="component">Teste</Component>
      </ThemeProvider>,
    );

    expect(asJSON().children[0].props.style).toEqual([
      { borderWidth: 1, borderColor: 'black', borderStyle: 'solid' },
    ]);
  });
});
