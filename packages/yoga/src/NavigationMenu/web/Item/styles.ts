import styled, { css } from 'styled-components';
import Tag from '../../../Tag';
import Text from '../../../Text';

export const StyledTextContainer = styled.div<{
  isSubItem?: boolean;
  children: React.ReactNode;
}>`
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
    background-color: ${backgroundColor.tag};
    color: ${tag.color.default};
    border-radius: ${border.radius.tag}px;
  `}
`;

export const StyledText = styled(Text.Body1)`
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
      background-color: ${backgroundColor.active};

      ${StyledText} {
        color: ${font.color.active};
        font-weight: ${font.weight.bold};
      }

      svg {
        fill: ${icon.fill.active};
      }

      > ${StyledTag} {
        background-color: ${backgroundColor.tag};
      }
    }
  `}
`;

export const StyledItem = styled.li<{
  isActive: boolean;
  isResponsive?: boolean;
  children: React.ReactNode;
}>`
  ${({
    isActive,
    theme: {
      yoga: {
        spacing,
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
    margin-right: ${spacing.xxsmall}px;

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

      &:hover,
      &:focus {
        outline: none;

        ${StyledTextContainer} {
          background-color: ${backgroundColor.hover};
          color: ${font.color.hover};
        }

        ${StyledText} {
          color: ${font.color.hover};
        }

        svg {
          fill: ${icon.fill.hover};
        }
      }

      &.active {
        ${Active}
      }

      ${isActive && Active};
    }
  `}
`;
