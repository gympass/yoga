import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { ThemeProvider } from '@gympass/design-system';

import { createStackNavigator } from 'react-navigation-stack';
import NavigationDrawer from '../components/NavigationDrawer';

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
    marginTop: 50,
    justifyContent: 'center',
  },
});

const HomePage = () => {
  return (
    <ThemeProvider>
      <View style={styles.MainContainer}>
        <Text>Hello Design System!</Text>
      </View>
    </ThemeProvider>
  );
};

const HomeNavigation = createStackNavigator({
  First: {
    screen: HomePage,
    navigationOptions: ({ navigation }) => ({
      title: 'HomePage',
      headerLeft: <NavigationDrawer navigationProps={navigation} />,
      headerStyle: { backgroundColor: '#FF9800' },
      headerTintColor: '#fff',
    }),
  },
});

export { HomePage as default, HomeNavigation };
