import React, { useEffect, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import { func, bool, node } from 'prop-types';

import { Close } from '@gympass/yoga-icons';
import { usePortal } from '../../hooks';
import { Button, Card, Box } from '../..';

export const StyledDialog = styled(Card)`
  ${({
    onClose,
    theme: {
      yoga: {
        components: { dialog },
      },
    },
  }) => `
  display: flex;
  align-items: center;
  flex-direction: column;

  padding: ${onClose ? dialog.padding.withCloseButton : dialog.padding.top}px 
  ${dialog.padding.default}px 
  ${dialog.padding.default}px;

  width: ${dialog.width.default}px;
  min-height: ${dialog.height.min}px;
  border-radius: ${dialog.border.radius}px;
  `}
`;

const Overlay = styled.div`
  ${({
    theme: {
      yoga: {
        components: { dialog },
      },
    },
  }) => `
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: ${dialog.position.default};
  right: ${dialog.position.default};
  left: ${dialog.position.default};
  bottom: ${dialog.position.default};

  background-color: rgba(35, 27, 34, 0.48);
  `}
`;

const Dialog = ({ isOpen, children, onClose, ...props }) => {
  const dialogRef = useRef(null);

  const dialogElement = usePortal('dialog');

  const closeDialog = useCallback(
    e => {
      if (dialogRef.current === e.target && isOpen) {
        onClose(e);
      }
      return true;
    },
    [onClose],
  );

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && isOpen) {
        onClose(e);
      }
      return true;
    },
    [onClose],
  );

  useEffect(() => {
    document.addEventListener('keydown', keyPress);

    return () => document.removeEventListener('keydown', keyPress);
  }, [keyPress]);

  return isOpen ? (
    createPortal(
      <Overlay
        onClick={closeDialog}
        onClose={onClose}
        ref={dialogRef}
        {...props}
      >
        <StyledDialog onClose={onClose}>
          {onClose && (
            <Box d="flex" justifyContent="flex-end" w="100%">
              <Button.Icon icon={Close} inverted onClick={onClose} />
            </Box>
          )}
          {children}
        </StyledDialog>
      </Overlay>,
      dialogElement,
    )
  ) : (
    <></>
  );
};

Dialog.propTypes = {
  /** Control the dialog visibility. */
  isOpen: bool,

  /** Function to close the dialog. */
  onClose: func,

  /** The chidren necessary */
  children: node.isRequired,
};

Dialog.defaultProps = {
  isOpen: false,
  onClose: undefined,
};

Dialog.displayName = 'Dialog';

export default Dialog;
