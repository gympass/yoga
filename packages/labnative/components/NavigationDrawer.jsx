import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import hamburguer from '../assets/images/drawer.png';

const NavigationDrawer = ({ navigationProps }) => (
  <View style={{ flexDirection: 'row' }}>
    <TouchableOpacity onPress={navigationProps.toggleDrawer}>
      <Image
        source={hamburguer}
        style={{ width: 25, height: 25, marginLeft: 5 }}
      />
    </TouchableOpacity>
  </View>
);

export default NavigationDrawer;
