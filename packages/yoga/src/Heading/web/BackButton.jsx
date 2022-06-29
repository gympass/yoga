import React from 'react';
import PropTypes from 'prop-types';
import { ArrowLeft } from '@gympass/yoga-icons';
import Button from '../../Button';

const BackButton = ({ onClick, ...props }) => (
  <Button.Icon {...props} icon={ArrowLeft} inverted onClick={onClick} />
);

BackButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

BackButton.displayName = 'Heading.BackButton';

export default BackButton;
