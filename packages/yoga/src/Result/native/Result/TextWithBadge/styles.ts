import React from 'react';
import styled from 'styled-components';
import Text from '../../../../Text';
import Box from '../../../../Box';

export const StyledBoxContainer = styled(Box)`
  flex-direction: row;
  align-items: center;
`;

export const StyledText = styled(Text.Body1)<{
  numberOfLines: number;
  bold: boolean;
  children: React.ReactNode;
}>`
  flex-shrink: 1;
`;
