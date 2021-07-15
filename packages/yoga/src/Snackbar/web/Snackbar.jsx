import React, { useEffect } from 'react';
import styled, { withTheme } from 'styled-components';
import { func, string, bool, number, oneOf } from 'prop-types';

import { media } from '@gympass/yoga-helpers';

import { Close } from '@gympass/yoga-icons';

import { theme } from '../../Theme';

import Box from '../../Box';
import Button from '../../Button';
import Icon from '../../Icon';
import Text from '../../Text';

const IconWrapper = styled.div`
  display: flex;
  align-items: center;

  margin-right: ${theme.spacing.xxsmall}px;
`;

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

    width: ${theme.components.snackbar.minWidth.desktop}px;
  `}
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
  useEffect(() => {
    let timer;

    if (open && autoClose && onClose) {
      timer = setTimeout(() => {
        onClose();
      }, autoClose);
    }

    return () => clearTimeout(timer);
  }, [open, autoClose]);

  return (
    open && (
      <StyledSnackbar variant={variant} {...props}>
        {!hideIcon && (
          <IconWrapper>
            <Icon
              as={snackbar.variant.icon[variant]}
              fill="secondary"
              width="large"
              height="large"
            />
          </IconWrapper>
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

          {onClose && (
            <IconButtonWrapper onClick={onClose}>
              <Icon as={Close} fill="secondary" width="large" height="large" />
            </IconButtonWrapper>
          )}
        </ActionsWrapper>
      </StyledSnackbar>
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
  autoClose: false,
  actionLabel: undefined,
  hideIcon: false,
  onAction: undefined,
  onClose: undefined,
  variant: 'info',
};

export default withTheme(Snackbar);
