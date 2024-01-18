import React from 'react';
import styled, { css } from 'styled-components';
import { media } from '@gympass/yoga-helpers';

const StyledItemsContainer = styled.nav`
  position: relative;
  ${media.lg`display: none`}
`;

const StyledItems = styled.ul`
  ${({
    fill,
    theme: {
      yoga: {
        colors,
        components: {
          navigationmenu: { border, gap },
        },
      },
    },
  }) => css`
    position: absolute;
    bottom: 0;
    display: grid;
    grid-auto-columns: minmax(0, 1fr);
    grid-auto-flow: column;
    align-items: center;
    width: 100%;
    height: 56px;
    background-color: ${colors[fill]};;
    margin: 0;
    padding: 0;
    border: 1px solid ${border.color.default};
    gap: ${gap.xxxsmall}px;
    z-index: 15;
  `}
`;

type BottomItemsProps = {
  children: React.ReactNode;
  fill?: string;
};

const BottomItems = ({ children, fill = 'white' }: BottomItemsProps) => {
  return (
    <StyledItemsContainer>
      <StyledItems fill={fill}>{children}</StyledItems>
    </StyledItemsContainer>
  );
};

export default BottomItems;
