import styled, { css } from 'styled-components';
import { theme, Box, Text as YogaText } from '@gympass/yoga';
import { media } from '@gympass/yoga-helpers';

const { colors, spacing, radii } = theme;

type BottomItemProps = {
  isActive: boolean;
};

export const ItemsContainer = styled(Box)`
  ${media.lg`display: none`}
`;

export const Items = styled.ul`
  display: grid;
  grid-auto-columns: minmax(0, 1fr);
  grid-auto-flow: column;
  width: 100%;
  height: 74px;
  background-color: ${colors.clear};
  padding: ${spacing.xxxsmall}px;
  border: 1px solid ${colors.light};
  gap: ${spacing.xxxsmall}px;
`;

export const TextContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${spacing.xxxsmall}px;
  padding: ${spacing.xxsmall}px ${spacing.xxxsmall}px;
  border-radius: ${radii.small}px;
`;

export const Text = styled(YogaText)`
  color: ${colors.deep};
  max-width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const Active = css`
  :not(:last-child) {
    pointer-events: none;
  }

  div {
    background-color: ${colors.clear};

    ${Text} {
      color: ${colors.vibin};
    }

    svg {
      fill: ${colors.vibin};
    }
  }
`;

export const Item = styled.li<BottomItemProps>`
  transition: background-color 300ms ease-in-out;

  background-color: transparent;
  border-radius: ${radii.small}px;
  list-style-type: none;
  cursor: pointer;

  svg {
    height: ${spacing.medium}px;
    width: ${spacing.medium}px;
    fill: ${colors.deep};
  }

  &:hover,
  &:focus {
    ${({ isActive }) =>
      !isActive &&
      css`
        background-color: ${colors.light};

        ${Text} {
          color: ${colors.stamina};
        }

        svg {
          fill: ${colors.stamina};
        }
      `};
  }

  a {
    text-decoration: none;

    &.active {
      cursor: auto;

      ${Active}
    }
  }

  ${({ isActive }) => isActive && Active};
`;
