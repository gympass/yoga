import React, { useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import { func, bool, node, number, string } from 'prop-types';

import { Close } from '@gympass/yoga-icons';
import { usePortal, useCombinedRefs } from '../../hooks';
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
  padding: ${onClose ? dialog.padding.withCloseButton : dialog.padding.top}px
  ${dialog.padding.default}px
  ${dialog.padding.default}px;

  width: ${dialog.width.default}px;
  min-height: ${dialog.height.min}px;
  border-radius: ${dialog.border.radius}px;
  `}
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Overlay = styled.div`
  ${({
    zIndex,
    theme: {
      yoga: {
        components: { dialog },
      },
    },
  }) => `
  display: flex;
  z-index: ${zIndex};
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

const Dialog = React.forwardRef(
  (
    { isOpen, hideCloseButton, children, dialogId, onClose, zIndex, ...props },
    forwardedRef,
  ) => {
    const dialogRef = useCombinedRefs(forwardedRef);
    const dialogElement = usePortal(dialogId ?? 'dialog');
    const isCloseButtonVisible = onClose && !hideCloseButton;

    const closeDialog = useCallback(
      e => {
        if (dialogRef.current === e.target && isOpen && onClose) {
          onClose(e);
        }
        return true;
      },
      [onClose, isOpen],
    );

    const keyPress = useCallback(
      e => {
        if (e.key === 'Escape' && isOpen && onClose) {
          onClose(e);
        }
        return true;
      },
      [onClose, isOpen],
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
          zIndex={zIndex}
        >
          <StyledDialog onClose={onClose} {...props}>
            {isCloseButtonVisible && (
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
  },
);

Dialog.propTypes = {
  /** Custom id to allow creating isolated portal nodes */
  dialogId: string,
  /** Control the dialog visibility. */
  isOpen: bool,
  /** Hide the close button when onClose prop is defined. */
  hideCloseButton: bool,
  /** Function to close the dialog. */
  onClose: func,
  zIndex: number,
  children: node.isRequired,
};

Dialog.defaultProps = {
  isOpen: false,
  hideCloseButton: false,
  onClose: undefined,
  zIndex: 3,
  dialogId: undefined,
};

Dialog.displayName = 'Dialog';

export default Dialog;
