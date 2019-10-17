import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { TouchableOpacity, View } from 'react-native';

const SwitchTrack = styled.TouchableOpacity`
  ${({ theme }) =>
    theme &&
    `
    width: 64px;
    height: 32px;
    borderRadius: 32px;
    padding: 4px;
    background-color: gray;
  `};

  ${({ checked }) => checked && `background-color: limegreen;`}
`;

function Switch() {
  const [checked, setChecked] = useState(true);

  return (
    <View>
      <SwitchTrack
        activeOpacity={0.5}
        checked={checked}
        onPress={() => setChecked(!checked)}
      >
        <View
          style={{
            width: 24,
            height: 24,
            borderRadius: 32,
            backgroundColor: 'white',
            transform: [
              {
                translateX: checked ? 32 : 0,
              },
            ],
          }}
        />
      </SwitchTrack>
    </View>
  );
}

Switch.propTypes = {};

Switch.defaultProps = {};

export default Switch;
