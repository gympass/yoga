import React from 'react';
import Box from '../../Box';
import Icon from '../../Icon';

function TinyTextIcon(props) {
  return (
    <Box height="xsmall" width="xsmall">
      <Icon size="xsmall" style={{ marginTop: 2 }} {...props} />
    </Box>
  );
}

TinyTextIcon.propTypes = Icon.propTypes;

export default TinyTextIcon;
