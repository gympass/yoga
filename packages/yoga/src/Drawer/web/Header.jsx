import React from 'react';
import { bool, string, func } from 'prop-types';
import { Close } from '@gympass/yoga-icons';
import Box from '../../Box';
import { Divider, Heading } from '../..';

function Header({ onClose, title, backHandler, divider, hideCloseButton }) {
  function showCloseButton() {
    if (onClose && !hideCloseButton) {
      return (
        <Heading.RightButton
          aria-label="close-button-drawer"
          onClick={onClose}
          icon={Close}
          large
        />
      );
    }

    return null;
  }

  function showTitle() {
    if (title) {
      return (
        <Heading.Title
          style={{
            letterSpacing: '1px',
            textTransform: 'uppercase',
            fontSize: '12px',
          }}
        >
          {title}
        </Heading.Title>
      );
    }

    return null;
  }

  function showBackButton() {
    if (backHandler) {
      return (
        <Heading.BackButton
          aria-label="back-button-drawer"
          onClick={backHandler}
        />
      );
    }

    return null;
  }

  function showDivider() {
    if (divider) {
      return (
        <Box marginTop="small">
          <Divider aria-label="divider-drawer" />
        </Box>
      );
    }

    return null;
  }

  return (
    <Box width="100%">
      <Box paddingTop="small" paddingRight="small" paddingLeft="xxlarge">
        <Heading noPadding role="heading" aria-label="header-drawer">
          {showBackButton()}

          {showTitle()}

          {showCloseButton()}
        </Heading>
      </Box>

      {showDivider()}
    </Box>
  );
}

Header.propTypes = {
  onClose: func,
  title: string,
  backHandler: func,
  divider: bool,
  hideCloseButton: bool,
};

Header.defaultProps = {
  onClose: undefined,
  title: undefined,
  backHandler: undefined,
  divider: false,
  hideCloseButton: false,
};

Header.displayName = 'Drawer.Header';

export default Header;
