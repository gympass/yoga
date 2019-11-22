import React from 'react';
import styled from 'styled-components';

const StyledItem = styled.li(
  ({
    theme: {
      yoga: {
        components: { list },
      },
    },
  }) => `
  padding: ${list.listItem.padding.top}px ${list.listItem.padding.right}px ${list.listItem.padding.bottom}px ${list.listItem.padding.left}px;
`,
);

const ListItem = ({ ...rest }) => <StyledItem {...rest} />;

ListItem.displayName = 'List.Item';

export default ListItem;
