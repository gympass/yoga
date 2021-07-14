import React from 'react';
import styled, { withTheme } from 'styled-components';
import { func, string, bool, oneOf } from 'prop-types';

import { Close } from '@gympass/yoga-icons';

import { theme } from '../../Theme';

import Icon from '../../Icon';
import Button from '../../Button';
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

const Message = styled(Text.Small)`
  flex: 1;
  margin-right: ${theme.spacing.small}px;
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
      bottom: ${snackbar.position.bottom}px;
      right: ${snackbar.position.right}px;
  
      min-width: ${snackbar.width.min}px;
      max-width: ${snackbar.width.max}px;
  
      min-height: ${snackbar.height.min}px;
      max-height: ${snackbar.height.max}px;
  
      padding: ${snackbar.padding.default}px;
      
      border-radius: ${snackbar.border.radius}px;
  
      box-shadow: ${snackbar.shadow.default};

      background-color: ${snackbar.variant.color[variant]};
    `}
`;

const Snackbar = ({
  open,
  variant,
  hasIcon,
  message,
  actionText,
  onAction,
  onClose,
  theme: {
    yoga: {
      components: { snackbar },
    },
  },
  ...props
}) => {
  return (
    <StyledSnackbar variant={variant} {...props}>
      {hasIcon && (
        <IconWrapper>
          <Icon
            as={snackbar.variant.icon[variant]}
            fill="secondary"
            width="large"
            height="large"
          />
        </IconWrapper>
      )}

      <Message>{message}</Message>

      <ActionsWrapper>
        {onAction && actionText && (
          <Button.Link onClick={onAction} secondary small>
            {actionText}
          </Button.Link>
        )}

        {onClose && (
          <IconButtonWrapper>
            <Icon as={Close} fill="secondary" width="large" height="large" />
          </IconButtonWrapper>
        )}
      </ActionsWrapper>
    </StyledSnackbar>
  );
};

Snackbar.propTypes = {
  message: string.isRequired,
  hasIcon: bool,
  open: bool,
  variant: oneOf(['success', 'failure', 'info']),
  actionText: string,
  onAction: func,
  onClose: func,
};

Snackbar.defaultProps = {
  hasIcon: true,
  open: false,
  variant: 'info',
  actionText: undefined,
  onAction: undefined,
  onClose: undefined,
};

export default withTheme(Snackbar);
