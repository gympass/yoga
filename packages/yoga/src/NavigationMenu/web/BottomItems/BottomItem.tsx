import React from 'react';
import styled, { css } from 'styled-components';
import { Text } from '@gympass/yoga';
import Icon from '../../../Icon';
import Box from '../../../Box';

const StyledText = styled(Text.SmallestException)`
  ${({
    theme: {
      yoga: {
        components: {
          navigationmenu: { font },
        },
      },
    },
  }) =>
    css`
      color: ${font.color.default};
      max-width: 100%;
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
          navigationmenu: { icon, font },
        },
      },
    },
  }) =>
    css`
      :not(:last-child) {
        pointer-events: none;
      }

      div {
        ${StyledText} {
          color: ${font.color.active};
        }

        svg {
          fill: ${icon.fill.active};
        }
      }
    `}
`;

const StyledItem = styled.li`
  ${({
    isActive,
    theme: {
      yoga: {
        components: {
          navigationmenu: { border, icon, font },
        },
      },
    },
  }) =>
    css`
      transition: background-color 300ms ease-in-out;

      border-radius: ${border.radius.default}px;
      list-style-type: none;
      cursor: pointer;

      svg {
        height: ${icon.height}px;
        width: ${icon.width}px;
        fill: ${icon.fill.default};
      }

      &:hover,
      &:focus {
        ${!isActive &&
        css`
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
          cursor: auto;

          ${Active}
        }
      }

      ${isActive && Active};
    `}
`;

const StyledTextContainer = styled(Box)`
  ${({
    theme: {
      yoga: {
        components: {
          navigationmenu: { border, gap, padding },
        },
      },
    },
  }) =>
    css`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: ${gap.xxxsmall}px;
      padding: ${padding.xxxsmall}px;
      border-radius: ${border.radius.default}px;
    `}
`;

type BottomItemProps = {
  active?: boolean;
  icon?: React.ReactNode;
  label: string;
  wrapper: React.FunctionComponent<any>;
};

const BottomItem = ({
  active = false,
  icon,
  label,
  wrapper: Wrapper,
}: BottomItemProps) => {
  return (
    <StyledItem isActive={active}>
      <Wrapper>
        <StyledTextContainer>
          <Icon as={icon} />

          <StyledText>{label}</StyledText>
        </StyledTextContainer>
      </Wrapper>
    </StyledItem>
  );
};

export default BottomItem;
