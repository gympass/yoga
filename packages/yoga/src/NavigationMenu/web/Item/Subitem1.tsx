import React from 'react';
import { Text } from '@gympass/yoga';

import * as Styles from './Subitem1.styles';

export type SubitemProps = {
  label: string;
  wrapper: React.FunctionComponent<any>;
};

const Subitem = ({ wrapper: Wrapper, label }: SubitemProps) => {
  return (
    <Styles.Subitem>
      <Wrapper>
        <Styles.Content>
          <Text.Small flex={1} numberOfLines={1} color="deep">
            {label}
          </Text.Small>
        </Styles.Content>
      </Wrapper>
    </Styles.Subitem>
  );
};

export default Subitem;
