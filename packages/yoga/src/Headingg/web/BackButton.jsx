import React from 'react';
import PropTypes from 'prop-types';
import { ArrowLeft } from '@gympass/yoga-icons';
import Button from '../../Button';

const BackButton = ({ onClick }) => (
  <Button.Icon icon={ArrowLeft} inverted onClick={onClick} />
);

BackButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default BackButton;
