import React from 'react';
import { View } from 'react-native';
import { Icon } from '@gympass/yoga';
import { Close } from '@gympass/yoga-icons';
import { DocTitle } from '../components';

const IconPage = () => (
  <View>
    <DocTitle>Icon</DocTitle>
    <Icon as={Close} fill="stamina" />
  </View>
);

export default IconPage;
