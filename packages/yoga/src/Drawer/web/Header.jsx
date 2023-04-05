import React from 'react';
import { bool, string, func } from 'prop-types';
import { Close, ArrowLeft } from '@gympass/yoga-icons';
import Box from '../../Box';
import { Button, Text, Divider, Row, Col } from '../..';

function Header({ onClose, title, backHandler, divider, hideCloseButton }) {
  const showCloseButton = onClose && !hideCloseButton;

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

  function closeButton() {
    if (showCloseButton) {
      return (
        <Button.Icon
          icon={Close}
          inverted
          onClick={onClose}
          aria-label="close-button-drawer"
        />
      );
    }

    return null;
  }

  function headerContent() {
    if (title && backHandler) {
      return (
        <Row>
          <Col xxs={4}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="start"
              width="100%"
              height="100%"
            >
              <Button.Icon
                icon={ArrowLeft}
                inverted
                onClick={backHandler}
                aria-label="back-button-drawer"
              />
            </Box>
          </Col>

          <Col xxs={4}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              width="100%"
              height="100%"
            >
              <Text textTransform="uppercase" fontSize="xsmall">
                {title}
              </Text>
            </Box>
          </Col>

          <Col xxs={4}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="end"
              width="100%"
              height="100%"
            >
              {closeButton()}
            </Box>
          </Col>
        </Row>
      );
    }

    if (title && !backHandler) {
      return (
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
        >
          <Text textTransform="uppercase" fontSize="xsmall">
            {title}
          </Text>

          {closeButton()}
        </Box>
      );
    }

    if (!title && !backHandler) {
      return (
        <Box d="flex" justifyContent="flex-end" w="100%">
          {closeButton()}
        </Box>
      );
    }
    return null;
  }

  return (
    <Box as="header" role="heading" aria-label="header-drawer" width="100%">
      <Box paddingTop="small" paddingRight="small" paddingLeft="xxlarge">
        {headerContent()}
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
