import React from 'react';
import styled from 'styled-components';
import { Content as MenuListRoot } from '@radix-ui/react-dropdown-menu';
import { node } from 'prop-types';

const StyledMenu = styled(MenuListRoot)`
  ${({
    theme: {
      yoga: {
        colors,
        components: { menu },
      },
    },
  }) => `
    background: ${colors.white};
    border-radius: ${menu.border.radius}px;
    margin: ${menu.margin.default}px 0; 
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: ${menu.width.min}px;
    max-width: ${menu.width.max}px;
    box-shadow: 0px 2px 6px rgba(152, 152, 166, 0.25);
  `}
`;

const MenuList = ({ children }) => {
  return <StyledMenu>{children}</StyledMenu>;
};

MenuList.propTypes = {
  /** The children necessary */
  children: node.isRequired,
};

MenuList.displayName = 'Menu.List';

export default MenuList;
