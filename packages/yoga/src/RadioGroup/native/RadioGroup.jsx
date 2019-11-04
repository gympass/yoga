import React, { useState } from 'react';
import { View } from 'react-native';
import { string, func, oneOfType, number, bool, node } from 'prop-types';
import styled from 'styled-components';

import RadioGroupContext from '../RadioGroupContext';

const Group = styled.View`
  align-self: center;
  position: relative;
  flex-direction: row;
`;

const GrayLine = styled.View`
  position: absolute;
  height: 100%;

  ${({
    theme: {
      components: {
        radioGroup: {
          radii,
          border: { width: borderWidth, color: borderColor },
        },
      },
    },
  }) => `
    border-radius: ${radii}px;
    border-width: ${borderWidth}px;
    border-color: ${borderColor};
  `}
`;

const RadioGroup = ({
  onChange,
  selectedValue,
  small,
  full,
  children,
  ...rest
}) => {
  const [groupSize, setGroupSize] = useState(0);
  return (
    <RadioGroupContext.Provider
      value={{
        selectedValue,
        onChange,
        small,
        ...rest,
      }}
    >
      <View>
        <Group
          full={full}
          {...rest}
          onLayout={({
            nativeEvent: {
              layout: { width },
            },
          }) => setGroupSize(width)}
        >
          <GrayLine style={{ width: groupSize }} />
          {children}
        </Group>
      </View>
    </RadioGroupContext.Provider>
  );
};

RadioGroup.propTypes = {
  onChange: func,
  selectedValue: oneOfType([string, number]),
  small: bool,
  children: node,
};

RadioGroup.defaultProps = {
  onChange: () => {},
  selectedValue: '',
  small: false,
  children: null,
};

export default RadioGroup;
