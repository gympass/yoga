import React, { useState } from 'react';
import { StyleSheet, View, Picker, Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import { ThemeProvider } from '@gympass/design-system';

import NavigationDrawer from './components/NavigationDrawer';
import * as Pages from './pages';

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
      <View
        style={{
          height: Platform.OS === 'ios' ? 200 : 20,
        }}
      >
        <Picker
          selectedValue={themed}
          style={{ width: '100%' }}
          onValueChange={theme => setThemed(theme)}
        >
          <Picker.Item label="End User" value="endUser" />
          <Picker.Item label="Corp" value="corp" />
          <Picker.Item label="Gyms" value="gyms" />
        </Picker>
      </View>
      <View style={styles.MainContainer} {...props} />
    </ThemeProvider>
  );
};

const drawerOptions = {};

Object.entries(Pages).map(([name, Page]) => {
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

const AppPages = createDrawerNavigator(drawerOptions, {
  contentOptions: {
    activeTintColor: 'black',
  },
});

export default createAppContainer(AppPages);
