import React, { useState } from 'react';
import { View } from 'react-native';
import { Checkbox } from '@gympass/design-system';

const CheckboxPage = () => {
  const [checked, setChecked] = useState(true);
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        paddingTop: 80,
        paddingBottom: 80,
      }}
    >
      <Checkbox.Switch disabled />
      <Checkbox.Switch checked={false} />
      <Checkbox.Switch checked={true} />
      <Checkbox.Switch checked={checked} onPress={() => setChecked(!checked)} />
    </View>
  );
};

export default CheckboxPage;
