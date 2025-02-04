import React, { useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import FocusLock from 'react-focus-lock';
import styled, { css } from 'styled-components';
import { func, bool, node, number, string } from 'prop-types';

import { Close } from '@gympass/yoga-icons';
import { usePortal, useCombinedRefs } from '../../hooks';
import { Button, Card, Box } from '../..';
import { focusOnFirstProgrammaticFocusableElement } from './utils';

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

const CloseButton = styled(Button.Icon)`
  ${({ theme }) => {
    const background = theme.yoga.colors.elements.lineAndBorders;
    const containerSize = theme.yoga.spacing.xxlarge;
    const svgSize = theme.yoga.spacing.medium;

    return css`
      width: ${containerSize}px;
      height: ${containerSize}px;
      background-color: ${background};

      svg {
        width: ${svgSize}px;
        height: ${svgSize}px;
      }

      &:active {
        background-color: ${background};
      }
    `;
  }}
`;

const Dialog = React.forwardRef(
  (
    {
      isOpen = false,
      hideCloseButton = false,
      children,
      dialogId,
      onClose,
      zIndex = 3,
      closeLabel,
      className,
      ...props
    },
    forwardedRef,
  ) => {
    const dialogRef = useCombinedRefs(forwardedRef);
    const dialogElement = usePortal(dialogId ?? 'dialog');
    const isCloseButtonVisible = onClose && !hideCloseButton;
    const lockProps = {
      role: 'dialog',
      'aria-modal': true,
      onClose,
      ...props,
    };

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
          <FocusLock
            as={StyledDialog}
            lockProps={lockProps}
            returnFocus
            disabled={!isOpen}
            className={className}
            onActivation={focusOnFirstProgrammaticFocusableElement}
          >
            {isCloseButtonVisible && (
              <Box d="flex" justifyContent="flex-end" w="100%">
                <CloseButton
                  aria-label={closeLabel}
                  icon={Close}
                  inverted
                  secondary
                  onClick={onClose}
                />
              </Box>
            )}
            {children}
          </FocusLock>
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
  closeLabel: string,
  className: string,
  zIndex: number,
  children: node.isRequired,
};

Dialog.displayName = 'Dialog';

export default Dialog;
