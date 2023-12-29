import React from 'react';
import styled, { css } from 'styled-components';
import { ArrowRight } from '@gympass/yoga-icons';
import { Text, Skeleton } from '@gympass/yoga';
import Box from '../../../Box';
import Icon from '../../../Icon';

const StyledMenu = styled(Box)`
  ${({
    hasAction,
    theme: {
      yoga: {
        components: {
          navigationmenu: { avatar, backgroundColor, border, gap, padding },
        },
      },
    },
  }) =>
    css`
      transition: background-color 300ms ease-in-out;

      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      gap: ${gap.xxsmall}px;
      padding: ${padding.xsmall}px;
      background-color: ${backgroundColor.white};
      border-radius: ${border.radius.circle}px;
      border: 1px solid ${border.color.white};

      > div:first-child {
        height: ${avatar.height}px;
        width: ${avatar.width}px;
      }

      ${hasAction &&
      css`
        :hover,
        &:focus {
          cursor: pointer;
          border: 1px solid ${border.color.default};
        }
      `}
    `}
`;

const StyledTextContainer = styled(Box)`
  flex: 1;
  overflow: hidden;
`;

const StyledText = styled(Text.Small)`
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
      font-weight: ${font.weight.medium};
      flex: 1;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    `}
`;

type MenuProps = {
  avatar: React.ReactElement;
  subtitle?: string;
  title?: string;
  onClick?: () => void;
  isLoading?: boolean;
};

const Menu = ({ avatar: Avatar, subtitle, title, onClick }: MenuProps) => {
  const hasAction = Boolean(onClick);

  return (
    <StyledMenu hasAction={hasAction} onClick={onClick}>
      {Avatar}

      <StyledTextContainer>
        {title &&  <StyledText>{title}</StyledText>}
        {subtitle && <Text.Small color="deep">{subtitle}</Text.Small>}
      </StyledTextContainer>

      {hasAction && <Icon as={ArrowRight} size="large" fill="vibin" />}
    </StyledMenu>
  );
};

export default Menu;
