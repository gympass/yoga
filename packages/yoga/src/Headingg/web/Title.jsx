import React from 'react';
import PropTypes from 'prop-types';
import Text from '../../Text';
import Box from '../../Box';

const Title = ({ children }) => (
  <Box w="100%" textAlign="center">
    <Text.Medium size="small">{children}</Text.Medium>
  </Box>
);

Title.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Title;
