import React from 'react';
import Icon from '../../../Icon';

import * as Styles from './styles';

type ItemProps = {
  active?: boolean;
  collapsed?: boolean;
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
  collapsed = false,
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
      <Styles.StyledItem isActive={active} isCollapsed={collapsed} isResponsive={responsive}>
        <Wrapper>
          <Styles.StyledTextContainer>
            {Icon}

            {!collapsed && (
              <>
                <Styles.StyledText>{label}</Styles.StyledText>
                {tag && <Styles.StyledTag>{tag}</Styles.StyledTag>}
              </>
            )}
          </Styles.StyledTextContainer>
        </Wrapper>
      </Styles.StyledItem>
      {!collapsed && expanded && children}
    </>
  );
};

export default Item;
