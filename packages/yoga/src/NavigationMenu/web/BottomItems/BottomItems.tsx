import React from 'react';
import styled, { css } from 'styled-components';
import { media } from '@gympass/yoga-helpers';

type BottomItemsStyledProps = React.HTMLAttributes<HTMLUListElement> & {
  $zIndex?: number;
};

const StyledItemsContainer = styled.nav`
  position: relative;
  ${media.lg`display: none`}

  z-index: ${({ $zIndex }: BottomItemsStyledProps) => $zIndex ?? 2};
`;

const StyledItems = styled.ul`
  ${({
    theme: {
      yoga: {
        components: {
          navigationmenu: { backgroundColor, border, gap, height },
        },
      },
    },
  }) => css`
    bottom: 0;
    display: grid;
    grid-auto-columns: minmax(0, 1fr);
    grid-auto-flow: column;
    align-items: center;
    width: 100%;
    height: ${height.bottomMenu}px;
    background-color: ${backgroundColor.bottomMenu};
    margin: 0;
    padding: 0;
    border: 1px solid ${border.color.default};
    gap: ${gap.xxxsmall}px;
  `}
`;

type BottomItemsProps = Omit<BottomItemsStyledProps, '$zIndex'> & {
  children: React.ReactNode;
  zIndex: number;
};

const BottomItems = ({ children, ...containerProps }: BottomItemsProps) => {
  return (
    <StyledItemsContainer {...containerProps}>
      <StyledItems>{children}</StyledItems>
    </StyledItemsContainer>
  );
};

export default BottomItems;
