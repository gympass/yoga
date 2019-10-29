import React from 'react';
import styled from 'styled-components';
import { FlatList } from 'react-native';

const StyledFlatList = styled.FlatList.attrs(() => ({
  as: FlatList,
}))`
  width: 100%;
`;

const List = ({ ...rest }) => <StyledFlatList {...rest} />;

List.displayName = 'List';

export default List;
