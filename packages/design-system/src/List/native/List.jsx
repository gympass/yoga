import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FlatList } from 'react-native';

const StyledFlatList = styled.FlatList`
  width: 100%;
`;

const List = ({ data, renderItem, horizontal }) => (
  <StyledFlatList data={data} renderItem={renderItem} horizontal={horizontal} />
);

List.propTypes = {
  data: PropTypes.arrayOf({}),
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
