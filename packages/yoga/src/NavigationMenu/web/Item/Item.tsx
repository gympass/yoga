import React from 'react';
import { Icon } from '@gympass/yoga';

import * as Styles from './styles';

export type ItemProps = {
  active?: boolean;
  children?: React.ReactNode;
  expanded?: boolean;
  icon?: React.ReactElement<typeof Icon>;
  label: string;
  responsive?: boolean;
  tag?: string;
  wrapper: React.FunctionComponent<any>;
};

const Item = ({
  active = false,
  children,
  expanded = false,
  icon: Icon,
  label,
  responsive = true,
  tag,
  wrapper: Wrapper,
}: ItemProps) => {
  return (
    <>
      <Styles.Item isActive={active} isResponsive={responsive}>
        <Wrapper>
          <Styles.TextContainer>
            {Icon}

            <Styles.Text>{label}</Styles.Text>

            {tag && <Styles.Tag>{tag}</Styles.Tag>}
          </Styles.TextContainer>
        </Wrapper>
      </Styles.Item>
      {expanded && children}
    </>
  );
};

export default Item;
