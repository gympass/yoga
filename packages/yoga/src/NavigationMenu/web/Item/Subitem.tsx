import React from 'react';

import * as Styles from './styles';

export type SubitemProps = {
  active?: boolean;
  label: string;
  wrapper: React.FunctionComponent<any>;
};

const Subitem = ({ active = false, label, wrapper: Wrapper }: SubitemProps) => {
  return (
    <Styles.StyledItem isActive={active}>
      <Wrapper>
        <Styles.StyledTextContainer isSubItem>
          <Styles.StyledText>{label}</Styles.StyledText>
        </Styles.StyledTextContainer>
      </Wrapper>
    </Styles.StyledItem>
  );
};

export default Subitem;
