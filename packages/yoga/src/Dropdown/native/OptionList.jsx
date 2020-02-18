import { func, any } from 'prop-types';
import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  TouchableWithoutFeedback,
} from 'react-native';

const styles = StyleSheet.create({
  scrollView: {
    height: 120,
    width: 300,
    borderWidth: 1,
  },
});

const OptionList = ({ style, children, onSelect, selectedStyle, selected }) => {
  const renderedItems = React.Children.map(children, (item, key) => {
    if (!item) return null;
    return (
      <TouchableWithoutFeedback
        key={key}
        style={{ borderWidth: 0 }}
        onPress={() => onSelect(item.props.children, item.props.value)}
      >
        <View
          style={[
            { borderWidth: 0 },
            item.props.value === selected ? selectedStyle : null,
          ]}
        >
          {item}
        </View>
      </TouchableWithoutFeedback>
    );
  });

  return (
    <View style={[styles.scrollView, style]}>
      <ScrollView automaticallyAdjustContentInsets={false} bounces={false}>
        {renderedItems}
      </ScrollView>
    </View>
  );
};

OptionList.defaultProps = {
  style: null,
  onSelect: () => {},
};

OptionList.propTypes = {
  style: any,
  onSelect: func,
};

export default OptionList;
