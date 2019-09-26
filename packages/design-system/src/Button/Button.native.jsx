import React, { useContext } from 'react';
import { View, Button } from 'react-native';
import { ThemeContext } from '../ThemeProvider';

const NativeButton = ({ text = 'Foo' }) => {
  const theme = useContext(ThemeContext);
  return (
    <View>
      <Button title={`Press me, ${text}`} color={theme.colors.primary} />
    </View>
  );
};

export default NativeButton;
