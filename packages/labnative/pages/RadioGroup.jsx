import React, { useState } from 'react';
import { View } from 'react-native';
import { RadioGroup } from '@gympass/yoga';

const RadioGroupPage = () => {
  const [selectedValue, setSelectedValue] = useState('24h');
  const [category, setCategory] = useState('Gyms');
  return (
    <View>
      <RadioGroup
        selectedValue={category}
        onChange={({ value }) => setCategory(value)}
        style={{
          paddingBottom: 40,
        }}
      >
        <RadioGroup.Button value="Gyms">Gyms</RadioGroup.Button>
        <RadioGroup.Button value="Classes">Classes</RadioGroup.Button>
      </RadioGroup>

      <RadioGroup
        selectedValue={selectedValue}
        onChange={({ value }) => setSelectedValue(value)}
      >
        <RadioGroup.Button value="24h">24 hours</RadioGroup.Button>
        <RadioGroup.Button value="now">Open now</RadioGroup.Button>
        <RadioGroup.Button value="sundays">At Sundays</RadioGroup.Button>
      </RadioGroup>
    </View>
  );
};

export default RadioGroupPage;
