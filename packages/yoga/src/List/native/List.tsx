import React from 'react';
import type { FlatListProps } from 'react-native';
import type { FlatList } from 'react-native';
import styled from 'styled-components/native';

const StyledFlatList = styled.FlatList`
  width: 100%;
`;

/** Lists are a continuous group of text or images. They are composed of items
containing primary and supplemental actions, which are represented by icons and
text. */
const List = React.forwardRef<FlatList, FlatListProps<any>>(
  ({ ...rest }, ref) => {
    return <StyledFlatList ref={ref} {...rest} />;
  },
);

List.displayName = 'List';

export default List;
