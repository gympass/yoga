import Menu from './web/Menu';

import MenuAction from './web/MenuAction';
import MenuList from './web/MenuList';
import MenuItem from './web/MenuItem';

const ExportMenu = Object.assign(Menu, {
  Action: MenuAction,
  List: MenuList,
  Item: MenuItem,
});

export default ExportMenu;
