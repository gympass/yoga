import { Close } from '@gympass/yoga-icons';
import React from 'react';
import styled, { withTheme } from 'styled-components';
import { string, oneOf, node, func, elementType } from 'prop-types';
import { Box, Button, Icon, Text } from '../..';

const SnackbarContainer = styled.View`
  ${({
    variant,
    theme: {
      yoga: {
        components: { snackbar },
      },
    },
  }) => `
    flex-direction: row;
    align-items: center;
    position: absolute;
    bottom: 0;
    z-index: 10px;
    padding: ${snackbar.padding.default}px;
    margin: ${snackbar.margin.top}px ${snackbar.margin.right}px ${snackbar.margin.bottom}px ${snackbar.margin.left}px;
    box-shadow: ${snackbar.shadow.default};
    background-color: ${snackbar.variant.color[variant]};
    border-radius: ${snackbar.border.radius}px;
  `}
`;

const Snackbar = ({
  icon,
  children,
  actionLabel,
  onAction,
  onClose,
  ...props
}) => (
  <SnackbarContainer {...props}>
    {icon && (
      <Icon as={icon} fill="secondary" size="large" marginRight="xxsmall" />
    )}
    <Text flex={1} fontSize="small">
      {children}
    </Text>
    {actionLabel && onAction && (
      <Box as={Button.Text} small secondary marginLeft="xxsmall">
        {actionLabel}
      </Box>
    )}

    {onClose && (
      <Icon as={Close} fill="secondary" size="large" marginLeft="xxsmall" />
    )}
  </SnackbarContainer>
);

Snackbar.propTypes = {
  icon: elementType,
  variant: oneOf(['success', 'informative', 'attention', 'failure', 'info']),
  children: node.isRequired,
  actionLabel: string,
  onAction: func,
  onClose: func,
};

Snackbar.defaultProps = {
  icon: undefined,
  variant: 'success',
  actionLabel: undefined,
  onAction: undefined,
  onClose: undefined,
};

export default withTheme(Snackbar);
