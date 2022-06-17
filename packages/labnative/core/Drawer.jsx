import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import * as Pages from '../pages';
import NavigationDrawer from './NavigationDrawer';
import CenteredView from './CenteredView';

const Drawer = createDrawerNavigator();

function DrawerHeader(toggleDrawer) {
  return <NavigationDrawer toggleDrawer={toggleDrawer} />;
}

function DrawerComponent() {
  return (
    <Drawer.Navigator>
      {Object.keys(Pages).map(key => (
        <Drawer.Screen
          key={key}
          name={key}
          options={({ navigation: { toggleDrawer } }) => ({
            title: key,
            headerLeft: () => DrawerHeader(toggleDrawer),
          })}
        >
          {() => {
            const Page = Pages[key];

            return (
              <CenteredView>
                <Page />
              </CenteredView>
            );
          }}
        </Drawer.Screen>
      ))}
    </Drawer.Navigator>
  );
}

export default DrawerComponent;
