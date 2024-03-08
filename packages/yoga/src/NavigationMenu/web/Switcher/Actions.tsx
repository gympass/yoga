import { Menu as YogaMenu } from '@gympass/yoga';
import { MenuMore } from '@gympass/yoga-icons';
import React from 'react';
import styled, { css } from 'styled-components';

import Icon from '../../../Icon';
import { SwitcherActionsProps } from './Switcher';

const StyledAction = styled.div`
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

type SwitcherActionsProps = {
  id: string;
  label: string;
  onClick: () => void;
};

export type ActionsProps = {
  actions?: SwitcherActionsProps[];
  sideOffset: number;
  $zIndex?: number;
};

function Actions({ actions, sideOffset, $zIndex }: ActionsProps) {
  if (!actions?.length) {
    return null;
  }

  return (
    <YogaMenu onMouseHover={false}>
      <YogaMenu.Action>
        <StyledAction>
          <Icon as={MenuMore} size="medium" fill="vibin" />
        </StyledAction>
      </YogaMenu.Action>

      <YogaMenu.List
        side="right"
        sideOffset={sideOffset}
        zIndex={`${$zIndex ?? 2}`}
      >
        {actions.map(({ id, label, onClick }) => (
          <YogaMenu.Item key={id} onClick={onClick}>
            {label}
          </YogaMenu.Item>
        ))}
      </YogaMenu.List>
    </YogaMenu>
  );
}

export default Actions;
