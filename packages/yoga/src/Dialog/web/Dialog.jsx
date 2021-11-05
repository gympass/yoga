import React, { useEffect, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
import styled, { withTheme } from 'styled-components';
import { func, bool, node } from 'prop-types';

import usePortal from './usePortal';
import { Button, Card, Box } from '../..';
import { Close } from '../../../../icons/src';

const StyledDialog = styled(Card)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  position: relative;
  z-index: 10;
  border-radius: 16px;

  padding: ${({ onClose }) => (onClose ? '64px' : '40px')} 32px 32px 32px;

  backdrop-filter: blur(1px);
  width: 580px;
  min-height: 232px;
  background-color: white;
  color: black;
`;

const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;

  background: rgba(35, 27, 34, 0.48);
`;

const Dialog = ({ isOpen, children, onClose }) => {
  const dialogRef = useRef(null);

  const dialogRoot = usePortal('dialog');

  const closeDialog = useCallback(
    e => {
      if (dialogRef.current === e.target && isOpen) {
        onClose(false);
      }
      return true;
    },
    [onClose],
  );

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && isOpen) {
        onClose(false);
      }
      return true;
    },
    [onClose],
  );

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  }, [keyPress]);

  return createPortal(
    isOpen && (
      <Background onClick={closeDialog} onClose={onClose} ref={dialogRef}>
        <StyledDialog onClose={onClose}>
          {onClose && (
            <Box position="absolute" right={32} top={24}>
              <Button.Icon icon={Close} inverted onClick={onClose} />
            </Box>
          )}
          {children}
        </StyledDialog>
      </Background>
    ),
    dialogRoot,
  );
};

Dialog.propTypes = {
  isOpen: bool,
  onClose: func,
  children: node.isRequired,
};

Dialog.defaultProps = {
  isOpen: false,
  onClose: undefined,
};

export default withTheme(Dialog);
