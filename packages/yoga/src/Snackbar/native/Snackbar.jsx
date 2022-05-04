import React from 'react';
import styled, { withTheme } from 'styled-components';
import { string, oneOf, node, func, elementType } from 'prop-types';
import { Box, Button, Icon, Text } from '../..';

const SnackbarContainer = styled.View`
  flex-direction: row;
  align-items: center;
  position: absolute;
  bottom: 0;
  z-index: 10px;
  ${({
    variant,
    theme: {
      yoga: {
        colors: { feedback },
        components: {
          snackbar: {
            padding,
            margin,
            shadow,
            variant: { [variant]: backgroundColor = feedback.success.light },
            border,
          },
        },
      },
    },
  }) => `
    padding: ${padding.default}px;
    margin: ${margin.top}px ${margin.right}px ${margin.bottom}px ${margin.left}px;
    box-shadow: ${shadow.default};
    background-color: ${backgroundColor};
    border-radius: ${border.radius}px;
  `}
`;

const Snackbar = ({ icon, children, actionLabel, onAction, ...props }) => (
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
  </SnackbarContainer>
);

Snackbar.propTypes = {
  icon: elementType,
  variant: oneOf(['success', 'informative', 'attention', 'failure', 'info']),
  children: node.isRequired,
  actionLabel: string,
  onAction: func,
};

Snackbar.defaultProps = {
  icon: undefined,
  variant: 'success',
  actionLabel: undefined,
  onAction: undefined,
};

export default withTheme(Snackbar);
