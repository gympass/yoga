import React from 'react';
import { Icon } from '@gympass/yoga';

import * as Styles from './Item.styles';

export type ItemProps = {
  children?: React.ReactNode;
  expanded?: boolean;
  icon?: React.ReactElement<typeof Icon>;
  label: string;
  tag?: string;
  wrapper: React.FunctionComponent<any>;
};

const Item = ({
  children,
  expanded = false,
  icon: Icon,
  label,
  tag,
  wrapper: Wrapper,
}: ItemProps) => {
  return (
    <>
      <Styles.Item>
        <Wrapper>
          <Styles.Content>
            {Icon}

            <Styles.Text numberOfLines={1}>{label}</Styles.Text>

            {tag && <Styles.Tag>{tag}</Styles.Tag>}
          </Styles.Content>
        </Wrapper>
      </Styles.Item>
      {expanded && children}
    </>
  );
};

export default Item;
