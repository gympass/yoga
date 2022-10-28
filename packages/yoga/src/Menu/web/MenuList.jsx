import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { Content as MenuListRoot, Portal } from '@radix-ui/react-dropdown-menu';
import { node, number, oneOf } from 'prop-types';

import Box from '../../Box';

const StyledMenuList = styled(MenuListRoot)`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${({
    theme: {
      yoga: {
        components: { menu },
        elevations,
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
    box-shadow: ${elevations.small}
  `;
  }}
`;

const MenuList = forwardRef(
  ({ children, align, alignOffset, side, sideOffset }, ref) => {
    return (
      <Portal>
        <StyledMenuList
          asChild
          side={side}
          sideOffset={sideOffset}
          align={align}
          alignOffset={alignOffset}
        >
          <Box as="ul" m="zero" ref={ref}>
            {children}
          </Box>
        </StyledMenuList>
      </Portal>
    );
  },
);

MenuList.propTypes = {
  /** Component to be rendered inside the Menu.List container */
  children: node.isRequired,

  /** Setup the vertical placement relative to Menu.Action component */
  align: oneOf(['start', 'center', 'end']),

  /** Add vertical space between the Menu.Action and the Menu.List */
  alignOffset: number,

  /** Setup the horizontal placement relative to Menu.Action component */
  side: oneOf(['top', 'right', 'bottom', 'left']),

  /** Add horizontal space between the Menu.Action and the Menu.List */
  sideOffset: number,
};

MenuList.defaultProps = {
  align: 'start',
  alignOffset: 0,
  side: 'bottom',
  sideOffset: 4,
};

MenuList.displayName = 'Menu.List';

export default MenuList;
