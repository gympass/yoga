import React, { useState } from 'react';
import { View } from 'react-native';
import { RadioGroup } from '@gympass/yoga';

import { DocTitle } from '../components';

const RadioGroupPage = () => {
  const [selectedValue, setSelectedValue] = useState('24h');
  const [category, setCategory] = useState('Gyms');

  return (
    <View>
      <DocTitle>RadioGroup.Button</DocTitle>

      <RadioGroup
        selectedValue={selectedValue}
        onChange={({ value }) => setSelectedValue(value)}
      >
        <RadioGroup.Button value="24h">24 hours</RadioGroup.Button>
        <RadioGroup.Button value="now">Open now</RadioGroup.Button>
        <RadioGroup.Button value="sundays">At Sundays</RadioGroup.Button>
      </RadioGroup>

      <DocTitle>RadioGroup.Radio</DocTitle>

      <RadioGroup
        selectedValue={category}
        onChange={({ value }) => setCategory(value)}
        style={{
          paddingBottom: 40,
        }}
      >
        <RadioGroup.Radio
          style={{
            marginRight: 4,
          }}
          value="Gyms"
        />
        <RadioGroup.Radio value="Classes" />
      </RadioGroup>
    </View>
  );
};

export default RadioGroupPage;
