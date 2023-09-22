import React from 'react';
import { Icon, Menu as YogaMenu } from '@gympass/yoga';
import { MenuMore } from '@gympass/yoga-icons';
import { SwitcherActionsProps } from './Switcher';

import * as Styles from './Actions.styles';

type ActionsProps = {
  actions: SwitcherActionsProps[];
  sideOffset: string;
};

const Actions = ({ actions, sideOffset }: ActionsProps) => {
  return (
    <YogaMenu onMouseHover={false}>
      <YogaMenu.Action>
        <Styles.Action>
          <Icon as={MenuMore} size="medium" fill="vibin" />
        </Styles.Action>
      </YogaMenu.Action>

      <YogaMenu.List side="right" sideOffset={sideOffset} zIndex="100">
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
