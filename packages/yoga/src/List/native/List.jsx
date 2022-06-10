import React from 'react';
import styled from 'styled-components';

const StyledFlatList = styled.FlatList`
  width: 100%;
`;

/** Lists are a continuous group of text or images. They are composed of items
containing primary and supplemental actions, which are represented by icons and
text. */
const List = React.forwardRef(({ ...rest }, ref) => (
  <StyledFlatList ref={ref} {...rest} />
));

List.displayName = 'List';

export default List;
