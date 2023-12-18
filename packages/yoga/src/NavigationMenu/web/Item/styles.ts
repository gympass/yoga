import styled, { css } from 'styled-components';
import { media } from '@gympass/yoga-helpers';
import Box from '../../../Box';
import Tag from '../../../Tag';
import Text from '../../../Text';

export const StyledTextContainer = styled(Box)`
  ${({
    isSubItem,
    theme: {
      yoga: {
        components: {
          navigationmenu: { border, gap, padding },
        },
      },
    },
  }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    gap: ${gap.xxsmall}px;
    padding: 10px ${padding.xxsmall}px 10px ${isSubItem ? 44 : padding.small}px;
    border-radius: ${border.radius.default}px;
  `}
`;

export const StyledTag = styled(Tag)`
  ${({
    theme: {
      yoga: {
        components: {
          navigationmenu: { backgroundColor, border, tag },
        },
      },
    },
  }) => css`
    text-transform: uppercase;
    background-color: ${backgroundColor.stamina};
    color: ${tag.color.default};
    border-radius: ${border.radius.circle}px;
  `}
`;

export const StyledText = styled(Text)`
  ${({
    theme: {
      yoga: {
        components: {
          navigationmenu: { font },
        },
      },
    },
  }) => css`
    color: ${font.color.default};
    flex: 1;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  `}
`;

const Active = css`
  ${({
    isResponsive,
    theme: {
      yoga: {
        components: {
          navigationmenu: { backgroundColor, icon, font },
        },
      },
    },
  }) => css`
    cursor: auto;

    > ${StyledTextContainer} {
      background-color: ${backgroundColor.default};

      ${isResponsive
        ? media.lg`background-color: ${backgroundColor.yoga}`
        : css`
            background-color: ${backgroundColor.yoga};
          `}

      ${StyledText} {
        color: ${font.color.active};

        ${isResponsive
          ? media.lg`font-weight: ${font.weight.medium}`
          : css`
              font-weight: ${font.weight.medium};
            `}
      }

      svg {
        fill: ${icon.fill.active};
      }

      > ${StyledTag} {
        background-color: ${backgroundColor.stamina};
      }
    }
  `}
`;

export const StyledItem = styled.li`
  ${({
    isActive,
    theme: {
      yoga: {
        components: {
          navigationmenu: { backgroundColor, border, icon, font },
        },
      },
    },
  }) => css`
    transition: background-color 300ms ease-in-out;

    background-color: transparent;
    border-radius: ${border.radius.default}px;
    list-style-type: none;
    cursor: pointer;

    svg {
      height: ${icon.height}px;
      width: ${icon.width}px;
    }

    &:hover,
    &:focus {
      ${!isActive &&
      css`
        background-color: ${backgroundColor.hover};

        ${StyledText} {
          color: ${font.color.hover};
        }

        svg {
          fill: ${icon.fill.hover};
        }
      `};
    }

    a {
      text-decoration: none;

      &.active {
        ${Active}
      }

      ${isActive && Active};
    }
  `}
`;
