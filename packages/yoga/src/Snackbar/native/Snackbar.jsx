import { Close } from '@gympass/yoga-icons';
import React from 'react';
import styled, { withTheme } from 'styled-components';
import { string, oneOf, node, bool } from 'prop-types';
import { Box, Button, Icon, Text } from '../..';

const SnackbarContainer = styled.View`
  ${({
    variantColor,
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
    background-color: ${snackbar.variantColor[variantColor]};
    border-radius: ${snackbar.border.radius}px;
  `}
`;

const Snackbar = ({
  icon,
  children,
  actionLabel,
  closeButton,
  theme: {
    yoga: {
      components: { snackbar },
    },
  },
  ...props
}) => (
  <SnackbarContainer {...props}>
    {icon && (
      <Icon
        as={snackbar.icon[icon]}
        fill="secondary"
        size="large"
        marginRight="xxsmall"
      />
    )}
    <Text flex={1} fontSize="small">
      {children}
    </Text>
    <Box as={Button.Text} small secondary marginLeft="xxsmall">
      {actionLabel}
    </Box>
    {closeButton && (
      <Icon as={Close} fill="secondary" size="large" marginLeft="xxsmall" />
    )}
  </SnackbarContainer>
);

Snackbar.propTypes = {
  icon: oneOf(['CheckedFull', 'AlertTriangle', 'Info']),
  variantColor: oneOf(['success', 'informative', 'attention']),
  children: node.isRequired,
  actionLabel: string,
  closeButton: bool,
};

Snackbar.defaultProps = {
  icon: 'CheckedFull',
  variantColor: 'success',
  actionLabel: undefined,
  closeButton: false,
};

export default withTheme(Snackbar);
