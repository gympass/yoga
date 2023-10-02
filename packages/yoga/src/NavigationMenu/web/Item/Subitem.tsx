import React from 'react';

import * as Styles from './styles';

export type SubitemProps = {
  active?: boolean;
  label: string;
  wrapper: React.FunctionComponent<any>;
};

const Subitem = ({ active = false, label, wrapper: Wrapper }: SubitemProps) => {
  return (
    <Styles.Item isActive={active}>
      <Wrapper>
        <Styles.TextContainer isSubItem>
          <Styles.Text>{label}</Styles.Text>
        </Styles.TextContainer>
      </Wrapper>
    </Styles.Item>
  );
};

export default Subitem;
