import React from 'react';
import { View } from 'react-native';
import { Input } from '@gympass/yoga';

const InputPage = () => (
  <View>
    <Input label="Find an activity" />
    <Input
      error="deu ruim"
      label="Find an activity"
      helper="Helper text"
      maxLength={20}
    />
    <Input
      disabled
      value="alo"
      label="Find an activity"
      helper="Helper text"
      maxLength={20}
    />
  </View>
);

export default InputPage;
