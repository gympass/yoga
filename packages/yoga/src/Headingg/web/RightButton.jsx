import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../Button';

const RightButton = ({ onClick, icon }) => (
  <Button.Icon icon={icon} inverted onClick={onClick} />
);

RightButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.node.isRequired,
};

export default RightButton;
