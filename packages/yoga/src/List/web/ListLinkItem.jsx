import React from 'react';
import styled from 'styled-components';

const StyledItem = styled.a`
  ${({
    theme: {
      yoga: {
        components: { list },
      },
    },
  }) => `
    padding:
      ${list.listItem.padding.top}px
      ${list.listItem.padding.right}px
      ${list.listItem.padding.bottom}px
      ${list.listItem.padding.left}px;
  `}

  display: inline-block;
  width: 100%;
  height: 100%;

  text-decoration: none;
`;

const ListItem = ({ ...rest }) => (
  <li>
    <StyledItem {...rest} />
  </li>
);

ListItem.displayName = 'List.Item';

export default ListItem;
