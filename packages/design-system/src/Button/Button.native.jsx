import React from 'react';
import { View, Button } from 'react-native';
import tokens from '@gympass/tokens';

const NativeButton = ({ text = 'Foo' }) => (
  <View>
    <Button title={`Press me, ${text}`} color={tokens.colors.madrid.crossfit} />
  </View>
);

export default NativeButton;
