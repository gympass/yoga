import React from 'react';
import styled from 'styled-components';

import { theme } from '../../Theme';

const Wrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  height: 16px;
  min-width: 16px;

  padding-right: 5px;
  padding-left: 5px;
  margin-left: ${theme.spacing.xxxsmall}px;

  color: ${theme.colors.white};
  font-size: ${theme.fontSizes.xsmall}px;
  line-height: ${theme.lineHeights.xsmall}px;
  font-weight: ${theme.fontWeights.medium}px;

  border-radius: ${theme.radii.small}px;
  background-color: ${theme.colors.secondary};
`;

const Counter = ({ children }) => {
  return <Wrapper>{children > 999 ? '+999' : children}</Wrapper>;
};

export default Counter;
