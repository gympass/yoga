import React, { useState } from 'react';
import { View } from 'react-native';
import { string, func, oneOfType, number, bool, node } from 'prop-types';
import styled from 'styled-components';

import RadioGroupContext from '../RadioGroupContext';
import RadioButton from './Button/RadioButton';

const Group = styled.View(
  () => `
    align-self: center;
    position: relative;
    flex-direction: row;
  `,
);

const GrayLine = styled.View(
  ({
    theme: {
      yoga: {
        components: { radiogroup },
      },
    },
  }) => `
    position: absolute;
    height: 100%;
    border-radius: ${radiogroup.button.border.radius}px;
    border-width: ${radiogroup.button.border.width}px;
    border-color: ${radiogroup.button.border.color};
  `,
);

const RadioGroup = ({
  onChange = () => {},
  selectedValue = '',
  small = false,
  children,
  ...rest
}) => {
  const [groupSize, setGroupSize] = useState(0);

  const isButton = React.Children.map(children, child => child.type).every(
    child => child === RadioButton,
  );

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
          {...rest}
          onLayout={({
            nativeEvent: {
              layout: { width },
            },
          }) => setGroupSize(width)}
        >
          {Boolean(isButton && groupSize) && (
            <GrayLine style={{ width: groupSize }} />
          )}

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
  children: node.isRequired,
};

export default RadioGroup;
