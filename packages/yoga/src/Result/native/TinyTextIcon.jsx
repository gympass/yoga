import React from 'react';
import Box from '../../Box';
import Icon from '../../Icon';

const TinyTextIcon = ({ marginTop, ...props }) => (
  <Box height="xsmall" width="xsmall">
    <Icon {...props} size="xsmall" mt={marginTop} />
  </Box>
);

TinyTextIcon.propTypes = Icon.propTypes;

export default TinyTextIcon;
