import React from 'react';
import { Icon } from '@gympass/yoga';

import * as Styles from './Item.styles';

export type ItemProps = {
  expanded?: boolean;
  icon?: React.ReactElement<typeof Icon>;
  wrapper: React.FunctionComponent<any>;
  label: string;
  tag?: string;
  children?: React.ReactNode;
};

const Item = ({
  expanded = false,
  icon: Icon,
  wrapper: Wrapper,
  label,
  tag,
  children,
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
