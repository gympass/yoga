import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FlatList } from 'react-native';

const StyledFlatList = styled.FlatList`
  width: 100%;
`;

const List = ({ data, renderItem, theme }) => (
  <StyledFlatList data={data} renderItem={renderItem} />
);

List.propTypes = {
  data: PropTypes.arrayOf({}),
  renderItem: PropTypes.func,
};

List.defaultProps = {
  data: {},
  renderItem: () => {},
};

List.displayName = 'List';

export default List;
