import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { Content as MenuListRoot } from '@radix-ui/react-dropdown-menu';
import { node, string } from 'prop-types';

import Box from '../../Box';

const StyledMenuList = styled(MenuListRoot)`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${({
    theme: {
      yoga: {
        components: { menu },
      },
    },
  }) => {
    return `
    margin: ${menu.margin.default}px 0;
    padding: 0;
    min-width: ${menu.width.min}px;
    max-width: ${menu.width.max}px;
    border-radius: ${menu.border.radius}px;

    background-color: ${menu.backgroundColor.white};
    box-shadow: 0px 2px 6px rgba(152, 152, 166, 0.25);
  `;
  }}
`;

const MenuList = forwardRef(({ children, align }, ref) => {
  return (
    <StyledMenuList asChild sideOffset={2} alignOffset={-5} align={align}>
      <Box as="ul" ref={ref}>
        {children}
      </Box>
    </StyledMenuList>
  );
});

MenuList.propTypes = {
  /** The children necessary */
  children: node.isRequired,
  /** Align Menu is a alignement that menu will appear on the screen | start | center | end   */
  align: string,
};

MenuList.defaultProps = {
  align: 'start',
};

MenuList.displayName = 'Menu.List';

export default MenuList;
