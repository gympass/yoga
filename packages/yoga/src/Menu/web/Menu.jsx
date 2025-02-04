import React from 'react';
import { Root as MenuRoot } from '@radix-ui/react-dropdown-menu';
import { bool, node } from 'prop-types';

const Menu = ({ children, onMouseHover = true }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  function handleOpenMenu() {
    setIsOpen(!isOpen);
  }

  if (!onMouseHover) {
    return (
      <MenuRoot sideOffset={5} modal={false}>
        {children}
      </MenuRoot>
    );
  }

  return (
    <div onMouseEnter={handleOpenMenu} onMouseLeave={handleOpenMenu}>
      <MenuRoot sideOffset={5} modal={false} defaultOpen open={isOpen}>
        {children}
      </MenuRoot>
    </div>
  );
};

Menu.propTypes = {
  children: node.isRequired,
  /** when mouse hover menu open as default is true */
  onMouseHover: bool,
};

Menu.displayName = 'Menu';

export default Menu;
