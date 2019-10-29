import React from 'react';
import styled from 'styled-components';

const StyledItem = styled.li`
  ${({
    theme: {
      components: {
        list: {
          listItem: {
            padding: {
              top: paddingTop,
              right: paddingRight,
              bottom: paddingBottom,
              left: paddingLeft,
            },
          },
        },
      },
    },
  }) => `
      padding: ${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px;
    }
  }
`}
`;

const Item = ({ ...rest }) => <StyledItem {...rest} />;

Item.displayName = 'Item';

export default Item;
