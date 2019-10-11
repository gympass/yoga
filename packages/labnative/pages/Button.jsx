import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ThemeProvider, Button } from '@gympass/design-system';

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

const ButtonPage = () => {
  return (
    <ThemeProvider>
      <View style={styles.MainContainer}>
        <Button>Gympass Button</Button>
      </View>
    </ThemeProvider>
  );
};

const ButtonNavigation = createStackNavigator({
  First: {
    screen: ButtonPage,
    navigationOptions: ({ navigation }) => ({
      title: 'ButtonPage',
      headerLeft: <NavigationDrawer navigationProps={navigation} />,
      headerStyle: { backgroundColor: '#FF9800' },
      headerTintColor: '#fff',
    }),
  },
});

export { ButtonPage as default, ButtonNavigation };
