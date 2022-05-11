import React from 'react';
import { Item as MenuItemRoot } from '@radix-ui/react-dropdown-menu';
import { oneOfType, func, node } from 'prop-types';
import styled from 'styled-components';

const StyledMenuItem = styled(MenuItemRoot)`
  ${({
    theme: {
      yoga: {
        colors,
        spacing,
        components: { menu },
      },
    },
  }) => `
    width: 100%;
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-right: auto;
    padding: ${menu.padding.vertical}px ${menu.padding.horizontal}px;

    svg {
      margin-right: ${spacing.xsmall}px;
    }

    &:focus {
      outline: none;
      background: ${colors.clear};
    }

    &:hover {
      background: ${colors.clear};
      &:first-child {
        border-top-left-radius: ${menu.border.radius}px;
        border-top-right-radius: ${menu.border.radius}px;
      }
      &:last-child {
        border-bottom-left-radius: ${menu.border.radius}px;
        border-bottom-right-radius: ${menu.border.radius}px;
      }
    }
  `}
`;

const MenuItem = ({ icon: Icon, children, ...rest }) => {
  return (
    <StyledMenuItem {...rest}>
      {Icon && <Icon width={20} height={20} />}
      {children}
    </StyledMenuItem>
  );
};

MenuItem.propTypes = {
  /** The icon of menu item */
  icon: oneOfType([node, func]),

  /** The children necessary */
  children: node.isRequired,
};

MenuItem.defaultProps = {
  icon: undefined,
};

MenuItem.displayName = 'Menu.Item';

export default MenuItem;
