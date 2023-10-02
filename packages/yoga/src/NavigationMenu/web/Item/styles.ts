import styled, { css } from 'styled-components';
import { theme, Box, Text as YogaText, Tag as YogaTag } from '@gympass/yoga';
import { media } from '@gympass/yoga-helpers';

const { colors, spacing, radii, fontWeights } = theme;

type ItemProps = {
  isActive: boolean;
  isResponsive?: boolean;
};

type TextContainerProps = {
  isSubItem: boolean;
};

export const TextContainer = styled(Box)<TextContainerProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: ${spacing.xxsmall}px;
  padding: 10px ${spacing.xxsmall}px 10px
    ${({ isSubItem }) => (isSubItem ? 44 : spacing.small)}px;
  border-radius: ${radii.small}px;
`;

export const Tag = styled(YogaTag)`
  text-transform: uppercase;
  background-color: ${colors.stamina};
  color: ${colors.white};
  border-radius: ${radii.circle}px;
`;

export const Text = styled(YogaText)`
  color: ${colors.deep};
  flex: 1;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const ActiveBackgroundColor = css`
  ${({ isResponsive }: { isResponsive: boolean }) =>
    isResponsive
      ? media.lg`background-color: ${colors.yoga}`
      : css`
          background-color: ${colors.yoga};
        `}
`;

const ActiveFontWeight = css`
  ${({ isResponsive }: { isResponsive: boolean }) =>
    isResponsive
      ? media.lg`font-weight: ${fontWeights.medium}`
      : css`
          font-weight: ${fontWeights.medium};
        `}
`;

const Active = css`
  cursor: auto;

  > ${TextContainer} {
    background-color: ${colors.clear};

    ${ActiveBackgroundColor}

    ${Text} {
      color: ${colors.vibin};

      ${ActiveFontWeight}
    }

    svg {
      fill: ${colors.vibin};
    }

    > ${Tag} {
      background-color: ${colors.stamina};
    }
  }
`;

export const Item = styled.li<ItemProps>`
  transition: background-color 300ms ease-in-out;

  background-color: transparent;
  border-radius: ${radii.small}px;
  list-style-type: none;
  cursor: pointer;

  svg {
    height: ${spacing.medium}px;
    width: ${spacing.medium}px;
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
      ${Active}
    }

    ${({ isActive }) => isActive && Active};
  }
`;
