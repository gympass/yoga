import React from 'react';
import { Icon } from '@gympass/yoga';

import * as Styles from './styles';

export type BottomItemProps = {
  active?: boolean;
  icon?: React.ReactNode;
  label: string;
  wrapper: React.FunctionComponent<any>;
};

const BottomItem = ({
  active = false,
  icon,
  label,
  wrapper: Wrapper,
}: BottomItemProps) => {
  return (
    <Styles.Item isActive={active}>
      <Wrapper>
        <Styles.TextContainer>
          <Icon as={icon} />

          <Styles.Text>{label}</Styles.Text>
        </Styles.TextContainer>
      </Wrapper>
    </Styles.Item>
  );
};

export default BottomItem;
