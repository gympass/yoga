import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Slider from 'react-native-slider';

const SliderComponent = () => {
  const [value, setValue] = useState(0);
  return (
    <View>
      <Slider value={value} onValueChange={value => setValue(value)} />
      <Text>Value: {value}</Text>
    </View>
  );
};

export default SliderComponent;
