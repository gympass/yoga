import React from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import NavigationDrawer from './NavigationDrawer';
import CenteredView from './CenteredView';
import * as Pages from '../pages';

const drawerOptions = {};

Object.entries(Pages).forEach(([name, Page]) => {
  const navigator = createStackNavigator({
    [name]: {
      screen: props => (
        <CenteredView {...props}>
          <Page />
        </CenteredView>
      ),
      navigationOptions: ({ navigation: { toggleDrawer } }) => ({
        title: name,
        headerLeft: <NavigationDrawer toggleDrawer={toggleDrawer} />,
      }),
    },
  });

  drawerOptions[name] = {
    screen: navigator,
    navigationOptions: {
      drawerLabel: name,
    },
  };
});

const Drawer = createDrawerNavigator(drawerOptions, {
  initialRouteName: 'Rating', // add your working component here
  contentOptions: {
    activeTintColor: 'black',
  },
});

export default Drawer;
