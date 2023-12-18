import React from 'react';
import styled, { css } from 'styled-components';
import { MenuMore } from '@gympass/yoga-icons';
import { Menu as YogaMenu } from '@gympass/yoga';
import { SwitcherActionsProps } from './Switcher';
import Icon from '../../../Icon';
import Box from '../../../Box';

const StyledAction = styled(Box)`
  ${({
    theme: {
      yoga: {
        components: {
          navigationmenu: { backgroundColor, border, height, width },
        },
      },
    },
  }) =>
    css`
      transition: background-color 300ms ease-in-out;

      display: flex;
      align-items: center;
      justify-content: center;
      width: ${width.xxlarge}px;
      height: ${height.xxlarge}px;
      border-radius: ${border.radius.circle}px;

      :hover,
      &:focus {
        cursor: pointer;
        background-color: ${backgroundColor.hover};
      }
    `}
`;

type ActionsProps = {
  actions: SwitcherActionsProps[];
  sideOffset: number;
};

const Actions = ({ actions, sideOffset }: ActionsProps) => {
  return (
    <YogaMenu onMouseHover={false}>
      <YogaMenu.Action>
        <StyledAction>
          <Icon as={MenuMore} size="medium" fill="vibin" />
        </StyledAction>
      </YogaMenu.Action>

      <YogaMenu.List side="right" sideOffset={sideOffset} zIndex="10">
        {actions.map(({ id, label, onClick }) => (
          <YogaMenu.Item key={id} onClick={onClick}>
            {label}
          </YogaMenu.Item>
        ))}
      </YogaMenu.List>
    </YogaMenu>
  );
};

export default Actions;
