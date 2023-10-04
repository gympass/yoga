import React from 'react';
import { Text, Skeleton } from '@gympass/yoga';
import Actions from './Actions';

import * as Styles from './Switcher.styles';

export type SwitcherActionsProps = {
  id: string;
  label: string;
  onClick: () => void;
};

export type SwitcherProps = {
  actions?: SwitcherActionsProps[];
  avatar: React.ReactElement;
  fill?: string;
  sideOffset?: number;
  subtitle?: string;
  title: string;
};

const Switcher = ({
  actions,
  avatar: Avatar,
  fill = 'transparent',
  sideOffset = 36,
  subtitle,
  title,
}: SwitcherProps) => {
  const hasActions = actions?.length;

  return (
    <Styles.Switcher fill={fill}>
      {Avatar}

      <Styles.TextContainer>
        <Styles.Text>
          {title || <Skeleton type="text" variant="body2" width="100%" />}
        </Styles.Text>

        <Text.Tiny color="deep">{subtitle}</Text.Tiny>
      </Styles.TextContainer>

      {hasActions && <Actions actions={actions} sideOffset={sideOffset} />}
    </Styles.Switcher>
  );
};

export default Switcher;
