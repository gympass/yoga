import React from 'react';
import styled from 'styled-components';

const StyledLinkItem = styled.a`
  display: inline-block;

  width: 100%;
  height: 100%;

  box-sizing: border-box;

  text-decoration: none;

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
`;

const Linkitem = ({ ...rest }) => (
  <li>
    <StyledLinkItem {...rest} />
  </li>
);

Linkitem.displayName = 'List.LinkItem';

export default Linkitem;
