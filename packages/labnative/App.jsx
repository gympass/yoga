import React from 'react';
import { View } from 'react-native';
import { Button, ThemeProvider } from '@gympass/design-system';

const App = () => {
  return (
    <ThemeProvider>
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100%',
        }}
      >
        <Button />
      </View>
    </ThemeProvider>
  );
};

export default App;
