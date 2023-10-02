import React from 'react';
import { ArrowRight } from '@gympass/yoga-icons';
import { Icon, Text, Skeleton } from '@gympass/yoga';

import * as Styles from './Menu.styles';

export type MenuProps = {
  avatar: React.ReactElement;
  subtitle?: string;
  title: string;
  onClick?: () => void;
};

const Menu = ({ avatar: Avatar, subtitle, title, onClick }: MenuProps) => {
  const hasAction = Boolean(onClick);

  return (
    <Styles.Menu hasAction={hasAction} onClick={onClick}>
      {Avatar}

      <Styles.TextContainer>
        <Styles.Text>
          {title || <Skeleton type="text" variant="body2" width="100%" />}
        </Styles.Text>

        <Text.Small color="deep">{subtitle}</Text.Small>
      </Styles.TextContainer>

      {hasAction && <Icon as={ArrowRight} size="large" fill="vibin" />}
    </Styles.Menu>
  );
};

export default Menu;
