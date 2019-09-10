import React from 'react';
import {View} from 'react-native';

import {Button} from '@gympass/design-system';

const App = () => {
  return (
    <View
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
      }}>
      <Button />
    </View>
  );
};

export default App;
