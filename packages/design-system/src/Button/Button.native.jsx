import React from 'react';
import { View, Button } from 'react-native';

const NativeButton = ({ text = 'Foo' }) => (
  <View>
    <Button title={`Press me, ${text}`} color="#f194ff" />
  </View>
);

export default NativeButton;
