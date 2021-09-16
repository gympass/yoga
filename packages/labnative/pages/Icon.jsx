import React from 'react';
import { View } from 'react-native';
import { Icon } from '@gympass/yoga';
import { Close } from '@gympass/yoga-icons';
import { DocTitle } from '../components';

const IconPage = () => (
  <View>
    <DocTitle>Icon</DocTitle>
    <Icon as={Close} size="huge" m="medium" fill="feedback.success.dark" />
  </View>
);

export default IconPage;
