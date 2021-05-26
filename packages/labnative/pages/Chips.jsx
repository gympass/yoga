import React, { useState } from 'react';
import { View } from 'react-native';
import { Chips } from '@gympass/yoga';
import { MapPin, ChevronDown, Filter } from '@gympass/yoga-icons';

const ChipsPage = () => {
  const [classes, toggleClasses] = useState(false);
  const onToggleClass = () => toggleClasses(!classes);

  return (
    <View
      style={{
        width: 360,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
      }}
    >
      <Chips onPress={onToggleClass} selected={classes}>
        Classes
      </Chips>
      <Chips disabled>Gyms and studios</Chips>
      <Chips selected counter={1350}>
        Personal trainers
      </Chips>
      <Chips icons={[MapPin]}>Activities</Chips>
      <Chips icons={[Filter]} />
      <Chips selected icons={[MapPin, ChevronDown]}>
        Availability
      </Chips>
    </View>
  );
};

export default ChipsPage;
