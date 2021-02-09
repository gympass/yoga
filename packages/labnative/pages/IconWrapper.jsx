import React from 'react';
import { View } from 'react-native';
import { IconWrapper } from '@gympass/yoga';
import { Close } from '@gympass/yoga-icons';
import { DocTitle } from '../components';

const IconWrapperPage = () => (
  <View>
    <DocTitle>IconWrapper</DocTitle>
    <IconWrapper as={Close} fill="stamina" />
  </View>
);

export default IconWrapperPage;
