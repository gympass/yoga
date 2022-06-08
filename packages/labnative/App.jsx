import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Drawer from './core/Drawer';

const AppComponent = () => (
  <SafeAreaProvider>
    <NavigationContainer>
      <Drawer />
    </NavigationContainer>
  </SafeAreaProvider>
);

export default AppComponent;
