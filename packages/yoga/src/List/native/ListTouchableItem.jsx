import React from 'react';
import { TouchableHighlight } from 'react-native';
import { func } from 'prop-types';
import { withTheme } from 'styled-components';

import ListItem from './ListItem';

const ListTouchableItem = ({ theme, onPress, ...rest }) => (
  <TouchableHighlight
    onPress={onPress}
    underlayColor={theme.yoga.components.list.listTouchableItem.color}
  >
    <ListItem {...rest} />
  </TouchableHighlight>
);

ListTouchableItem.propTypes = {
  onPress: func.isRequired,
};

ListTouchableItem.displayName = 'List.TouchableItem';

export default withTheme(ListTouchableItem);
