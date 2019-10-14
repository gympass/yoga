import React, { useState } from 'react';
import { StyleSheet, View, Picker, ScrollView } from 'react-native';
import { createAppContainer } from 'react-navigation';
import {
  createDrawerNavigator,
  DrawerNavigatorItems,
} from 'react-navigation-drawer';

import { createStackNavigator } from 'react-navigation-stack';

import * as Pages from './pages';
import { ThemeProvider } from '@gympass/design-system';
import NavigationDrawer from './components/NavigationDrawer';

import { ThemeConsumer } from 'styled-components';

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const CenteredView = props => {
  const [themed, setThemed] = useState('endUser');
  return (
    <ThemeProvider theme={themed}>
      <Picker
        selectedValue={themed}
        style={{ height: 50, width: '100%' }}
        onValueChange={theme => setThemed(theme)}
      >
        <Picker.Item label="End User" value="endUser" />
        <Picker.Item label="Corp" value="corp" />
        <Picker.Item label="Gyms" value="gyms" />
      </Picker>
      <View style={styles.MainContainer} {...props} />
    </ThemeProvider>
  );
};

const drawerOptions = {};

Object.entries(Pages).map(([name, Page]) => {
  const navigator = createStackNavigator({
    [name]: {
      screen: () => (
        <CenteredView>
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

const AppPages = createDrawerNavigator(drawerOptions, {
  contentComponent: props => (
    <ThemeProvider>
      <ThemeConsumer>
        {theme => (
          <DrawerNavigatorItems
            {...props}
            activeTintColor={theme.colors.primary}
          />
        )}
      </ThemeConsumer>
    </ThemeProvider>
  ),
});

export default createAppContainer(AppPages);
