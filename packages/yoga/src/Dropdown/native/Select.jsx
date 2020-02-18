import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
} from 'react-native';

import OptionList from './OptionList';
import Indicator from './Indicator';

const styles = StyleSheet.create({
  selectBox: {
    borderWidth: 1,
    width: 200,
    padding: 10,
    borderColor: 'black',
  },
  selectBoxContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Select = ({
  children,
  style,
  label,
  textStyle,
  backdropStyle,
  optionListStyle,
  transparent,
  animationType,
  indicator,
  indicatorColor,
  indicatorSize,
  indicatorStyle,
  indicatorIcon,
  selectedStyle,
  selectedItem,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [defaultText, setDefaultText] = useState(label);
  const [selected, setSelected] = useState(selectedItem);

  useEffect(() => {
    return selected == null ? setDefaultText(label) : null;
  }, []);

  const handleOnSelect = (label, value) => {
    setModalVisible(false);
    setDefaultText(label);
  };

  const handleOnClose = () => {
    setModalVisible(false);
  };

  const handleOnPress = () => {
    setModalVisible(!modalVisible);
  };

  const handleOnModalPress = () => {
    setModalVisible(false);
  };

  const setSelectedText = text => {
    setDefaultText(text);
  };

  return (
    <View>
      <TouchableWithoutFeedback onPress={() => handleOnPress()}>
        <View style={[styles.selectBox, style]}>
          <View style={styles.selectBoxContent}>
            <Text style={textStyle}>{defaultText}</Text>
            {indicatorIcon ? (
              indicatorIcon
            ) : (
              <Indicator
                direction={indicator}
                color={indicatorColor}
                size={indicatorSize}
                style={indicatorStyle}
              />
            )}
          </View>
        </View>
      </TouchableWithoutFeedback>

      <Modal
        transparent={transparent}
        animationType={animationType}
        visible={modalVisible}
        onRequestClose={() => handleOnClose()}
        supportedOrientations={[
          'portrait',
          'portrait-upside-down',
          'landscape',
          'landscape-left',
          'landscape-right',
        ]}
      >
        <TouchableWithoutFeedback onPress={() => handleOnModalPress()}>
          <View style={[styles.modalOverlay, backdropStyle]}>
            <OptionList
              onSelect={(label, value) => handleOnSelect(label, value)}
              selectedStyle={selectedStyle}
              selected={selected}
              style={[optionListStyle]}
            >
              {children}
            </OptionList>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

Select.defaultProps = {
  label: 'Click To Select',
  onSelect: () => {},
  transparent: false,
  animationType: 'none',
  indicator: 'none',
  indicatorColor: 'black',
  indicatorSize: 10,
  indicatorIcon: null,
};

export default Select;
