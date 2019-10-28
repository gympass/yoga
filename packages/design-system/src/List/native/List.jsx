import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FlatList } from 'react-native';

const StyledFlatList = styled.FlatList.attrs(() => ({
  as: FlatList,
}))`
  width: 100%;
`;

const List = ({ data, renderItem, horizontal, ...rest }) => (
  <StyledFlatList
    data={data}
    renderItem={renderItem}
    horizontal={horizontal}
    {...rest}
  />
);

List.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  renderItem: PropTypes.func,
  horizontal: PropTypes.bool,
};

List.defaultProps = {
  data: {},
  renderItem: () => {},
  horizontal: false,
};

List.displayName = 'List';

export default List;
