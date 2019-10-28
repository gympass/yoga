import React from 'react';
import styled from 'styled-components';

const StyledItem = styled.li``;

const Item = ({ ...rest }) => <StyledItem {...rest} />;

Item.displayName = 'Item';

export default Item;
