import React from 'react';
import { Root as MenuRoot } from '@radix-ui/react-dropdown-menu';
import { node } from 'prop-types';

const Menu = ({ children }) => <MenuRoot modal={false}>{children}</MenuRoot>;

Menu.propTypes = {
  /** The children necessary */
  children: node.isRequired,
};

Menu.displayName = 'Menu';

export default Menu;
