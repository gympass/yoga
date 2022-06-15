import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../Button';

const RightButton = ({ onClick, icon, ...props }) => (
  <Button.Icon {...props} icon={icon} inverted onClick={onClick} />
);

RightButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.elementType.isRequired,
};

export default RightButton;
