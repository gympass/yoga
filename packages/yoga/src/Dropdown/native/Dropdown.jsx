import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  TouchableOpacity,
  Picker,
} from 'react-native';

import { Arrow } from '@gympass/yoga-icons';

const CloseArea = styled.TouchableOpacity`
  flex: 1;
`;

const OptionList = styled.View`
  justify-content: center;
  background-color: #eee;
  border-radius: 40px;
`;

const Selector = styled.View`
  ${({
    disabled,
    theme: {
      yoga: {
        components: { dropdown },
      },
    },
  }) => `
    width: ${dropdown.width}px;
    position: relative;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: ${dropdown.selector.padding.top}px 
      ${dropdown.selector.padding.right}px
      ${dropdown.selector.padding.bottom}px
      ${dropdown.selector.padding.left}px;

    background-color: ${dropdown.selector.background};
    border-radius: ${dropdown.selector.border.radius}px;
    border: 1px solid ${
      disabled
        ? dropdown.disabled.selector.border.color
        : dropdown.selector.border.color
    };
  `}
`;

const Dropdown = ({ label, disabled, options, onChange, ...rest }) => {
  const [dropdownLabel, setDropdownLabel] = useState(label);
  const [selected, setSelected] = useState();
  const [isOpen, setIsOpen] = useState(false);

  const handleOnSelect = item => {
    setIsOpen(false);
    setDropdownLabel(item.label);
    // onChange(item.label);
  };

  const handleOnClose = () => {
    setIsOpen(false);
  };

  const handleOnPress = () => {
    setIsOpen(!isOpen);
  };

  const handleOnModalPress = () => {
    setIsOpen(false);
  };

  return (
    <View>
      <TouchableWithoutFeedback onPress={() => handleOnPress()}>
        <Selector style={{ paddingRight: 14 }}>
          <Text>{dropdownLabel}</Text>
          <Arrow />
        </Selector>
      </TouchableWithoutFeedback>

      <Modal
        visible={isOpen}
        transparent
        animationType="none"
        supportedOrientations={['portrait', 'landscape']}
      >
        <CloseArea onPress={() => handleOnPress()} />
        <OptionList>
          <Picker
            onValueChange={(itemValue, itemIndex) =>
              handleOnSelect({ label: itemValue, value: itemIndex })
            }
          >
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
          </Picker>
        </OptionList>
      </Modal>
    </View>
  );
};

Dropdown.defaultProps = {
  label: 'Click To Select',
  onSelect: () => {},
  transparent: false,
  animationType: 'none',
  indicator: 'none',
  indicatorColor: 'black',
  indicatorSize: 10,
  indicatorIcon: null,
};

export default Dropdown;
