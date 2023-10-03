import React from 'react';
import Menu from './Menu';
import Switcher from './Switcher';
import { Item, Subitem } from './Item';
import { BottomItems, BottomItem } from './BottomItems';

import * as Styles from './NavigationMenu.styles';

type NavigationMenuProps = {
  children: React.ReactNode;
  openOnMobile?: boolean;
  responsive?: boolean;
};

const NavigationMenu = ({
  children,
  openOnMobile = false,
  responsive = true,
}: NavigationMenuProps) => {
  return (
    <Styles.NavigationMenu
      isOpenOnMobile={openOnMobile}
      isResponsive={responsive}
    >
      {children}
    </Styles.NavigationMenu>
  );
};

NavigationMenu.Header = Styles.Header;
NavigationMenu.Menu = Menu;
NavigationMenu.Switcher = Switcher;
NavigationMenu.Items = Styles.Items;
NavigationMenu.ItemsGroup = Styles.ItemsGroup;
NavigationMenu.Item = Item;
NavigationMenu.Subitem = Subitem;
NavigationMenu.BottomItems = BottomItems;
NavigationMenu.BottomItem = BottomItem;
NavigationMenu.Footer = Styles.Footer;

export default NavigationMenu;
