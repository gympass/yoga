import React from 'react';
import Menu from './Menu';
import Switcher from './Switcher';
import { Item, SubItem } from './Item';

import * as Styles from './NavigationMenu.styles';

type NavigationMenuProps = {
  children: React.ReactNode;
};

function NavigationMenu({ children }: NavigationMenuProps): JSX.Element {
  return <Styles.NavigationMenu>{children}</Styles.NavigationMenu>;
}

NavigationMenu.Header = Styles.Header;
NavigationMenu.Menu = Menu;
NavigationMenu.Switcher = Switcher;
NavigationMenu.Items = Styles.Items;
NavigationMenu.ItemsGroup = Styles.ItemsGroup;
NavigationMenu.Item = Item;
NavigationMenu.SubItem = SubItem;
NavigationMenu.Footer = Styles.Footer;

export default NavigationMenu;
