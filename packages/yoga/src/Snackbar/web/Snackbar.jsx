import React from 'react';
import styled from 'styled-components';
import { func, string, bool } from 'prop-types';

import { CheckedFull, Close } from '@gympass/yoga-icons';

import Icon from '../../Icon';
import Button from '../../Button';
import Text from '../../Text';

import { theme } from '../../Theme';

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
      bottom: ${theme.spacing.xxlarge}px;
      right: ${theme.spacing.xxlarge}px;
  
      min-width: ${snackbar.width.min}px;
      max-width: ${snackbar.width.max}px;
  
      min-height: ${snackbar.height.min}px;
      max-height: ${snackbar.height.max}px;
  
      padding: ${snackbar.padding.default}px;
      
      background-color: ${snackbar.variant.success.backgroundColor};
      
      border-radius: ${snackbar.border.radius}px;
  
      box-shadow: ${snackbar.shadow.default};
    `}
`;

const Snackbar = ({
  open,
  hasIcon,
  message,
  actionText,
  onAction,
  onClose,
  ...props
}) => (
  <StyledSnackbar {...props}>
    {hasIcon && (
      <IconWrapper>
        <Icon as={CheckedFull} fill="secondary" width="large" height="large" />
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

Snackbar.propTypes = {
  message: string.isRequired,
  hasIcon: bool,
  open: bool,
  actionText: string,
  onAction: func,
  onClose: func,
};

Snackbar.defaultProps = {
  hasIcon: true,
  open: false,
  actionText: undefined,
  onAction: undefined,
  onClose: undefined,
};

export default Snackbar;
