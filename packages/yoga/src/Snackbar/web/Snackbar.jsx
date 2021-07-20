import React, { memo, useEffect, useRef } from 'react';
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
  
      position: absolute;
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
  animation: ${fadeIn} 0.5s ease-out;
`;

const Snackbar = ({
  open,
  autoClose,
  variant,
  hideIcon,
  message,
  actionLabel,
  onAction,
  onClose,
  theme: {
    yoga: {
      components: { snackbar },
    },
  },
  ...props
}) => {
  const timeoutRef = useRef();

  useEffect(() => {
    const shouldCloseOnTimer = open && autoClose && onClose;

    if (shouldCloseOnTimer) {
      timeoutRef.current = setTimeout(() => {
        onClose();
      }, autoClose);
    }

    return () => clearTimeout(timeoutRef.current);
  }, [open, autoClose]);

  return (
    open && (
      <AnimatedSnackbar
        role="alert"
        aria-label={variant}
        variant={variant}
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

        <Box as={Text.Small} flex={1} mr="small" numberOfLines={2}>
          {message}
        </Box>

        <ActionsWrapper>
          {onAction && actionLabel && (
            <Button.Link onClick={onAction} secondary small>
              {actionLabel}
            </Button.Link>
          )}

          {!autoClose && onClose && (
            <IconButtonWrapper role="button" onClick={onClose}>
              <Icon as={Close} fill="secondary" width="large" height="large" />
            </IconButtonWrapper>
          )}
        </ActionsWrapper>
      </AnimatedSnackbar>
    )
  );
};

Snackbar.propTypes = {
  /** Controls the snackbar visibility. */
  open: bool,

  /** A number in milliseconds to close snackbar automaticaly. The `onClose` function becomes required when passing this function. */
  autoClose: number,

  /** Label for a custom action. */
  actionLabel: string,

  /** Controls the snackbar icon visibility. */
  hideIcon: bool,

  /** The message shown when snackbar is opened. */
  message: string.isRequired,

  /** Function for the custom action. The `actionLabel` becomes required when passing this function. */
  onAction: func,

  /** Function to close the snackbar. */
  onClose: func,

  /** The style variant, it may be "success", "failure" or "info". */
  variant: oneOf(['success', 'failure', 'info']),
};

Snackbar.defaultProps = {
  open: false,
  autoClose: undefined,
  actionLabel: undefined,
  hideIcon: false,
  onAction: undefined,
  onClose: undefined,
  variant: 'success',
};

export default memo(withTheme(Snackbar));
