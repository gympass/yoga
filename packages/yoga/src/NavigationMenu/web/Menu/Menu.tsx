import React from 'react';
import styled, { css } from 'styled-components';
import { ChevronDown } from '@gympass/yoga-icons';
import { Text } from '@gympass/yoga';
import Icon from '../../../Icon';

const StyledMenu = styled.div<{
  hasAction: boolean;
  children: React.ReactNode;
  onClick?: (() => void) | undefined;
}>`
  ${({
    hasAction,
    theme: {
      yoga: {
        components: {
          navigationmenu: { backgroundColor, border, gap, padding, menu },
        },
      },
    },
  }) =>
    css`
      transition: background-color 300ms ease-in-out;

      display: grid;
      align-items: center;
      width: 100%;
      grid-template-columns: max-content 1fr max-content;
      gap: ${gap.xxsmall}px;
      padding: ${padding.xsmall}px;
      background-color: ${backgroundColor.contextMenu};
      border-radius: ${border.radius.contextMenu}px;
      min-height: ${menu.height}px;

      ${hasAction &&
      css`
        cursor: pointer;
        :hover,
        &:focus {
          background-color: ${backgroundColor.hover};
        }
      `}
    `}
`;

const StyledTextContainer = styled.div`
  ${({
      theme: {
        yoga: {
          components: {
            navigationmenu: { gap },
          },
        },
      },
    }) =>
      css`
    display: flex;
    flex-direction: column;
    gap: ${gap.xxxsmall}px;
    overflow: hidden;
  `}
`;

const StyledTitle = styled(Text.H4)`
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
      font-weight: ${font.weight.bold};
      flex: 1;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    `}
`;

const StyledSubtitle = styled(Text.Small)`
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
    `}
`;

const StyledActionIconContainer = styled.div`
  ${({
    theme: {
      yoga: {
        components: {
          navigationmenu: { icon },
        },
      },
    },
  }) => css`
      svg {
        fill: ${icon.fill.default}px;
      }
    `}
`;

const StyledAvatarContainer = styled.div`
  ${({
    theme: {
      yoga: {
        components: {
          navigationmenu: { avatar },
        },
      },
    },
  }) => css`
    > div:first-child {
      height: ${avatar.height}px;
      width: ${avatar.width}px;
    }
  `}
`;

type MenuProps = {
  avatar: React.ReactElement;
  subtitle?: string;
  title?: string;
  onClick?: () => void;
};

const Menu = ({ avatar: Avatar, subtitle, title, onClick }: MenuProps) => {
  const hasAction = Boolean(onClick);

  return (
    <StyledMenu hasAction={hasAction} onClick={onClick}>
      {!!Avatar && (
        <StyledAvatarContainer>
          {Avatar}
        </StyledAvatarContainer>
      )}

      <StyledTextContainer>
        {title && <StyledTitle>{title}</StyledTitle>}

        {subtitle && <StyledSubtitle>{subtitle}</StyledSubtitle>}
      </StyledTextContainer>

      {hasAction && (
        <StyledActionIconContainer>
          <Icon as={ChevronDown} size="large"  />
        </StyledActionIconContainer>
      )}
    </StyledMenu>
  );
};

export default Menu;
