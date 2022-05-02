import { CheckedFull, Close } from '@gympass/yoga-icons';
import React from 'react';
import styled from 'styled-components';
import { Box, Button, Icon, Text } from '../..';

const SnackbarContainer = styled.View`
  ${({
    theme: {
      yoga: {
        components: { snackbar },
      },
    },
  }) => `
    background-color: ${snackbar.variant.color.success};
    padding: ${snackbar.padding.default}px;
    border-radius: ${snackbar.border.radius}px;
    flex-direction: row;
    align-items: center;
    margin: ${snackbar.margin.top}px ${snackbar.margin.right}px ${snackbar.margin.bottom}px ${snackbar.margin.left}px;
    position: absolute;
    bottom: 0;
    z-index: 10px;
  `}
`;

const Snackbar = props => (
  <SnackbarContainer {...props}>
    <Icon
      as={CheckedFull}
      fill="secondary"
      size="large"
      marginRight="xxsmall"
    />
    <Text flex={1} fontSize="small">
      Snackbar
    </Text>
    <Box as={Button.Text} small secondary marginLeft="xxsmall">
      Action
    </Box>
    <Icon as={Close} fill="secondary" size="large" marginLeft="xxsmall" />
  </SnackbarContainer>
);

Snackbar.propTypes = {};

Snackbar.defaultProps = {};

export default Snackbar;
