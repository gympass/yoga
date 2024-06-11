import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';
import Text from '../../../../Text';
import Box from '../../../../Box';

export const StyledBoxContainer = styled(Box)<{
  containerWidth?: number | null;
  children: ReactNode;
}>`
  ${({ containerWidth }) =>
    css`
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;
      position: relative;
      width: ${containerWidth}px;
    `}
`;

export const StyledText = styled(Text.Body1)<{
  onLayout: (event: any) => void;
  textWidth?: string | null;
  numberOfLines: number;
  bold: boolean;
  children: React.ReactNode;
}>`
  ${({
    textWidth,
    theme: {
      yoga: {
        spacing: { medium },
      },
    },
  }) =>
    css`
      position: absolute;
      left: 0;
      padding-right: ${medium};
      flex: 1;
      width: ${textWidth};
    `}
`;
