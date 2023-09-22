import React from 'react';
import { Box, Text, Skeleton, Icon, Avatar } from '@gympass/yoga';
import Actions from './Actions';

import * as Styles from './Switcher.styles';

export type SwitcherActionsProps = {
  id: string;
  label: string;
  onClick: () => void;
};

export type SwitcherProps = {
  actions?: SwitcherActionsProps[];
  avatar: React.ReactElement<typeof Icon | typeof Avatar>;
  fill?: string;
  sideOffset?: string;
  subTitle?: string;
  title: string;
};

const Switcher = ({
  actions,
  avatar: Avatar,
  fill = 'transparent',
  sideOffset = '4',
  subTitle,
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

        <Text.Tiny color="deep">{subTitle}</Text.Tiny>
      </Box>

      {hasActions && <Actions actions={actions} sideOffset={sideOffset} />}
    </Styles.Switcher>
  );
};

export default Switcher;
