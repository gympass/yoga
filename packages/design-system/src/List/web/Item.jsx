import React from 'react';
import PropTypes from 'prop-types';

const Item = ({ children }) => {
  return <div>sdzfsd {children}</div>;
};

Item.propTypes = {
  children: PropTypes.node,
};

Item.defaultProps = {
  children: undefined,
};

Item.displayName = 'Item';

export default Item;
