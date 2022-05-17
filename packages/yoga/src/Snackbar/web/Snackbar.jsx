import React, { forwardRef, memo, useEffect, useRef } from 'react';
import styled, { keyframes, withTheme } from 'styled-components';
import { func, string, bool, number, oneOf } from 'prop-types';

import { media } from '@gympass/yoga-helpers';

import { Close } from '@gympass/yoga-icons';

import { theme } from '../../Theme';

import Box from '../../Box';
import Button from '../../Button';
import Icon from '../../Icon';
import Text from '../../Text';

const IconButtonWrapper = styled.div`
  display: flex;
  align-items: center;

  cursor: pointer;

  &:hover {
    svg {
      fill: ${theme.colors.text.secondary};
    }
  }
`;

const ActionsWrapper = styled.aside`
  display: flex;
  align-items: center;

  svg {
    margin-left: ${theme.spacing.small}px;
    margin-right: ${theme.spacing.zero};
  }
`;

const StyledSnackbar = styled.div`
  ${({
    variant,
    theme: {
      yoga: {
        components: { snackbar },
      },
    },
  }) => `
      display: flex;
      align-items: center;
      justify-content: space-between;
      box-sizing: border-box;
  
      position: fixed;
      bottom: ${snackbar.position.mobile.bottom}px;
      right: ${snackbar.position.mobile.right}px;
      left: ${snackbar.position.mobile.left}px;
  
      min-width: ${snackbar.minWidth.mobile}px;
      max-width: ${snackbar.maxWidth.default}px;
  
      min-height: ${snackbar.height.min}px;
      max-height: ${snackbar.height.max}px;
  
      padding: ${snackbar.padding.default}px;
      
      border-radius: ${snackbar.border.radius}px;
  
      box-shadow: ${snackbar.shadow.default};

      background-color: ${snackbar.variant.color[variant]};

      z-index: 100;
    `}

  ${media.md`
    left: auto;
    bottom: ${theme.components.snackbar.position.desktop.bottom}px;
    right: ${theme.components.snackbar.position.desktop.right}px;

    min-width: ${theme.components.snackbar.minWidth.desktop}px;
  `}
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const AnimatedSnackbar = styled(StyledSnackbar)`
  animation: ${fadeIn} 0.2s ease-in-out;
`;

const Snackbar = forwardRef(
  (
    {
      open,
      duration,
      variant,
      hideIcon,
      message,
      actionLabel,
      onAction,
      onClose,
      hideCloseButton,
      theme: {
        yoga: {
          components: { snackbar },
        },
      },
      ...props
    },
    ref,
  ) => {
    const timeoutRef = useRef();

    useEffect(() => {
      const shouldCloseOnTimer = open && duration && onClose;

      if (shouldCloseOnTimer) {
        timeoutRef.current = setTimeout(() => {
          onClose();
        }, duration);
      }

      return () => clearTimeout(timeoutRef.current);
    }, [open, duration]);

    return (
      open && (
        <AnimatedSnackbar
          role="alert"
          aria-label={variant}
          variant={variant}
          ref={ref}
          {...props}
        >
          {!hideIcon && (
            <Box display="flex" alignItems="center" mr="small" role="img">
              <Icon
                as={snackbar.variant.icon[variant]}
                fill="secondary"
                width="large"
                height="large"
              />
            </Box>
          )}

          <Text.Small flex={1} mr="small" numberOfLines={2}>
            {message}
          </Text.Small>

          <ActionsWrapper>
            {onAction && actionLabel && (
              <Button.Link onClick={onAction} secondary small>
                {actionLabel}
              </Button.Link>
            )}

            {!hideCloseButton && onClose && (
              <IconButtonWrapper role="button" onClick={onClose}>
                <Icon as={Close} fill="secondary" size="medium" />
              </IconButtonWrapper>
            )}
          </ActionsWrapper>
        </AnimatedSnackbar>
      )
    );
  },
);

Snackbar.propTypes = {
  /** Controls the snackbar visibility. */
  open: bool,

  /** The message shown when snackbar is opened. */
  message: string.isRequired,

  /** Function to close the snackbar. */
  onClose: func.isRequired,

  /** A number in milliseconds to close snackbar automaticaly. */
  duration: number,

  /** Label for a custom action. */
  actionLabel: string,

  /** Controls the snackbar icon visibility. */
  hideIcon: bool,

  /** Function for the custom action. The `actionLabel` becomes required when passing this function. */
  onAction: func,

  /** The style variant, it may be "success", "failure" or "info". */
  variant: oneOf(['success', 'failure', 'info']),

  /** Hides the close button. */
  hideCloseButton: bool,
};

Snackbar.defaultProps = {
  open: false,
  duration: undefined,
  actionLabel: undefined,
  hideIcon: false,
  onAction: undefined,
  variant: 'success',
  hideCloseButton: false,
};

export default memo(withTheme(Snackbar));
