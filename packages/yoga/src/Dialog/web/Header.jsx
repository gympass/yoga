import React from 'react';
import { Close } from '@gympass/yoga-icons';
import { func, node } from 'prop-types';
import { Box, Button } from '../..';

function Header({ onClose, children, ...props }) {
  return (
    <Box
      as="header"
      ta="center"
      color="text.primary"
      fw="medium"
      fs="xlarge"
      mb="large"
      {...props}
    >
      {onClose && (
        <Box d="flex" justifyContent="flex-end" w="100%">
          <Button.Icon icon={Close} inverted onClick={onClose} />
        </Box>
      )}

      {children}
    </Box>
  );
}

Header.propTypes = {
  onClose: func,
  children: node,
};

Header.defaultProps = {
  onClose: undefined,
  children: null,
};

Header.displayName = 'Dialog.Header';

export default Header;
