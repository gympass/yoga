import React from 'react';
import { bool, func, string } from 'prop-types';
import styled from 'styled-components';
import { ArrowLeft, Close } from '@gympass/yoga-icons';
import Box from '../../Box';

const HeaderDrawer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  svg {
    cursor: pointer;
  }
`;

const HeaderDrawerTitle = styled(Box)`
  flex: 1;
  text-align: center;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
`;

const Header = props => {
  const { showBackButton, handleOnClose, sectionTitle } = props;

  return (
    <HeaderDrawer {...props}>
      {showBackButton && (
        <ArrowLeft
          onClick={handleOnClose}
          fill="#D8385E"
          width={30}
          height={30}
        />
      )}
      <HeaderDrawerTitle>{sectionTitle}</HeaderDrawerTitle>
      <Close onClick={handleOnClose} fill="#D8385E" width={30} height={30} />
    </HeaderDrawer>
  );
};

Header.propTypes = {
  /** Control the back button visibility. */
  showBackButton: bool,
  handleOnClose: func.isRequired,
  sectionTitle: string.isRequired,
};

Header.defaultProps = {
  showBackButton: false,
};

Header.displayName = 'Drawer.Header';

export default Header;
