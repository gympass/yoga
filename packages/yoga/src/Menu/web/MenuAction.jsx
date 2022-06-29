import React from 'react';
import { Trigger as MenuActionRoot } from '@radix-ui/react-dropdown-menu';
import { node } from 'prop-types';

const MenuAction = ({ children }) => (
  <MenuActionRoot asChild>{children}</MenuActionRoot>
);

MenuAction.propTypes = {
  children: node.isRequired,
};

MenuAction.displayName = 'Menu.Action';

export default MenuAction;
