import React from 'react';
import PropTypes from 'prop-types';
import Text from '../../Text';
import Box from '../../Box';

const Title = ({ children, ...props }) => (
  <Box w="100%" textAlign="center">
    <Text.Body1 {...props} fontSize="small" as="h1" bold>
      {children}
    </Text.Body1>
  </Box>
);

Title.propTypes = {
  children: PropTypes.string.isRequired,
};

Title.displayName = 'Heading.Title';

export default Title;
