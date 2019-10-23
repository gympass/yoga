import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledItem = styled.li``;

const Item = ({ children, as }) => <StyledItem as={as}>{children}</StyledItem>;

Item.propTypes = {
  children: PropTypes.node,
  as: PropTypes.string,
};

Item.defaultProps = {
  children: undefined,
  as: 'li',
};

Item.displayName = 'Item';

export default Item;
