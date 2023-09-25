import React from 'react';
import { Box, Text, Skeleton } from '@gympass/yoga';
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
  sideOffset?: string;
  subtitle?: string;
  title: string;
};

const Switcher = ({
  actions,
  avatar: Avatar,
  fill = 'transparent',
  sideOffset = '4',
  subtitle,
  title,
}: SwitcherProps) => {
  const hasActions = actions?.length;

  return (
    <Styles.Switcher fill={fill}>
      {Avatar}

      <Box flex={1}>
        <Text.Small fw="medium" numberOfLines={1} title={title}>
          {title || <Skeleton type="text" variant="body2" width="100%" />}
        </Text.Small>

        <Text.Tiny color="deep">{subtitle}</Text.Tiny>
      </Box>

      {hasActions && <Actions actions={actions} sideOffset={sideOffset} />}
    </Styles.Switcher>
  );
};

export default Switcher;
