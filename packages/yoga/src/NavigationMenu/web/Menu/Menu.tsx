import React from 'react';
import { ArrowRight } from '@gympass/yoga-icons';
import { Icon, Box, Text, Skeleton } from '@gympass/yoga';

import * as Styles from './Menu.styles';

export type MenuProps = {
  avatar: React.ReactElement;
  subTitle?: string;
  title: string;
  onClick?: () => void;
};

const Menu = ({ avatar: Avatar, subTitle, title, onClick }: MenuProps) => {
  const hasAction = Boolean(onClick);

  return (
    <Styles.Menu hasAction={hasAction} onClick={onClick}>
      {Avatar}

      <Box flex={1}>
        <Text.Small fw="medium" title={title} numberOfLines={1}>
          {title || <Skeleton type="text" variant="body2" width="100%" />}
        </Text.Small>

        <Text.Small color="deep">{subTitle}</Text.Small>
      </Box>

      {hasAction && <Icon as={ArrowRight} size="large" fill="vibin" />}
    </Styles.Menu>
  );
};

export default Menu;
