import React from 'react';
import styled from 'styled-components';
import { bool, node } from 'prop-types';
import Dialog from '../../Dialog';
import { StyledDialog } from '../../Dialog/web/Dialog';

const StyledBottomSheet = styled(Dialog)`
  align-items: end;
  z-index: 99;

  ${StyledDialog} {
    padding: 24px 20px 24px 20px;
    width: 100%;
    border-radius: 16px 16px 0px 0px;
  }
  animation: content;
  animation-duration: 1s;
  animation-fill-mode: forwards;

  @keyframes content {
    0% {
      bottom: -50rem;
    }
    100% {
      bottom: 0;
    }
  }
`;

const BottomSheet = ({ isOpen, children }) => {
  return <StyledBottomSheet isOpen={isOpen}>{children}</StyledBottomSheet>;
};

BottomSheet.propTypes = {
  /** Control the dialog visibility. */
  isOpen: bool,

  /** The chidren necessary */
  children: node.isRequired,
};

BottomSheet.defaultProps = {
  isOpen: false,
};

export default BottomSheet;
