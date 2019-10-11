import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

import { HomeNavigation } from './pages/Home';
import { ButtonNavigation } from './pages/Button';

const AppPages = createDrawerNavigator({
  HomePage: {
    screen: HomeNavigation,
    navigationOptions: {
      drawerLabel: 'HomePage',
    },
  },
  ButtonPage: {
    screen: ButtonNavigation,
    navigationOptions: {
      drawerLabel: 'ButtonPage',
    },
  },
});

export default createAppContainer(AppPages);
