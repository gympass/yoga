import React from 'react';
import { Menu as YogaMenu } from '@gympass/yoga';
import { MenuMore } from '@gympass/yoga-icons';
import styled, { css } from 'styled-components';

import Icon from '../../../Icon';

const StyledAction = styled.div<React.PropsWithChildren>`
  ${({
    theme: {
      yoga: {
        components: {
          navigationmenu: { backgroundColor, border, height, width, icon },
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
      border-radius: ${border.radius.action}px;

      svg {
        fill: ${icon.fill.actions};
      }

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
  sideOffset?: number;
  zIndex?: number;
};

function Actions({ actions, sideOffset, zIndex }: ActionsProps) {
  if (!actions?.length) {
    return null;
  }

  return (
    <YogaMenu onMouseHover={false}>
      <YogaMenu.Action>
        <StyledAction>
          <Icon as={MenuMore} size="medium" />
        </StyledAction>
      </YogaMenu.Action>

      <YogaMenu.List
        side="right"
        sideOffset={sideOffset}
        zIndex={`${zIndex ?? 2}`}
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
